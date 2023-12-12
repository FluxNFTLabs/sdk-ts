import * as ethwallet from '@ethereumjs/wallet'
import * as ethutil from '@ethereumjs/util'
import { getMessage } from 'eip-712';

import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

import * as anytypes from '../../../../chain/google/protobuf/any'
import * as chaintypes from '../../../../chain/flux/types/v1beta1/tx_ext'
import * as bazaartypes from "../../../../chain/flux/bazaar/v1beta1/tx";
import * as txtypes from '../../../../chain/cosmos/tx/v1beta1/tx'
import * as txservice from '../../../../chain/cosmos/tx/v1beta1/service'
import * as authservice from '../../../../chain/cosmos/auth/v1beta1/query'
import * as secp256k1 from '../../../../chain/cosmos/crypto/secp256k1/keys'
import * as signingtypes from '../../../../chain/cosmos/tx/signing/v1beta1/signing'
import * as codectypemap from '../../../../chain/codec_type_map.json'

import {getEIP712SignBytes} from '../../../../eip712/eip712';
import * as ethcrypto from "eth-crypto";
import * as ethsecp256k1 from "../../../../chain/cosmos/crypto/ethsecp256k1/keys";
import {bech32} from "bech32";

const main = async () => {
  // init clients
  const cc = new txservice.GrpcWebImpl('http://localhost:10337', {
    transport: NodeHttpTransport(),
  })
  const txClient = new txservice.ServiceClientImpl(cc)
  const authClient = new authservice.QueryClientImpl(cc)

  // init user1
  const wallet = ethwallet.Wallet.fromPrivateKey(Uint8Array.from(Buffer.from("88cbead91aee890d27bf06e003ade3d4e952427e88f88d31d61d3ef5e5d54305", 'hex')))
  const senderPrivKey: secp256k1.PrivKey = {key: wallet.getPrivateKey()}
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

  // init msg
  const msg: bazaartypes.MsgCreateProduct = {
    sender: senderAddr,
    class_id: 'series',
    id: '0',
    title: "Dong Thap Landscape",
    description: 'foo bar',
    offerings: [
      { url: "", price: { denom: 'usdt', amount: '5000000' }, purchase_count: "0" },
      { url: "", price: { denom: 'usdt', amount: '7000000' }, purchase_count: "0" },
    ],
    tags: ['culture', 'vietnam', 'travel', 'art', 'vietmyusa'],
  }
  const msgAny: anytypes.Any = {
    type_url: `/${bazaartypes.MsgCreateProduct.$type}`,
    value: bazaartypes.MsgCreateProduct.encode(msg).finish(),
  }
  const msgJSON = {
    type: codectypemap[`/${bazaartypes.MsgCreateProduct.$type}`],
    value: bazaartypes.MsgCreateProduct.toJSON(msg)
  }

  // prep tx data
  const txBody: txtypes.TxBody = {
    messages: [msgAny],
    memo: 'abc',
    timeout_height: '19000',
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
      gas_limit: '200000',
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

  let eip712SignDoc = getEIP712SignBytes(signDoc, [msgJSON],'')
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
}

main()
