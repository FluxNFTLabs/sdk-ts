import { Wallet } from './types'
import { ChainId } from '../utils'
import { Keplr, Metamask } from './wallets'
export * from './types'
export default class WalletStrategy {
  public provider: any
  private chainId: ChainId
  private wallet: Wallet
  constructor(wallet: Wallet, chainId: ChainId) {
    this.chainId = chainId
    this.wallet = wallet
    switch (wallet) {
      case Wallet.Keplr:
        this.provider = new Keplr({ chainId })
        break
      case Wallet.Metamask:
        this.provider = new Metamask({ chainId })
        break
      default:
        this.provider = new Keplr({ chainId })
        break
    }
  }
  async setWallet(wallet: Wallet) {
    this.wallet = wallet
    switch (wallet) {
      case Wallet.Keplr:
        this.provider = new Keplr({ chainId: this.chainId })
        break
      case Wallet.Metamask:
        this.provider = new Metamask({ chainId: this.chainId })
        break
      default:
        this.provider = new Keplr({ chainId: this.chainId })
        break
    }
  }
  async getAddresses(): Promise<string[]> {
    return this.provider.getAddresses()
  }
  async confirm(address: string): Promise<string> {
    return this.provider.confirm(address)
  }
  async getPubKey(): Promise<string> {
    if (this.wallet === Wallet.Metamask) {
      throw new Error('This wallet does not support getPubKey')
    }
    return this.provider.getPubKey()
  }
  async getPubkeyFromSignature(message: string, signature: string): Promise<string> {
    if (this.wallet === Wallet.Metamask) {
      return this.provider.getPubkeyFromSignature(message, signature)
    }
    throw new Error('This wallet does not support getPubkeyFromSignature')
  }
  async signEip712TypedData(eip712json: string, address: string): Promise<string> {
    if (this.wallet === Wallet.Metamask) {
      return this.provider.signEip712TypedData(eip712json, address)
    }
    throw new Error('This wallet does not support signEip712TypedData')
  }
  async signPersonal(address: string, message: any) {
    if (this.wallet === Wallet.Metamask) {
      return this.provider.signPersonal(address, message)
    }
    throw new Error('This wallet does not support signPersonal')
  }
  async signEIP712CosmosTx(eip712: any, signDoc: string) {
    if (this.wallet === Wallet.Metamask) {
      throw new Error('This wallet does not support signEIP712CosmosTx')
    }
    return this.provider.signEIP712CosmosTx({ eip712, signDoc })
  }
  async signTransactionCosmos(signDoc: any, address: string) {
    if (this.wallet === Wallet.Metamask) {
      throw new Error('This wallet does not support signTransactionCosmos')
    }
    return this.provider.signTransactionCosmos(signDoc, address)
  }
  async sendTx(tx: any, mode: any) {
    if (this.wallet === Wallet.Metamask) {
      throw new Error('This wallet does not support sendTx')
    }
    return this.provider.sendTx(tx, mode)
  }
  async getSignaturePersonal(senderAddress: string, message: any) {
    if (this.wallet === Wallet.Keplr) {
      throw new Error('This wallet does not support getSignaturePersonal')
    }
    return this.provider.signPersonal(senderAddress, message)
  }
}
