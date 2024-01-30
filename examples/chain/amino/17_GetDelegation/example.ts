import * as ethwallet from '@ethereumjs/wallet'
import { bech32 } from 'bech32'
import { ChainGrpcStakingQuery } from '../../../../packages'
const main = async () => {
  // init clients
  const stakingClient = new ChainGrpcStakingQuery('http://localhost:10337')

  // init user2
  const wallet = ethwallet.Wallet.fromPrivateKey(
    Uint8Array.from(
      Buffer.from('741de4f8988ea941d3ff0287911ca4074e62b7d45c991a51186455366f10b544', 'hex')
    )
  )
  const luxAddress = bech32.encode('lux', bech32.toWords(wallet.getAddress()))
  try {
    const res = await stakingClient.getDelegation({
      delegator_addr: luxAddress,
      validator_addr: 'luxvaloper1vvupy62qn5pug4vyuctl7x3vcfa7fl7xq0h82c'
    })
    console.log(JSON.stringify(res.delegation_response, null, 2))
  } catch (err) {
    console.log(err.message)
  }
}

main()
