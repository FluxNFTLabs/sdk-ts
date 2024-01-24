import * as ethwallet from '@ethereumjs/wallet'
import { bech32 } from 'bech32'
import { ChainGrpcBankQuery } from '../../../../packages'
const main = async () => {
  // init clients
  const txClient = new ChainGrpcBankQuery('http://localhost:10337')

  // init user2
  const wallet = ethwallet.Wallet.fromPrivateKey(
    Uint8Array.from(
      Buffer.from('741de4f8988ea941d3ff0287911ca4074e62b7d45c991a51186455366f10b544', 'hex')
    )
  )
  const senderAddr = bech32.encode('lux', bech32.toWords(wallet.getAddress()))
  try {
    const res = await txClient.getAllBalances(senderAddr)
    console.log(JSON.stringify(res.balances, null, 2))
  } catch (err) {
    console.log(err)
  }
}

main()
