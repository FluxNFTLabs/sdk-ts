import * as ethwallet from '@ethereumjs/wallet'
import { bech32 } from 'bech32'
import keccak256 from 'keccak256'

import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';
import { grpc } from "@improbable-eng/grpc-web";

import * as ethsecp256k1 from '../../../chain/cosmos/crypto/ethsecp256k1/keys'
import * as account from '../../../chain/flux/indexer/account/query'
import * as media from '../../../chain/flux/indexer/media/query'
import * as ethutil from "@ethereumjs/util";

const main = async () => {
    // init accounts
    const wallet = ethwallet.Wallet.fromPrivateKey(Uint8Array.from(Buffer.from('88CBEAD91AEE890D27BF06E003ADE3D4E952427E88F88D31D61D3EF5E5D54305', 'hex')))
    const senderPrivKey: ethsecp256k1.PrivKey = {key: wallet.getPrivateKey()}
    const senderAddr = bech32.encode('lux', bech32.toWords(wallet.getAddress()))

    // init clients
    const accountCC = new account.GrpcWebImpl('http://localhost:4455', {
        transport: NodeHttpTransport(),
    })
    const accountClient = new account.APIClientImpl(accountCC)
    const mediaCC = new media.GrpcWebImpl('http://localhost:4445', {
        transport: NodeHttpTransport(),
    })
    const mediaClient = new media.APIClientImpl(mediaCC)


    // fetch account seq
    const accountInfo = await accountClient.GetAccount({address: senderAddr})

    // prepare header & ctx
    const req: media.PresignedURLRequest = {
        op:  media.S3Operation.Put,
        key: "series/0/cac.txt",
    }
    const nonce = Buffer.from(accountInfo.nonce)
    const reqBz = media.PresignedURLRequest.encode(req).finish()
    const reqHash = keccak256(Buffer.concat([reqBz, nonce]))
    const sigParts = ethutil.ecsign(reqHash, Buffer.from(senderPrivKey.key))
    const reqSig = ethutil.toRpcSig(BigInt(0), sigParts.r, sigParts.s)

    const md = new grpc.Metadata();
    md.set('sender', [senderAddr]);
    md.set('signature', [reqSig.substring(2)])

    const res = await mediaClient.PresignedURL(req, md)
    console.log(res)
}

main()
