import * as ethwallet from '@ethereumjs/wallet'
import * as ethutil from '@ethereumjs/util'
import { sha256 } from "ethereum-cryptography/sha256.js";
import { createAddress } from '@tendermint/sig';
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

import * as bazaartypes from '../../../../chain/flux/bazaar/v1beta1/tx'
import * as txtypes from '../../../../chain/cosmos/tx/v1beta1/tx'
import * as txservice from '../../../../chain/cosmos/tx/v1beta1/service'
import * as authservice from '../../../../chain/cosmos/auth/v1beta1/query'
import * as secp256k1 from '../../../../chain/cosmos/crypto/secp256k1/keys'
import * as signingtypes from '../../../../chain/cosmos/tx/signing/v1beta1/signing'
import * as anytypes from '../../../../chain/google/protobuf/any'
import {Offering} from "../../../../chain/flux/bazaar/v1beta1/product";

function compressPublicKey(uncompressedPublicKey: Buffer): Buffer {
  const xCoord = uncompressedPublicKey.slice(0,32);
  const yCoord = uncompressedPublicKey.slice(32,64);
  const yParityByte = yCoord[31] % 2 == 0 ? Buffer.from([2]) : Buffer.from([3])
  return Buffer.concat([yParityByte, xCoord])
}

const main = async () => {
  // init client
  const host = 'http://localhost:10337';
  const cc = new txservice.GrpcWebImpl(host, {
    transport: NodeHttpTransport(),
  })
  const txClient = new txservice.ServiceClientImpl(cc)
  const authClient = new authservice.QueryClientImpl(cc)

  // init signer1
  const wallet = ethwallet.Wallet.fromPrivateKey(Uint8Array.from(Buffer.from("c25e5cccd433d2c97971eaa6cfe92ea05771dc05b984c62464ab580f16a905e1", 'hex')))
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
  const accNum = senderInfo.info!.account_number!
  const accSeq = senderInfo.info!.sequence!

  // init msg
  const msg: bazaartypes.MsgVerifyProduct = {
    sender: senderAddr,
    class_id: 'series',
    id: '0',
    product_id: '0',
  }

  const msgAny: anytypes.Any = {
    type_url: '/' + bazaartypes.MsgVerifyProduct.$type,
    value: bazaartypes.MsgVerifyProduct.encode(msg).finish(),
  }

  // prep tx data
  const txBody: txtypes.TxBody = {
    messages: [msgAny],
    memo: '',
    timeout_height: "30000",
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
        sequence: accSeq,
      },
    ],
    fee: {
      amount: [
        {denom: "lux", amount: "100000000000000"}
      ],
      gas_limit: "200000",
      payer: "",
      granter: ""
    },
    tip: undefined,
  }

  const signDoc: txtypes.SignDoc = {
    body_bytes: txtypes.TxBody.encode(txBody).finish(),
    auth_info_bytes: txtypes.AuthInfo.encode(authInfo).finish(),
    chain_id: 'flux-1',
    account_number: accNum,
  }
  const signBytes = txtypes.SignDoc.encode(signDoc).finish()

  // build tx
  const msgHash = Buffer.from(sha256(signBytes))
  const sigParts = ethutil.ecsign(msgHash, Buffer.from(senderPrivKey.key))
  const sig = Uint8Array.from(Buffer.concat([sigParts.r, sigParts.s]))

  // broadcast tx
  const txRaw: txtypes.TxRaw = {
    body_bytes: txtypes.TxBody.encode(txBody).finish(),
    auth_info_bytes: txtypes.AuthInfo.encode(authInfo).finish(),
    signatures: [sig],
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
