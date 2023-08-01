import * as ethwallet from '@ethereumjs/wallet'
import * as ethutil from '@ethereumjs/util'
import { keccak256 } from 'ethereum-cryptography/keccak.js'
import * as bech32 from 'bech32'

import * as banktypes from '../../../chain/cosmos/bank/v1beta1/tx'
import * as txtypes from '../../../chain/cosmos/tx/v1beta1/tx'
import * as secp256k1 from '../../../chain/flux/crypto/v1beta1/ethsecp256k1/keys'
import * as signingtypes from '../../../chain/cosmos/tx/signing/v1beta1/signing'
import * as signingtypes from '../../../chain/cosmos/tx/signing/v1beta1/signing'
import * as anytypes from '../../../chain/google/protobuf/any'

function hexToBech32(hexBytes: ArrayLike<number>, prefix: string): string {
  const words = bech32.bech32.toWords(hexBytes);
  return bech32.bech32.encode(prefix, words);
}

const main = async () => {
  // init account
  const wallet = ethwallet.Wallet.fromPrivateKey(Uint8Array.from(Buffer.from("88CBEAD91AEE890D27BF06E003ADE3D4E952427E88F88D31D61D3EF5E5D54305", 'hex')))
  const senderPrivKey: secp256k1.PrivKey = {key: wallet.getPrivateKey()}
  const senderPubkey: secp256k1.PubKey = {key: wallet.getPublicKey()}
  const senderPubkeyAny: anytypes.Any = {
    typeUrl: secp256k1.PubKey.$type,
    value: secp256k1.PubKey.encode(senderPubkey).finish()
  }
  const senderAddr = hexToBech32(wallet.getAddress(), 'lux')
  const receiverAddr = 'lux1jcltmuhplrdcwp7stlr4hlhlhgd4htqhu86cqx'

  // init msg
  const msg: banktypes.MsgSend = {
    fromAddress: senderAddr,
    toAddress: receiverAddr,
    amount: [{ denom: 'lux', amount: '1' }],
  }

  const msgAny: anytypes.Any = {
    typeUrl: banktypes.MsgSend.$type,
    value: banktypes.MsgSend.encode(msg).finish(),
  }

  // prep tx data
  const txBody: txtypes.TxBody = {
    messages: [msgAny],
    memo: 'abc',
    timeoutHeight: "20000",
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
        sequence: "4",
      },
    ],
    fee: {
      amount: [
        {denom: "lux", amount: "500000"}
      ],
      gasLimit: "500000",
      payer: "",
      granter: ""
    },
    tip: undefined,
  }

  const signDoc: txtypes.SignDoc = {
    bodyBytes: txtypes.TxBody.encode(txBody).finish(),
    authInfoBytes: txtypes.AuthInfo.encode(authInfo).finish(),
    chainId: 'flux-1',
    accountNumber: '4',
  }
  const signBytes = txtypes.SignDoc.encode(signDoc).finish()

  // build tx
  const msgHash = Buffer.from(keccak256(signBytes))
  const sig = ethutil.ecsign(msgHash, Buffer.from(senderPrivKey.key))


  // func SignatureDataToProto(data SignatureData) *SignatureDescriptor_Data {
  //   switch data := data.(type) {
  //   case *SingleSignatureData:
  //         return &SignatureDescriptor_Data{
  //       Sum: &SignatureDescriptor_Data_Single_{
  //         Single: &SignatureDescriptor_Data_Single{
  //           Mode:      data.SignMode,
  //               Signature: data.Signature,
  //         },
  //       },
  //     }
  //   case *MultiSignatureData:
  //         descDatas := make([]*SignatureDescriptor_Data, len(data.Signatures))
  //
  //     for j, d := range data.Signatures {
  //       descDatas[j] = SignatureDataToProto(d)
  //     }
  //
  //     return &SignatureDescriptor_Data{
  //       Sum: &SignatureDescriptor_Data_Multi_{
  //         Multi: &SignatureDescriptor_Data_Multi{
  //           Bitarray:   data.BitArray,
  //               Signatures: descDatas,
  //         },
  //       },
  //     }
  //   default:
  //     panic(fmt.Errorf("unexpected case %+v", data))
  //   }
  // }
}

main()
