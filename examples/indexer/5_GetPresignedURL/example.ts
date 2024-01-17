import * as ethwallet from '@ethereumjs/wallet'
import { bech32 } from 'bech32'
import keccak256 from 'keccak256'

import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport'
import { grpc } from '@improbable-eng/grpc-web'

import * as ethsecp256k1 from '../../../chain/cosmos/crypto/ethsecp256k1/keys'
import * as media from '../../../chain/flux/indexer/media/query'
import * as ethutil from '@ethereumjs/util'
import { IndexerGrpcMediaQuery, IndexerGrpcAccountQuery, networkEndpoints } from '../../../packages'
const main = async () => {
  // init accounts
  const wallet = ethwallet.Wallet.fromPrivateKey(
    Uint8Array.from(
      Buffer.from('88CBEAD91AEE890D27BF06E003ADE3D4E952427E88F88D31D61D3EF5E5D54305', 'hex')
    )
  )
  const senderPrivKey: ethsecp256k1.PrivKey = { key: wallet.getPrivateKey() }
  const senderAddr = bech32.encode('lux', bech32.toWords(wallet.getAddress()))

  // init clients
  const accountClient = new IndexerGrpcAccountQuery('http://localhost:4460')
  const mediaClient = new IndexerGrpcMediaQuery('http://localhost:4457')

  // fetch account seq`
  const accountInfo = await accountClient.getAccount(senderAddr)

  // prepare header & ctx
  const req: media.PresignedURLRequest = {
    path: networkEndpoints.localhost.id + '/series/0',
    objs: [
      { key: 'thumbnail.jpg', op: media.S3Operation.Put },
      { key: 'pitch.pdf', op: media.S3Operation.Put }
    ]
  }

  const nonce = Buffer.from(accountInfo.nonce)
  const reqBz = media.PresignedURLRequest.encode(req).finish()
  const msg = Buffer.concat([reqBz, nonce])
  const prefix = Buffer.from(`\x19Ethereum Signed Message:\n${msg.length}`)
  const reqHash = keccak256(Buffer.concat([prefix, msg]))
  const sigParts = ethutil.ecsign(reqHash, Buffer.from(senderPrivKey.key))
  const v = Number(sigParts.v) % 27
  const reqSig = ethutil.toRpcSig(BigInt(v), sigParts.r, sigParts.s)

  const md = new grpc.Metadata()
  md.set('sender', senderAddr)
  md.set('signature', reqSig.substring(2))

  const res = await mediaClient.getPresignedURL(req, md)
  console.log(res)
}

main()
