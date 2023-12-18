import * as ethwallet from '@ethereumjs/wallet'
import * as ethutil from '@ethereumjs/util'
import { sha256 } from "ethereum-cryptography/sha256.js";
import { createAddress } from '@tendermint/sig';
import * as bech32 from 'bech32'
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

import * as anytypes from '../../../../chain/google/protobuf/any'
import * as banktypes from '../../../../chain/cosmos/bank/v1beta1/tx'
import * as txtypes from '../../../../chain/cosmos/tx/v1beta1/tx'
import * as txservice from '../../../../chain/cosmos/tx/v1beta1/service'
import * as authservice from '../../../../chain/cosmos/auth/v1beta1/query'
import * as secp256k1 from '../../../../chain/cosmos/crypto/secp256k1/keys'
import * as signingtypes from '../../../../chain/cosmos/tx/signing/v1beta1/signing'
import * as web3gwtypes from '../../../../chain/flux/indexer/web3gw/query'

function compressPublicKey(uncompressedPublicKey: Buffer): Buffer {
  const xCoord = uncompressedPublicKey.slice(0,32);
  const yCoord = uncompressedPublicKey.slice(32,64);
  const yParityByte = yCoord[31] % 2 == 0 ? Buffer.from([2]) : Buffer.from([3])
  return Buffer.concat([yParityByte, xCoord])
}

const main = async () => {
  // init clients
  const cc = new txservice.GrpcWebImpl('http://localhost:10337', {
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
    type_url: '/' + secp256k1.PubKey.$type,
    value: secp256k1.PubKey.encode(senderPubkey).finish()
  }
  const senderAddr = createAddress(senderPubkey.key, 'lux')
  const receiverAddr = 'lux1jcltmuhplrdcwp7stlr4hlhlhgd4htqhu86cqx'

  // fetch account num, seq
  const senderInfo = await authClient.AccountInfo({address: senderAddr})
  const senderAccNum = senderInfo.info!.account_number!
  const senderAccSeq = senderInfo.info!.sequence!

  // fetch web3gw metadata
  const metadata = await web3gwClient.GetMetaData({})
  const feePayerPubKey: secp256k1.PubKey = {key: metadata.pubkey}
  const feePayerPubKeyAny: anytypes.Any = {
    type_url: '/' + secp256k1.PubKey.$type,
    value: secp256k1.PubKey.encode(feePayerPubKey).finish()
  }
  const feePayerAddr = metadata.address
  const feePayerInfo = await authClient.AccountInfo({address: feePayerAddr})
  const feePayerAccNum = feePayerInfo.info!.account_number!
  const feePayerAccSeq = feePayerInfo.info!.sequence!

  // init msg
  const msg: banktypes.MsgSend = {
    from_address: senderAddr,
    to_address: receiverAddr,
    amount: [{ denom: 'lux', amount: '1' }],
  }
  const msgAny: anytypes.Any = {
    type_url: `/${banktypes.MsgSend.$type}`,
    value: banktypes.MsgSend.encode(msg).finish(),
  }

  // prep tx data
  const txBody: txtypes.TxBody = {
    messages: [msgAny],
    memo: 'abc',
    timeout_height: "300000",
    extension_options: [],
    non_critical_extension_options: []
  }

  const authInfo: txtypes.AuthInfo = {
    signer_infos: [
      {
        public_key: senderPubkeyAny,
        mode_info: {
          single: {
            mode: signingtypes.SignMode.SIGN_MODE_DIRECT,
          },
        },
        sequence: senderAccSeq,
      },
      {
        public_key: feePayerPubKeyAny,
        mode_info: {
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
      gas_limit: "200000",
      payer: feePayerAddr,
      granter: ""
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
  let signBytes = txtypes.SignDoc.encode(signDoc).finish()
  const msgHash = Buffer.from(sha256(signBytes))
  const senderSigParts = ethutil.ecsign(msgHash, Buffer.from(senderPrivKey.key))
  const senderSig = Uint8Array.from(Buffer.concat([senderSigParts.r, senderSigParts.s]))

  signDoc = {
    body_bytes: txtypes.TxBody.encode(txBody).finish(),
    auth_info_bytes: txtypes.AuthInfo.encode(authInfo).finish(),
    chain_id: 'flux-1',
    account_number: feePayerAccNum,
  }
  signBytes = txtypes.SignDoc.encode(signDoc).finish()
  const res = await web3gwClient.SignProto({data: signBytes})
  const feePayerSig = res.signature

  // broadcast tx
  const txRaw: txtypes.TxRaw = {
    body_bytes: txtypes.TxBody.encode(txBody).finish(),
    auth_info_bytes: txtypes.AuthInfo.encode(authInfo).finish(),
    signatures: [senderSig, feePayerSig],
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
}

main()
