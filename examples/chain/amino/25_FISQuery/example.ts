import * as ethwallet from '@ethereumjs/wallet'
import * as ethutil from '@ethereumjs/util'
import { getMessage } from 'eip-712'
import { bech32 } from 'bech32'
import * as fs from 'fs'
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport'
import * as anytypes from '../../../../chain/google/protobuf/any'
import * as chaintypes from '../../../../chain/flux/types/v1beta1/tx_ext'
import * as strategytypes from '../../../../chain/flux/strategy/v1beta1/tx'
import * as astromeshquery from '../../../../chain/flux/astromesh/v1beta1/query'
import * as txtypes from '../../../../chain/cosmos/tx/v1beta1/tx'
import * as txservice from '../../../../chain/cosmos/tx/v1beta1/service'
import * as authservice from '../../../../chain/cosmos/auth/v1beta1/query'
import * as ethsecp256k1 from '../../../../chain/cosmos/crypto/ethsecp256k1/keys'
import * as signingtypes from '../../../../chain/cosmos/tx/signing/v1beta1/signing'
import * as codectypemap from '../../../../chain/codec_type_map.json'
import * as ethcrypto from 'eth-crypto'
import { ChainGrpcClient } from '../../../../packages/client/chain/ChainGrpcClient'
import { getEIP712SignBytes } from '../../../../eip712/eip712'
import { simulate } from '../../../../packages'
import { Plane, TxAction } from '../../../../chain/flux/astromesh/v1beta1/tx'

const main = async () => {
  const cc = new astromeshquery.GrpcWebImpl('http://localhost:10337', {
    transport: NodeHttpTransport(),
  })
  const astromeshClient = new astromeshquery.QueryClientImpl(cc)

  try {
    let queryResult = await astromeshClient.FISQuery({
      instructions: [{
        plane: Plane.COSMOS,
        action: astromeshquery.QueryAction.COSMOS_BANK_BALANCE,
        address: new Uint8Array(),
        input: [
          Uint8Array.from(Buffer.from('lux1jcltmuhplrdcwp7stlr4hlhlhgd4htqhu86cqx,lux1kmmz47pr8h46wcyxw8h3k8s85x0ncykqp0xmgj')),
          Uint8Array.from(Buffer.from('lux,lux'))
        ]
      }]
    })

    console.log('response:')
    for(let r of queryResult.instruction_responses) {
      console.log('plane:', r.plane)
      for(let i = 0; i < r.output.length; i++) {
        console.log(`data[${i}] = ${Buffer.from(r.output[i]).toString()}`)
      }
    }
  } catch(e) {
    console.error('err happened:', e)
  }
}

main()
