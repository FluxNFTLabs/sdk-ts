// This example demonstrates how to define and run FIS scripts, offline
import * as banktypes from '../../../../chain/cosmos/bank/v1beta1/tx'
import { Coin } from '../../../../chain/cosmos/base/v1beta1/coin'
import { BigNumber, ChainGrpcBankQuery, getFluxAddressFromBuffer, getSvmAddressFromLux } from '../../../../packages'
import * as ethsecp256k1 from '../../../../chain/cosmos/crypto/ethsecp256k1/keys'
import * as ethcrypto from 'eth-crypto';
import * as ethwallet from '@ethereumjs/wallet'
import * as anytypes from '../../../../chain/google/protobuf/any'
import { bech32 } from 'bech32'
import * as txservice from '../../../../chain/cosmos/tx/v1beta1/service'
import * as txtypes from '../../../../chain/cosmos/tx/v1beta1/tx'
import * as codectypemap from '../../../../chain/codec_type_map.json'
import * as signingtypes from '../../../../chain/cosmos/tx/signing/v1beta1/signing'
import { getEIP712SignBytes } from '../../../../eip712/eip712';
import * as chaintypes from '../../../../chain/flux/types/v1beta1/tx_ext'
import { getMessage } from 'eip-712';
import * as ethutil from '@ethereumjs/util'
import * as authservice from '../../../../chain/cosmos/auth/v1beta1/query'
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

// shorthands
interface FisConfig {
    myAddress: string
    bankClient: ChainGrpcBankQuery
    authClient: authservice.QueryClientImpl
    txClient: txservice.ServiceClientImpl
}

var 
    BN = BigNumber,
    bank = banktypes

var fis: FisConfig = {
    myAddress: '',
    bankClient: null,
    txClient: null,
    authClient: null
}

let myAddress = fis.myAddress

function toMsg(msgType, msgData) {
    return {
        _typeRef: msgType,
        ...msgData,
    }
}

// first version doesn't consider revamping the code, just use js nature
let exampleCode = `
    (async () => {
        let msg = []
        let balance = await fis.bankClient.getBalance(fis.myAddress, 'lux')
        let amount = new BN(balance.balance.amount)
        if (amount.gt(new BN('100000000000000000000'))) {
            msg.push(toMsg(bank.MsgSend, {
                from_address: fis.myAddress,
                to_address: 'lux17gkuet8f6pssxd8nycm3qr9d9y699rupfgnjx5',
                amount: [{
                    denom: 'lux',
                    amount: '100000',
                }]
            }))
        }

        return msg
    })()
`

function loadConfig(wallet: ethwallet.Wallet, rpcEndpoint: string) {
    const cc = new txservice.GrpcWebImpl(rpcEndpoint, {
        transport: NodeHttpTransport(),
    })

    fis.myAddress = bech32.encode('lux', bech32.toWords(wallet.getAddress())),
    fis.bankClient = new ChainGrpcBankQuery(rpcEndpoint)
    fis.txClient = new txservice.ServiceClientImpl(cc)
    fis.authClient = new authservice.QueryClientImpl(cc)
}

async function signAndBroadcast(
    authClient: authservice.QueryClientImpl,
    txClient: txservice.ServiceClientImpl, 
    wallet: ethwallet.Wallet, 
    msgs,
) {  
    const senderAddr =  getFluxAddressFromBuffer(wallet.getAddress())
    const senderPrivKey: ethsecp256k1.PrivKey = {key: wallet.getPrivateKey()}
    const senderXPubkey = ethcrypto.publicKey.compress(Buffer.from(wallet.getPublicKey()).toString('hex'))
    const senderPubkey: ethsecp256k1.PubKey = {key: Buffer.from(senderXPubkey, 'hex')}
    const senderPubkeyAny: anytypes.Any = {
        type_url: '/' + ethsecp256k1.PubKey.$type,
        value: ethsecp256k1.PubKey.encode(senderPubkey).finish()
    }
    const senderInfo = await authClient.AccountInfo({address: senderAddr})
    const senderAccNum = senderInfo.info!.account_number!
    const senderAccSeq = senderInfo.info!.sequence!
  
    let msgAnys = []
    let msgJsons = []
    for(let msg of msgs) {
        const msgAny: anytypes.Any = {
            type_url: `/${banktypes.MsgSend.$type}`,
            value: msg._typeRef.encode(msg).finish(),
        }
    
        const msgJSON = {
            type: codectypemap[`/${msg._typeRef.$type}`],
            value: msg._typeRef.toJSON(msg)
        }

        msgAnys.push(msgAny)
        msgJsons.push(msgJSON)
    }

        // prep tx data
    const txBody: txtypes.TxBody = {
        messages: msgAnys,
        memo: '',
        timeout_height: '19000000',
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

    let eip712SignDoc = getEIP712SignBytes(signDoc, msgJsons, '')
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

; (async() => {
    const wallet = ethwallet.Wallet.fromPrivateKey(Uint8Array.from(Buffer.from('88CBEAD91AEE890D27BF06E003ADE3D4E952427E88F88D31D61D3EF5E5D54305', 'hex')))
    loadConfig(wallet, 'http://localhost:10337')
    let msgs = await eval(exampleCode)
    let res = await signAndBroadcast(fis.authClient, fis.txClient, wallet, msgs)
    console.log(res)
})()
