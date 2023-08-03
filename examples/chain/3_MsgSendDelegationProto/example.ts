import * as ethwallet from '@ethereumjs/wallet'
import * as ethutil from '@ethereumjs/util'
import { keccak256 } from 'ethereum-cryptography/keccak.js'
import * as bech32 from 'bech32'
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

import * as anytypes from '../../../chain/google/protobuf/any'
import * as banktypes from '../../../chain/cosmos/bank/v1beta1/tx'
import * as txtypes from '../../../chain/cosmos/tx/v1beta1/tx'
import * as txservice from '../../../chain/cosmos/tx/v1beta1/service'
import * as authservice from '../../../chain/cosmos/auth/v1beta1/query'
import * as secp256k1 from '../../../chain/flux/crypto/v1beta1/ethsecp256k1/keys'
import * as signingtypes from '../../../chain/cosmos/tx/signing/v1beta1/signing'
import * as web3gwtypes from '../../../chain/flux/indexer/web3gw/query'

function hexToBech32(hexBytes: ArrayLike<number>, prefix: string): string {
  const words = bech32.bech32.toWords(hexBytes);
  return bech32.bech32.encode(prefix, words);
}

function compressPublicKey(uncompressedPublicKey: Buffer): Buffer {
  const xCoord = uncompressedPublicKey.slice(0,32);
  const yCoord = uncompressedPublicKey.slice(32,64);
  const yParityByte = yCoord[31] % 2 == 0 ? Buffer.from([2]) : Buffer.from([3])
  return Buffer.concat([yParityByte, xCoord])
}

const main = async () => {
  // init clients
  const cc = new txservice.GrpcWebImpl('http://localhost:9091', {
    transport: NodeHttpTransport(),
  })
  const txClient = new txservice.ServiceClientImpl(cc)
  const authClient = new authservice.QueryClientImpl(cc)

  const web3gwCC = new web3gwtypes.GrpcWebImpl('http://localhost:4445', {
    transport: NodeHttpTransport(),
  })
  const web3gwClient = new web3gwtypes.Web3GWClientImpl(web3gwCC)

  // init accounts
  const wallet = ethwallet.Wallet.fromPrivateKey(Uint8Array.from(Buffer.from("88CBEAD91AEE890D27BF06E003ADE3D4E952427E88F88D31D61D3EF5E5D54305", 'hex')))
  const senderPrivKey: secp256k1.PrivKey = {key: wallet.getPrivateKey()}
  const senderPubkey: secp256k1.PubKey = {key: compressPublicKey(Buffer.from(wallet.getPublicKey()))}
  const senderPubkeyAny: anytypes.Any = {
    typeUrl: '/' + secp256k1.PubKey.$type,
    value: secp256k1.PubKey.encode(senderPubkey).finish()
  }
  const senderAddr = hexToBech32(wallet.getAddress(), 'lux')
  const receiverAddr = 'lux1jcltmuhplrdcwp7stlr4hlhlhgd4htqhu86cqx'

  // fetch account num, seq
  const senderInfo = await authClient.AccountInfo({address: senderAddr})
  const senderAccNum = senderInfo.info!.accountNumber!
  const senderAccSeq = senderInfo.info!.sequence!

  // fetch web3gw metadata
  const metadata = await web3gwClient.GetMetaData({})
  const feePayerPubKey: secp256k1.PubKey = {key: metadata.pubkey}
  const feePayerPubKeyAny: anytypes.Any = {
    typeUrl: '/' + secp256k1.PubKey.$type,
    value: secp256k1.PubKey.encode(feePayerPubKey).finish()
  }
  const feePayerAddr = metadata.address
  const feePayerInfo = await authClient.AccountInfo({address: feePayerAddr})
  const feePayerAccNum = feePayerInfo.info!.accountNumber!
  const feePayerAccSeq = feePayerInfo.info!.sequence!

  // init msg
  const msg: banktypes.MsgSend = {
    fromAddress: senderAddr,
    toAddress: receiverAddr,
    amount: [{ denom: 'lux', amount: '1' }],
  }
  const msgAny: anytypes.Any = {
    typeUrl: '/' + banktypes.MsgSend.$type,
    value: banktypes.MsgSend.encode(msg).finish(),
  }

  // prep tx data
  const txBody: txtypes.TxBody = {
    messages: [msgAny],
    memo: 'abc',
    timeoutHeight: "30000",
    extensionOptions: [],
    nonCriticalExtensionOptions: []
  }

  const authInfo: txtypes.AuthInfo = {
    signerInfos: [
      {
        publicKey: senderPubkeyAny,
        modeInfo: {
          single: {
            mode: signingtypes.SignMode.SIGN_MODE_DIRECT,
          },
        },
        sequence: senderAccSeq,
      },
      {
        publicKey: feePayerPubKeyAny,
        modeInfo: {
          single: {
            mode: signingtypes.SignMode.SIGN_MODE_DIRECT,
          },
        },
        sequence: feePayerAccSeq,
      },
    ],
    fee: {
      amount: [
        {denom: "lux", amount: "100000000000000"}
      ],
      gasLimit: "200000",
      payer: feePayerAddr,
      granter: ""
    },
    tip: undefined,
  }

  // get signatures
  let signDoc: txtypes.SignDoc = {
    bodyBytes: txtypes.TxBody.encode(txBody).finish(),
    authInfoBytes: txtypes.AuthInfo.encode(authInfo).finish(),
    chainId: 'flux-1',
    accountNumber: senderAccNum,
  }
  let signBytes = txtypes.SignDoc.encode(signDoc).finish()
  const msgHash = Buffer.from(keccak256(signBytes))

  const senderSign = ethutil.ecsign(msgHash, Buffer.from(senderPrivKey.key))
  const senderCosmosSig = Uint8Array.from(Buffer.concat([senderSign.r, senderSign.s, Buffer.from([0])]))

  signDoc = {
    bodyBytes: txtypes.TxBody.encode(txBody).finish(),
    authInfoBytes: txtypes.AuthInfo.encode(authInfo).finish(),
    chainId: 'flux-1',
    accountNumber: feePayerAccNum,
  }
  signBytes = txtypes.SignDoc.encode(signDoc).finish()
  const res = await web3gwClient.SignProto({data: signBytes})
  const feePayerCosmosSig = res.signature

  // broadcast tx
  const txRaw: txtypes.TxRaw = {
    bodyBytes: txtypes.TxBody.encode(txBody).finish(),
    authInfoBytes: txtypes.AuthInfo.encode(authInfo).finish(),
    signatures: [senderCosmosSig, feePayerCosmosSig],
  }
  const broadcastReq: txservice.BroadcastTxRequest = {
    txBytes: txtypes.TxRaw.encode(txRaw).finish(),
    mode: txservice.BroadcastMode.BROADCAST_MODE_SYNC,
  }
  try {
    const res = await txClient.BroadcastTx(broadcastReq)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

main()
