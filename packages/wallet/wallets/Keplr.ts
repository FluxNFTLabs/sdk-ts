/* eslint-disable class-methods-use-this */
import type {
  Keplr,
  StdSignDoc,
  AminoSignResponse,
  Window as KeplrWindow
} from '@keplr-wallet/types'
import { ChainId } from '../../utils'

export default class KeplrWallet {
  private chainId: ChainId

  constructor(args: { chainId: ChainId }) {
    this.chainId = args.chainId
  }

  async suggestChain() {
    if (!window || !window.keplr) {
      throw new Error('Please install the Keplr wallet extension')
    }
    await window.keplr.experimentalSuggestChain({
      rpc: 'https://tm.localhost',
      rest: 'https://lcd.localhost',
      chainId: ChainId.Testnet,
      chainName: 'Flux',
      stakeCurrency: { coinDenom: 'LUX', coinMinimalDenom: 'ulux', coinDecimals: 18 },
      bech32Config: {
        bech32PrefixAccAddr: 'lux',
        bech32PrefixAccPub: 'luxpub',
        bech32PrefixValAddr: 'luxvaloper',
        bech32PrefixValPub: 'luxvaloperpub',
        bech32PrefixConsAddr: 'luxvalcons',
        bech32PrefixConsPub: 'luxvalconspub'
      },
      bip44: { coinType: 60 },
      currencies: [{ coinDenom: 'LUX', coinMinimalDenom: 'ulux', coinDecimals: 18 }],
      feeCurrencies: [{ coinDenom: 'LUX', coinMinimalDenom: 'ulux', coinDecimals: 18 }],
      gasPriceStep: { low: 0.05, average: 0.125, high: 0.2 }
    })
  }
  async getAddresses(): Promise<string[]> {
    try {
      await this.suggestChain()
      const accounts = await this.getAccounts()
      return accounts.map((account: any) => account.address)
    } catch (e: unknown) {
      throw e
    }
  }

  async confirm(address: string): Promise<string> {
    return Promise.resolve(
      `0x${Buffer.from(`Confirmation for ${address} at time: ${Date.now()}`).toString('hex')}`
    )
  }

  async getPubKey(): Promise<string> {
    const key = await this.getKey()
    return Buffer.from(key.pubKey).toString('base64')
  }

  public async getKey(): Promise<{
    name: string
    algo: string
    isNanoLedger: boolean
    pubKey: Uint8Array
    address: Uint8Array
    bech32Address: string
  }> {
    const keplr = await this.getKeplrWallet()

    try {
      return keplr.getKey(this.chainId)
    } catch (e: unknown) {
      throw e
    }
  }
  public async getKeplrWallet() {
    const { chainId } = this
    const keplr = await this.getKeplr()
    console.log('getKeplrWallet')
    try {
      await keplr.enable(chainId)
      return keplr as Keplr
    } catch (e: unknown) {
      throw e
    }
  }

  private async getKeplr() {
    if (!window || !window.keplr) {
      throw new Error('Please install the Keplr wallet extension')
    }
    return window.keplr!
  }

  public async getAccounts() {
    const { chainId } = this
    const keplr = await this.getKeplr()

    try {
      return keplr.getOfflineSigner(chainId).getAccounts()
    } catch (e: unknown) {
      throw e
    }
  }

  async signTransactionCosmos(signDoc: any, address: string) {
    const keplr = await this.getKeplr()
    console.log('this.chainId', this.chainId)
    const offlineSigner = keplr.getOfflineSigner(this.chainId)
    console.log('offlineSigner', offlineSigner)
    const directSignResponse = await offlineSigner.signDirect(address, signDoc)
    console.log(2)
    return directSignResponse
  }

  public async signEIP712CosmosTx({
    eip712,
    signDoc
  }: {
    eip712: any
    signDoc: StdSignDoc
  }): Promise<AminoSignResponse> {
    const { chainId } = this
    const keplr = await this.getKeplrWallet()
    const key = await this.getKey()

    try {
      console.log({
        chainId,
        key: key.bech32Address,
        eip712,
        signDoc
      })
      return keplr.experimentalSignEIP712CosmosTx_v0(chainId, key.bech32Address, eip712, signDoc)
    } catch (e: unknown) {
      console.log(e)
      throw e
    }
  }
}
