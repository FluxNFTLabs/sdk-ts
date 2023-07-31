import cosmosclient from '@cosmos-client/core';
import * as banktypes from '../../../chain/cosmos/bank/v1beta1/tx'
import * as txtypes from '../../../chain/cosmos/tx/v1beta1/tx'
import * as signingtypes from '../../../chain/cosmos/tx/signing/v1beta1/signing'
import * as anytypes from '../../../chain/google/protobuf/any'
import {MsgSendDesc} from "../../../chain/cosmos/bank/v1beta1/tx";
import {Coin} from "../../../chain/cosmos/base/v1beta1/coin";

const main = async () => {
  // update sdk prefix
  const bech32Prefix = {
    accAddr: 'lux',
    accPub: 'luxpub',
    valAddr: 'luxvaloper',
    valPub: 'luxvaloperpub',
    consAddr: 'luxvalcons',
    consPub: 'luxvalconspub',
  };
  cosmosclient.config.setBech32Prefix(bech32Prefix)

  // init msg
  const msg: banktypes.MsgSend = {
    fromAddress: 'lux1cml96vmptgw99syqrrz8az79xer2pcgp209sv4',
    toAddress: 'lux1cml96vmptgw99syqrrz8az79xer2pcgp209sv4',
    amount: [{ denom: 'lux', amount: '1' }],
  }

  const msgAny: anytypes.Any = {
    typeUrl: banktypes.MsgSendDesc.service + banktypes.MsgSendDesc.methodName,
    value: banktypes.MsgSend.encode(msg).finish()
  }

  banktypes.MsgSend[Symbol.hasInstance]

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
        public_key: anytypes.Any.,
        mode_info: {
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
      payer: null,
      granter: null
    },
  }

  console.log(banktypes.MsgSendDesc)


}

main()
