import * as ethcrypto from 'eth-crypto'
import * as ethutil from '@ethereumjs/util'
import * as metamaskutil from '@metamask/eth-sig-util'
import { ChainId } from '../../utils'
const STORE_KEY = 'astromesh-metamask-pubkey'
const MESSAGE_SIGN_PUBKEY = 'Verify identity for access.'
export default class Metamask {
  private chainId: ChainId
  constructor(args: { chainId: ChainId }) {
    this.chainId = args.chainId
  }
  private storePubkey = (pubkey: string) => {
    localStorage.setItem(STORE_KEY, pubkey)
  }
  private getStoredPubkey = () => {
    return localStorage.getItem(STORE_KEY)
  }
  private getPubkeyIfNeed = async () => {
    const storedPubkey = this.getStoredPubkey()
    if (storedPubkey) {
      return storedPubkey
    }
    const ethereum = await this.getEthereum()
    const addresses = await ethereum.request({
      method: 'eth_requestAccounts'
    })
    const signature = await this.signPersonal(addresses[0], MESSAGE_SIGN_PUBKEY)
    const pubkey = await this.getPubkeyFromPersonalSignature(MESSAGE_SIGN_PUBKEY, signature)
    this.storePubkey(pubkey)
    return pubkey
  }
  async getAddresses(): Promise<string[]> {
    try {
      const ethereum = await this.getEthereum()
      const address = await ethereum.request({
        method: 'eth_requestAccounts'
      })
      this.getPubkeyIfNeed()
      return address
    } catch (e: unknown) {
      throw e
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async confirm(address: string): Promise<string> {
    return Promise.resolve(
      `0x${Buffer.from(`Confirmation for ${address} at time: ${Date.now()}`).toString('hex')}`
    )
  }
  async getEthereum() {
    if (window?.ethereum?.isMetaMask) {
      return window.ethereum
    }

    if (window.providers) {
      let metamask = window.providers.find((p: any) => p?.isMetaMask)
      if (metamask) {
        return metamask
      }
    }
    throw new Error('Please install the Metamask wallet extension')
  }
  async getEthereumChainId(): Promise<string> {
    const ethereum = await this.getEthereum()

    try {
      return ethereum.request({ method: 'eth_chainId' })
    } catch (e: unknown) {
      throw e
    }
  }

  async signEip712TypedData(eip712json: string, address: string): Promise<string> {
    const ethereum = await this.getEthereum()

    try {
      return await ethereum.request({
        method: 'eth_signTypedData_v4',
        params: [address, eip712json]
      })
    } catch (e: unknown) {
      throw e
    }
  }
  async signPersonal(address: string, message: any) {
    const signature = await window.ethereum.request({
      method: 'personal_sign',
      params: [message, address]
    })

    return signature
  }

  async getPubkeyFromSignature(message: any, signature: any): Promise<string> {
    const msgHash = metamaskutil.TypedDataUtils.eip712Hash(
      message,
      metamaskutil.SignTypedDataVersion.V4
    )
    const sigParams = ethutil.fromRpcSig(signature)
    const pubKey = ethutil.ecrecover(msgHash, sigParams.v, sigParams.r, sigParams.s)
    const xPubkey = ethcrypto.publicKey.compress(Buffer.from(pubKey).toString('hex'))
    return xPubkey
  }
  // eslint-disable-next-line class-methods-use-this
  async getPubKey(): Promise<string> {
    return await this.getPubkeyIfNeed()
  }
  async getPubkeyFromPersonalSignature(message: any, signature: any) {
    const prefixedMsg = ethutil.hashPersonalMessage(Buffer.from(message, 'utf8'))
    const sigParams = ethutil.fromRpcSig(signature)
    const pubKey = ethutil.ecrecover(prefixedMsg, sigParams.v, sigParams.r, sigParams.s)
    const xPubkey = ethcrypto.publicKey.compress(Buffer.from(pubKey).toString('hex'))
    return xPubkey
  }
}
