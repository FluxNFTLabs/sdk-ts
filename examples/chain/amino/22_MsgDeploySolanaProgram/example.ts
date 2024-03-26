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

function toFluxSvmTransaction(senderAddr: string, solTx: web3.Transaction, budget: Number): svmtx.MsgTransaction {
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
  const senderAccNum = senderInfo.info!.account_number!
  const senderAccSeq = senderInfo.info!.sequence!

  // create accounts
  const callerPubkey        = "5u3ScQH8YNWoWgjuyV2218d4V1HtQSoKf65JpuXXwXVK" // TODO: generate this one from secp256k1
	const programPubkey       = "8BTVbEdAFbqsEsjngmaMByn1m9j8jDFtEFFusEwGeMZY" // TODO: generate this one randomly
	const programDataPubkey   = "352wrxS8WU7mmyWiJsSD4Z7c4YvGb42YcVohUmb61Lj7" // TODO: generate this one randomly
	const programBufferPubkey = "DsY77sff3seYYPDQoqMb7mzMzuXwvQ1Mw8ou6r5o2nyW" // TODO: generate this one randomly
	const systemPubkey        = "11111111111111111111111111111111" // constant
	const upgradableLoaderPubkey = "BPFLoaderUpgradeab1e11111111111111111111111" // constant
	const sysvarClockPubkey      = "SysvarC1ock11111111111111111111111111111111" // constant
	const sysvarRentPubkey       = "SysvarRent111111111111111111111111111111111" // constant
	const programInteractor      = "CHtHn3aTHBt244rxsjgebLc7qZodMMBGK5vzPKvPPirc"; // TODO: generate this one randomly

	const programBinary = fs.readFileSync('example.so')
  let createProgramIx = web3.SystemProgram.createAccount({
    fromPubkey: new web3.PublicKey(callerPubkey),
    newAccountPubkey: new web3.PublicKey(programPubkey),
    lamports: 0,
    space: 36,
    programId: new web3.PublicKey(upgradableLoaderPubkey),
  })

  let createBufferAccountTx = web3.SystemProgram.createAccount({
    fromPubkey: new web3.PublicKey(callerPubkey),
    newAccountPubkey: new web3.PublicKey(programBufferPubkey),
    lamports: 0,
    space: programBinary.length + 48,
    programId: new web3.PublicKey(upgradableLoaderPubkey),
  })

  let createAccountsTx = new web3.Transaction()
    .add(createProgramIx)
    .add(createBufferAccountTx)
  createAccountsTx.recentBlockhash = '0x0'
  createAccountsTx.feePayer = new web3.PublicKey(callerPubkey)
  // convert compiled message into flux-compatible msg
  const msg: svmtx.MsgTransaction = toFluxSvmTransaction(senderAddr, createAccountsTx, 1000000)

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
        sequence: senderAccSeq,
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
    account_number: senderAccNum,
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
  try {
    const res = await txClient.BroadcastTx(broadcastReq)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
})()
