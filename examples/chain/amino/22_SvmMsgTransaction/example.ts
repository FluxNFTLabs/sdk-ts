import * as ethwallet from '@ethereumjs/wallet'
import * as ethutil from '@ethereumjs/util'
import { getMessage } from 'eip-712';
import { bech32 } from 'bech32'
import * as fs from 'node:fs'
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

import * as anytypes from '../../../../chain/google/protobuf/any'
import * as chaintypes from '../../../../chain/flux/types/v1beta1/tx_ext'
import * as svmtx from '../../../../chain/flux/svm/v1beta1/tx'
import * as svmtypes from '../../../../chain/flux/svm/v1beta1/svm'
import * as txtypes from '../../../../chain/cosmos/tx/v1beta1/tx'
import * as txservice from '../../../../chain/cosmos/tx/v1beta1/service'
import * as authservice from '../../../../chain/cosmos/auth/v1beta1/query'
import * as ethsecp256k1 from '../../../../chain/cosmos/crypto/ethsecp256k1/keys'
import * as signingtypes from '../../../../chain/cosmos/tx/signing/v1beta1/signing'
import * as codectypemap from '../../../../chain/codec_type_map.json'
import * as ethcrypto from 'eth-crypto';

import * as web3 from '@solana/web3.js'
import { getEIP712SignBytes } from '../../../../eip712/eip712'
import * as BufferLayout from '@solana/buffer-layout'

interface IInstructionInputData {
  readonly instruction: number;
}

type InstructionType<TInputData extends IInstructionInputData> = {
  index: number;
  layout: BufferLayout.Layout<TInputData>;
};

function getAlloc(type: any, fields: any): number {
  const getItemAlloc = (item: any): number => {
    if (item.span >= 0) {
      return item.span;
    } else if (typeof item.alloc === 'function') {
      return item.alloc(fields[item.property]);
    } else if ('count' in item && 'elementLayout' in item) {
      const field = fields[item.property];
      if (Array.isArray(field)) {
        return field.length * getItemAlloc(item.elementLayout);
      }
    } else if ('fields' in item) {
      // This is a `Structure` whose size needs to be recursively measured.
      return getAlloc({layout: item}, fields[item.property]);
    }
    // Couldn't determine allocated size of layout
    return 0;
  };

  let alloc = 0;
  type.layout.fields.forEach((item: any) => {
    alloc += getItemAlloc(item);
  });

  return alloc;
}

function encodeData<TInputData extends IInstructionInputData>(
  type: InstructionType<TInputData>,
  fields?: any,
): Buffer {
  const allocLength =
    type.layout.span >= 0 ? type.layout.span : getAlloc(type, fields);
  const data = Buffer.alloc(allocLength);
  const layoutFields = Object.assign({instruction: type.index}, fields);
  type.layout.encode(layoutFields, data);
  return data;
}

/*
  export function decodeData<TInputData extends IInstructionInputData>(
  type: InstructionType<TInputData>,
  buffer: Buffer,
): TInputData {
  let data: TInputData;
  try {
    data = type.layout.decode(buffer);
  } catch (err) {
    throw new Error('invalid instruction; ' + err);
  }

  if (data.instruction !== type.index) {
    throw new Error(
      `invalid instruction; instruction index mismatch ${data.instruction} != ${type.index}`,
    );
  }

  return data;
}
*/

const uint8Array = (fieldName: string): BufferLayout.Layout<Uint8Array> => {
  const bs = BufferLayout.struct<Readonly<Uint8Array>>(
    [
      BufferLayout.u32('length'),
      BufferLayout.blob(BufferLayout.offset(BufferLayout.u8(), 0), 'data'), // clarify usage of this
    ],
    fieldName,
  );

  bs.decode = (b: Uint8Array, offset?: number) => {
    let arrayLen = b.buffer.slice(offset, offset + 8)
    let lenView = new DataView(arrayLen)
    let len = lenView.getUint32(0, true)
    let arr = new Uint8Array(len)
    arr.set(b, offset + 8)
    return arr
  }

  bs.encode = (arr: Uint8Array, b: Uint8Array, offset?: number) => {
    let lenBuffer = new ArrayBuffer(8)
    let lenView = new DataView(lenBuffer)
    lenView.setBigUint64(0, BigInt(arr.length), true)
    b.set(new Uint8Array(lenBuffer), offset)
    b.set(arr, offset + 8)
    return offset + 8 + arr.length
  };

  (bs as any).alloc = (a: Uint8Array) => {
    return (
      8 + a.length
    );
  };

  return bs
}

