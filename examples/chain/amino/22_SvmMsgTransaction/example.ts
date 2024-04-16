import * as ethwallet from '@ethereumjs/wallet'
import * as ethutil from '@ethereumjs/util'
import { getMessage } from 'eip-712';
import { bech32 } from 'bech32'
import * as fs from 'node:fs'
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';
import * as banktypes from '../../../../chain/cosmos/bank/v1beta1/tx'
import * as anytypes from '../../../../chain/google/protobuf/any'
import * as chaintypes from '../../../../chain/flux/types/v1beta1/tx_ext'
import * as svmtx from '../../../../chain/flux/svm/v1beta1/tx'
import * as txtypes from '../../../../chain/cosmos/tx/v1beta1/tx'
import * as txservice from '../../../../chain/cosmos/tx/v1beta1/service'
import * as authservice from '../../../../chain/cosmos/auth/v1beta1/query'
import * as ethsecp256k1 from '../../../../chain/cosmos/crypto/ethsecp256k1/keys'
import * as signingtypes from '../../../../chain/cosmos/tx/signing/v1beta1/signing'
import * as codectypemap from '../../../../chain/codec_type_map.json'
import * as ethcrypto from 'eth-crypto';

import * as web3 from '@solana/web3.js'
import { getEIP712SignBytes } from '../../../../eip712/eip712'
import { encodeData, UPGRADABLE_LOADER_LAYOUTS, toFluxSvmTransaction, getSvmAddress } from '../../../../packages/utils'

async function broadcastBankMultiSend(
  txClient: txservice.ServiceClientImpl,
  msg: banktypes.MsgMultiSend, 
  signerPubkeys: anytypes.Any[],
  signerAccNums: number[],
  signerAccSeqs: number[],
  signerPrivKeys: any[],
) {
  const msgAny: anytypes.Any = {
    type_url: `/${banktypes.MsgMultiSend.$type}`,
    value: banktypes.MsgMultiSend.encode(msg).finish(),
  }
  
  const msgJSON = {
    type: codectypemap[`/${banktypes.MsgMultiSend.$type}`],
    value: banktypes.MsgMultiSend.toJSON(msg)
  }

  // prep tx data
  const txBody: txtypes.TxBody = {
    messages: [msgAny],
    memo: '',
    timeout_height: '119000',
    extension_options: [],
    non_critical_extension_options: []
  }

  const signerInfos = []
  for(let i = 0; i < signerPubkeys.length; i++) {
    signerInfos.push({
      public_key: signerPubkeys[i],
      mode_info: {
        single: {
          mode: signingtypes.SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
        },
      },
      sequence: signerAccSeqs[i].toString(),
    })
  }

  const authInfo: txtypes.AuthInfo = {
    signer_infos: signerInfos,
    fee: {
      amount: [
        {denom: 'lux', amount: '2000000000000000'}
      ],
      gas_limit: '4000000',
      payer: '',
      granter: ''
    },
    tip: undefined,
  }

  const txBodyBytes = txtypes.TxBody.encode(txBody).finish()
  const authInfoBytes = txtypes.AuthInfo.encode(authInfo).finish()
  const sigs = []
  for(let i = 0; i < signerPrivKeys.length; i++) {
    // get signatures
    let signDoc: txtypes.SignDoc = {
      body_bytes: txBodyBytes,
      auth_info_bytes: authInfoBytes,
      chain_id: 'flux-1',
      account_number: signerAccNums[i].toString(),
    }

    let eip712SignDoc = getEIP712SignBytes(signDoc, [msgJSON], '')
    const msgHash = Buffer.from(getMessage(eip712SignDoc, true, {verifyDomain: false}))
    
    const privKey = signerPrivKeys[i]
    const senderSign = ethutil.ecsign(msgHash, Buffer.from(privKey.key))
    const sig = Uint8Array.from(Buffer.concat([senderSign.r, senderSign.s, Buffer.from([0])]))
    sigs.push(sig)
  }
  
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
    // this txBody now include the extension option
    body_bytes: txtypes.TxBody.encode(txBody).finish(),
    auth_info_bytes: authInfoBytes,
    signatures: sigs,
  }

  const broadcastReq: txservice.BroadcastTxRequest = {
    tx_bytes: txtypes.TxRaw.encode(txRaw).finish(),
    mode: txservice.BroadcastMode.BROADCAST_MODE_SYNC,
  }
  
  return await txClient.BroadcastTx(broadcastReq)
}