type UpgradableLoaderInstructionData = {
  InitializeBuffer: IInstructionInputData,
  Write: IInstructionInputData & {
    offset: number,
    data: Uint8Array,
  },
  DeployWithMaxDataLen: IInstructionInputData & {
    maxLen: number,
  }
}

const UPGRADABLE_LOADER_LAYOUTS = {
  InitializeBuffer: {
    index: 0,
    layout: BufferLayout.struct<UpgradableLoaderInstructionData['InitializeBuffer']>([
      BufferLayout.u32('instruction'),
    ]),
  },

  Write: {
    index: 1,
    layout: BufferLayout.struct<UpgradableLoaderInstructionData['Write']>([
      BufferLayout.u32('instruction'),
      BufferLayout.u32('offset'),
      uint8Array('data'),
    ])
  },

  DeployWithMaxDataLen: {
    index: 2,
    layout: BufferLayout.struct<UpgradableLoaderInstructionData['Write']>([
      BufferLayout.u32('instruction'),
      BufferLayout.nu64('maxLen'), // usize in RUST = u64
    ])
  },
}

function toFluxSvmTransaction(senderAddr: string, solTx: web3.Transaction, budget: Number): svmtx.MsgTransaction {
  // we don't use recent blockhash in flux so just let it be zero
  solTx.recentBlockhash = '0x0'
  let message = solTx.compileMessage()
  let accounts = message.accountKeys.map(x => x.toString())

  return svmtx.MsgTransaction.create({
    sender: senderAddr,
    accounts: accounts,
    instructions: solTx.instructions.map(ix => {
      let ixKeys = ix.keys.map(k => k.pubkey)
      let svmIx : svmtypes.Instruction = {
        program_index: [accounts.indexOf(ix.programId.toString())],
        accounts: ix.keys.map(k => svmtypes.InstructionAccount.create({
          id_index: accounts.indexOf(k.pubkey.toString()),
          caller_index: accounts.indexOf(k.pubkey.toString()), // index in transaction
          callee_index: ixKeys.indexOf(k.pubkey), // index in instructions
          is_signer: k.isSigner,
          is_writable: k.isWritable,
        })),
        data: ix.data,
      }

      return svmIx
    }),
    compute_budget: budget.toString(), // budget for executing solana bytecode
  })
}

async function broadcastSvmTransactionMsg(
  txClient: txservice.ServiceClientImpl,
  senderPubkeyAny: anytypes.Any,
  senderAccNum: number,
  senderAccSeq: number,
  msg: svmtx.MsgTransaction, 
  senderPrivKey: any,
) {
  const msgAny: anytypes.Any = {
    type_url: `/${svmtx.MsgTransaction.$type}`,
    value: svmtx.MsgTransaction.encode(msg).finish(),
  }
  
  const msgJSON = {
    type: codectypemap[`/${svmtx.MsgTransaction.$type}`],
    value: svmtx.MsgTransaction.toJSON(msg)
  }

  // prep tx data
  const txBody: txtypes.TxBody = {
    messages: [msgAny],
    memo: '',
    timeout_height: '119000',
    extension_options: [],
    non_critical_extension_options: []
  }

  const authInfo: txtypes.AuthInfo = {
    signer_infos: [
      {
        public_key: senderPubkeyAny,
        mode_info: {
          single: {
            mode: signingtypes.SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
          },
        },
        sequence: senderAccSeq.toString(),
      },
    ],
    fee: {
      amount: [
        {denom: 'lux', amount: '100000000000000'}
      ],
      gas_limit: '4000000',
      payer: '',
      granter: ''
    },
    tip: undefined,
  }

  // get signatures
  let signDoc: txtypes.SignDoc = {
    body_bytes: txtypes.TxBody.encode(txBody).finish(),
    auth_info_bytes: txtypes.AuthInfo.encode(authInfo).finish(),
    chain_id: 'flux-1',
    account_number: senderAccNum.toString(),
  }

  let eip712SignDoc = getEIP712SignBytes(signDoc, [msgJSON], '')
  const msgHash = Buffer.from(getMessage(eip712SignDoc, true, {verifyDomain: false}))
  
  const senderSign = ethutil.ecsign(msgHash, Buffer.from(senderPrivKey.key))
  const senderCosmosSig = Uint8Array.from(Buffer.concat([senderSign.r, senderSign.s, Buffer.from([0])]))

  // broadcast tx
  const extOpts: chaintypes.ExtensionOptionsWeb3Tx = {
    typedDataChainID: '1',
    feePayer:         '',
    feePayerSig:      Uint8Array.from([]),
  }
  const extOptsAny: anytypes.Any = {
    type_url: '/' + chaintypes.ExtensionOptionsWeb3Tx.$type,
    value: chaintypes.ExtensionOptionsWeb3Tx.encode(extOpts).finish()
  }
  txBody.extension_options = [extOptsAny]

  const txRaw: txtypes.TxRaw = {
    body_bytes: txtypes.TxBody.encode(txBody).finish(),
    auth_info_bytes: txtypes.AuthInfo.encode(authInfo).finish(),
    signatures: [senderCosmosSig],
  }

  const broadcastReq: txservice.BroadcastTxRequest = {
    tx_bytes: txtypes.TxRaw.encode(txRaw).finish(),
    mode: txservice.BroadcastMode.BROADCAST_MODE_SYNC,
  }
  
  return await txClient.BroadcastTx(broadcastReq)
}