async function broadcastSvmTransactionMsg(
  txClient: txservice.ServiceClientImpl,
  msg: svmtx.MsgTransaction, 
  signerPubkeys: anytypes.Any[],
  signerAccNums: number[],
  signerAccSeqs: number[],
  signerPrivKeys: any[],
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

  const signerInfos = []
  for(let i = 0; i < signerPubkeys.length; i++) {
    signerInfos.push({
      public_key: signerPubkeys[i],
      mode_info: {
        single: {
          mode: signingtypes.SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
        },
      },
      sequence: signerAccSeqs[i].toString(),
    })
  }

  const authInfo: txtypes.AuthInfo = {
    signer_infos: signerInfos,
    fee: {
      amount: [
        {denom: 'lux', amount: '2000000000000000'}
      ],
      gas_limit: '4000000',
      payer: '',
      granter: ''
    },
    tip: undefined,
  }

  const txBodyBytes = txtypes.TxBody.encode(txBody).finish()
  const authInfoBytes = txtypes.AuthInfo.encode(authInfo).finish()
  const sigs = []
  for(let i = 0; i < signerPrivKeys.length; i++) {
    // get signatures
    let signDoc: txtypes.SignDoc = {
      body_bytes: txBodyBytes,
      auth_info_bytes: authInfoBytes,
      chain_id: 'flux-1',
      account_number: signerAccNums[i].toString(),
    }

    let eip712SignDoc = getEIP712SignBytes(signDoc, [msgJSON], '')
    const msgHash = Buffer.from(getMessage(eip712SignDoc, true, {verifyDomain: false}))
    
    const privKey = signerPrivKeys[i]
    const senderSign = ethutil.ecsign(msgHash, Buffer.from(privKey.key))
    const sig = Uint8Array.from(Buffer.concat([senderSign.r, senderSign.s, Buffer.from([0])]))
    sigs.push(sig)
  }
  
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
    auth_info_bytes: authInfoBytes,
    signatures: sigs,
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
  const senderAddr = bech32.encode('lux', bech32.toWords(wallet.getAddress()))

  // create accounts
  const senderSvmPubkey = getSvmAddress(Buffer.from(wallet.getAddress()))
  // difference: use secp256k1 wallet instead of solana's keypair
  const programKeypair = ethwallet.Wallet.generate()
  const programPrivKey: ethsecp256k1.PrivKey = {key: programKeypair.getPrivateKey()}
  const programPubkey = getSvmAddress(Buffer.from(programKeypair.getAddress()))
  const programAddr = bech32.encode('lux', bech32.toWords(programKeypair.getAddress()))

  const programBufferKeypair = ethwallet.Wallet.generate()
  const programBufferPubkey = getSvmAddress(Buffer.from(programBufferKeypair.getAddress()))
  const programBufferPrivKey : ethsecp256k1.PrivKey = {key: programBufferKeypair.getPrivateKey()}
  const programBufferAddr = bech32.encode('lux', bech32.toWords(programBufferKeypair.getAddress()))

  const userDataKeypair = ethwallet.Wallet.generate()
  const userDataPubkey = getSvmAddress(Buffer.from(userDataKeypair.getAddress()))
  const userDataPrivKey : ethsecp256k1.PrivKey = {key: userDataKeypair.getPrivateKey()}
  const userDataAddr = bech32.encode('lux', bech32.toWords(userDataKeypair.getAddress()))

  const keypairs  = [wallet, programKeypair, programBufferKeypair, userDataKeypair]
  const signerPrivKeys = [senderPrivKey, programPrivKey, programBufferPrivKey, userDataPrivKey]
  const signerPubKeys = []
  for(let keypair of keypairs) {
    const xPubkey = ethcrypto.publicKey.compress(Buffer.from(keypair.getPublicKey()).toString('hex'))
    const pubkey: ethsecp256k1.PubKey = {key: Buffer.from(xPubkey, 'hex')}
    const pubkeyAny: anytypes.Any = {
      type_url: '/' + ethsecp256k1.PubKey.$type,
      value: ethsecp256k1.PubKey.encode(pubkey).finish()
    }

    signerPubKeys.push(pubkeyAny)
  }

  //
  // do multisend to create cosmos accounts
  // 
  const accInfo = await authClient.AccountInfo({address: senderAddr})
  const accNum = parseInt(accInfo.info!.account_number!)
  const accSeq = parseInt(accInfo.info!.sequence!)

  // for msg multisend, must ensure sum input === sum output
  let multisendMsg = banktypes.MsgMultiSend.create({
    inputs: [
      {
        address: senderAddr,
        coins: [{amount: '100000000000000002', denom: 'lux'}],
      }
    ],
    outputs: [
      {
        address: programAddr,
        coins: [{amount: '1', denom: 'lux'}],
      },
      {
        address: programBufferAddr,
        coins: [{amount: '1', denom: 'lux'}],
      },
      {
        address: userDataAddr,
        coins: [{amount: '100000000000000000', denom: 'lux'}], // send 0.1 lux for later tx fee
      }
    ]
  })

  let multiSendRes = await broadcastBankMultiSend(txClient, multisendMsg, [signerPubKeys[0]], [accNum], [accSeq], [senderPrivKey])
  console.log('multisend res:', multiSendRes, "waiting for tx being included...")

  // sleep for 2 seconds
  await new Promise((resolve, reject) => {
    setInterval(() => resolve(null), 2000)
  })
  
  const systemPubkey        = new web3.PublicKey("11111111111111111111111111111111") // constant
	const upgradableLoaderPubkey = new web3.PublicKey("BPFLoaderUpgradeab1e11111111111111111111111") // constant
	const sysvarClockPubkey      = new web3.PublicKey("SysvarC1ock11111111111111111111111111111111") // constant
	const sysvarRentPubkey       = new web3.PublicKey("SysvarRent111111111111111111111111111111111") // constant
  const programBinary          = fs.readFileSync('example.so')
  const programExecutableDataPubkey   = web3.PublicKey.findProgramAddressSync([programPubkey.toBuffer()], upgradableLoaderPubkey)[0]

  const accNums = []
  const accSeqs = []
  for(let addr of [
    senderAddr,
    programAddr,
    programBufferAddr,
    userDataAddr,
  ]) {
    const accInfo = await authClient.AccountInfo({address: addr})
    const accNum = parseInt(accInfo.info!.account_number!)
    const accSeq = parseInt(accInfo.info!.sequence!)

    accNums.push(accNum)
    accSeqs.push(accSeq)
  }

  // 
  // create needed accounts for SVM program
  // 
  let createProgramIx = web3.SystemProgram.createAccount({
    fromPubkey: senderSvmPubkey,
    newAccountPubkey: programPubkey,
    lamports: 0,
    space: 36,
    programId: upgradableLoaderPubkey,
  })

  let createInteractorIx = web3.SystemProgram.createAccount({
    fromPubkey: senderSvmPubkey,
    newAccountPubkey: userDataPubkey,
    lamports: 0,
    space: 4,
    programId: programPubkey,
  })

  let createBufferAccountTx = web3.SystemProgram.createAccount({
    fromPubkey: senderSvmPubkey,
    newAccountPubkey: programBufferPubkey,
    lamports: 0,
    space: programBinary.length + 48,
    programId: upgradableLoaderPubkey,
  })

  let initBufferIx = new web3.TransactionInstruction({
    programId: upgradableLoaderPubkey,
    keys: [
      {
        pubkey: programBufferPubkey,
        isSigner: true,
        isWritable: true,
      },
      {
        pubkey: senderSvmPubkey,
        isSigner: true,
        isWritable: true,
      },
    ],
    data: encodeData(UPGRADABLE_LOADER_LAYOUTS.InitializeBuffer, {})
  })
  let initAccountsTx = new web3.Transaction()
    .add(createProgramIx)
    .add(createBufferAccountTx)
    .add(createInteractorIx)
    .add(initBufferIx)
  initAccountsTx.feePayer = senderSvmPubkey

  const msgCreateAccounts: svmtx.MsgTransaction = toFluxSvmTransaction([
    senderAddr,
    programAddr,
    programBufferAddr,
    userDataAddr,
  ], initAccountsTx, 1000000)

  let initAccountsResult = await broadcastSvmTransactionMsg(
    txClient, 
    msgCreateAccounts,
    signerPubKeys,
    accNums,
    accSeqs,
    signerPrivKeys,
  )
  console.log('initAccountsResult result:', initAccountsResult)
  
  //
  // upload program and finalize the deployments
  // 
  const chunkSize = 1200
  let solUploadTransaction = new web3.Transaction()
  // 1 tx = n instructions (IX)
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
          pubkey: senderSvmPubkey,
          isSigner: true,
          isWritable: true,
        },
      ],
      data: data,
    })

    solUploadTransaction = solUploadTransaction.add(uploadIx)
  }

  let finalizeIx = new web3.TransactionInstruction({
    programId: upgradableLoaderPubkey,
    keys: [
      {
				pubkey:  senderSvmPubkey,
				isWritable: true,
				isSigner:   true,
			},
			{
				pubkey:  programExecutableDataPubkey,
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
				pubkey:  senderSvmPubkey,
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
  solUploadTransaction.feePayer = senderSvmPubkey

  let senderAccNum = accNums[0] // accNums[0] was previously the sender's account number
  let senderAccSeq = accSeqs[0] + 1 // accSeqs[0] was previously the sender's account number
  let fluxUploadTx = toFluxSvmTransaction([senderAddr], solUploadTransaction, 1000000)
  let uploadResult = await broadcastSvmTransactionMsg(
    txClient, 
    fluxUploadTx,
    [signerPubKeys[0]],
    [senderAccNum],
    [senderAccSeq],
    [senderPrivKey],
  )
  console.log('upload result:', uploadResult)
  
  // execute tx with the user program data account
  let userDataAccNum = accNums[3]
  let userDataAccSeq = accSeqs[3] + 1
  let userDataPubkeyAny = signerPubKeys[3]
  let executeIx = new web3.TransactionInstruction({
    programId: programPubkey, // program ID = contract address
    keys: [
      {
				pubkey:  userDataPubkey, // account that interacts
				isWritable: true,
				isSigner:   true,
			},
    ],
    data: Buffer.from([]),
  })
  console.log('program pubkey:', programPubkey.toBase58())
  let executeTransaction = new web3.Transaction().add(executeIx)
  executeTransaction.feePayer = userDataPubkey

  let fluxExecuteTx = toFluxSvmTransaction([userDataAddr], executeTransaction, 1000000)
  let executeResult = await broadcastSvmTransactionMsg(
    txClient, 
    fluxExecuteTx, 
    [userDataPubkeyAny],
    [userDataAccNum], 
    [userDataAccSeq],
    [userDataPrivKey],
  )
  console.log('execute result:', executeResult) 
})()