(async () => {
  // init clients
  const cc = new txservice.GrpcWebImpl('http://localhost:10337', {
    transport: NodeHttpTransport(),
  })
  const txClient = new txservice.ServiceClientImpl(cc)
  const authClient = new authservice.QueryClientImpl(cc)

  // init accounts
  const wallet = ethwallet.Wallet.fromPrivateKey(Uint8Array.from(Buffer.from('88CBEAD91AEE890D27BF06E003ADE3D4E952427E88F88D31D61D3EF5E5D54305', 'hex')))
  const senderPrivKey: ethsecp256k1.PrivKey = {key: wallet.getPrivateKey()}
  const senderXPubkey = ethcrypto.publicKey.compress(Buffer.from(wallet.getPublicKey()).toString('hex'))
  const senderPubkey: ethsecp256k1.PubKey = {key: Buffer.from(senderXPubkey, 'hex')}
  const senderPubkeyAny: anytypes.Any = {
    type_url: '/' + ethsecp256k1.PubKey.$type,
    value: ethsecp256k1.PubKey.encode(senderPubkey).finish()
  }
  const senderAddr = bech32.encode('lux', bech32.toWords(wallet.getAddress()))
  // fetch account num, seq
  const senderInfo = await authClient.AccountInfo({address: senderAddr})
  const senderAccNum = parseInt(senderInfo.info!.account_number!)
  const senderAccSeq = parseInt(senderInfo.info!.sequence!)

  // create accounts
  const callerPubkey        = new web3.PublicKey("5u3ScQH8YNWoWgjuyV2218d4V1HtQSoKf65JpuXXwXVK") // TODO: generate this one from secp256k1
	const programPubkey       = new web3.PublicKey("8BTVbEdAFbqsEsjngmaMByn1m9j8jDFtEFFusEwGeMZY") // TODO: generate this one randomly
	const programDataPubkey   = new web3.PublicKey("352wrxS8WU7mmyWiJsSD4Z7c4YvGb42YcVohUmb61Lj7") // TODO: generate this one randomly
	const programBufferPubkey = new web3.PublicKey("DsY77sff3seYYPDQoqMb7mzMzuXwvQ1Mw8ou6r5o2nyW") // TODO: generate this one randomly
	const systemPubkey        = new web3.PublicKey("11111111111111111111111111111111") // constant
	const upgradableLoaderPubkey = new web3.PublicKey("BPFLoaderUpgradeab1e11111111111111111111111") // constant
	const sysvarClockPubkey      = new web3.PublicKey("SysvarC1ock11111111111111111111111111111111") // constant
	const sysvarRentPubkey       = new web3.PublicKey("SysvarRent111111111111111111111111111111111") // constant
	const programInteractor      = new web3.PublicKey("CHtHn3aTHBt244rxsjgebLc7qZodMMBGK5vzPKvPPirc") // TODO: generate this one randomly
  const programBinary          = fs.readFileSync('example.so')
	
  // create accounts
  let createProgramIx = web3.SystemProgram.createAccount({
    fromPubkey: new web3.PublicKey(callerPubkey),
    newAccountPubkey: new web3.PublicKey(programPubkey),
    lamports: 0,
    space: 36,
    programId: new web3.PublicKey(upgradableLoaderPubkey),
  })

  let createInteractorIx = web3.SystemProgram.createAccount({
    fromPubkey: callerPubkey,
    newAccountPubkey: programInteractor,
    lamports: 0,
    space: 4,
    programId: programPubkey,
  })

  let createBufferAccountTx = web3.SystemProgram.createAccount({
    fromPubkey: new web3.PublicKey(callerPubkey),
    newAccountPubkey: new web3.PublicKey(programBufferPubkey),
    lamports: 0,
    space: programBinary.length + 48,
    programId: new web3.PublicKey(upgradableLoaderPubkey),
  })

  let initBufferIx = new web3.TransactionInstruction({
    programId: new web3.PublicKey(upgradableLoaderPubkey),
    keys: [
      {
        pubkey: new web3.PublicKey(programBufferPubkey),
        isSigner: true,
        isWritable: true,
      },
      {
        pubkey: new web3.PublicKey(callerPubkey),
        isSigner: true,
        isWritable: true,
      },
    ],
    data: encodeData(UPGRADABLE_LOADER_LAYOUTS.InitializeBuffer, {})
  })
  console.log('data for initialize buffer', initBufferIx.data)

  let initAccountsTx = new web3.Transaction()
    .add(createProgramIx)
    .add(createBufferAccountTx)
    .add(createInteractorIx)
    .add(initBufferIx)
  initAccountsTx.feePayer = new web3.PublicKey(callerPubkey)

  const msgCreateAccounts: svmtx.MsgTransaction = toFluxSvmTransaction(senderAddr, initAccountsTx, 1000000)
  let initAccountsResult = await broadcastSvmTransactionMsg(txClient, senderPubkeyAny, senderAccNum, senderAccSeq, msgCreateAccounts, senderPrivKey)
  console.log('initAccountsResult result:', initAccountsResult)
  
  // upload program and finalize the deployments
  const chunkSize = 1200
  let solUploadTransaction = new web3.Transaction()
  for(let i = 0; i < programBinary.length; i += chunkSize) {
    let next = i + chunkSize
    if (next > programBinary.length) {
      next = programBinary.length
    }

    let slice = programBinary.subarray(i, next)
    let offset = i
    let data = encodeData(UPGRADABLE_LOADER_LAYOUTS.Write, {
      offset: offset,
      data: slice,
    })

    let uploadIx = new web3.TransactionInstruction({
      programId: upgradableLoaderPubkey,
      keys: [
        {
          pubkey: programBufferPubkey,
          isSigner: false,
          isWritable: true,
        },
        {
          pubkey: new web3.PublicKey(callerPubkey),
          isSigner: true,
          isWritable: true,
        },
      ],
      data: data,
    })

    solUploadTransaction = solUploadTransaction.add(uploadIx)
  }

  let finalizeIxData = encodeData(UPGRADABLE_LOADER_LAYOUTS.DeployWithMaxDataLen, {
    maxLen: programBinary.length + 48,
  })
  console.log('finalize ix data:', finalizeIxData)
  let finalizeIx = new web3.TransactionInstruction({
    programId: new web3.PublicKey(upgradableLoaderPubkey),
    keys: [
      {
				pubkey:  callerPubkey,
				isWritable: true,
				isSigner:   true,
			},
			{
				pubkey:  programDataPubkey,
				isWritable: true,
				isSigner:   false,
			},
			{
				pubkey:  programPubkey,
				isWritable: true,
				isSigner:   false,
			},
			{
				pubkey:  programBufferPubkey,
				isWritable: true,
				isSigner:   false,
			},
			{
				pubkey:  sysvarRentPubkey,
				isWritable: false,
				isSigner:   false,
			},
			{
				pubkey:  sysvarClockPubkey,
				isWritable: false,
				isSigner:   false,
			},
			{
				pubkey:  systemPubkey,
				isWritable: false,
				isSigner:   false,
			},
			{
				pubkey:  callerPubkey,
				isWritable: true,
				isSigner:   true,
			},
    ],
    data: encodeData(UPGRADABLE_LOADER_LAYOUTS.DeployWithMaxDataLen, {
      maxLen: programBinary.length + 48,
    })
  })

  // also add finalize transaction after uploading in the same tx
  solUploadTransaction.add(finalizeIx)
  solUploadTransaction.feePayer = callerPubkey

  let fluxUploadTx = toFluxSvmTransaction(senderAddr, solUploadTransaction, 1000000)
  let uploadResult = await broadcastSvmTransactionMsg(txClient, senderPubkeyAny, senderAccNum, senderAccSeq + 1, fluxUploadTx, senderPrivKey)
  console.log('upload result:', uploadResult)
  
  // interact with the program
  let executeIx = new web3.TransactionInstruction({
    programId: programPubkey,
    keys: [
      {
				pubkey:  programInteractor,
				isWritable: true,
				isSigner:   true,
			},
			{
				pubkey:  programDataPubkey,
				isWritable: false,
				isSigner:   false,
			},
    ],
    data: Buffer.from([0]),
  })

  let executeTransaction = new web3.Transaction().add(executeIx)
  executeTransaction.feePayer = programInteractor

  let fluxExecuteTx = toFluxSvmTransaction(senderAddr, executeTransaction, 1000000)
  let executeResult = await broadcastSvmTransactionMsg(txClient, senderPubkeyAny, senderAccNum, senderAccSeq + 2, fluxExecuteTx, senderPrivKey)
  console.log('execute result:', executeResult)
})()
