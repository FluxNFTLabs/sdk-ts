export enum Wallet {
  Keplr = 'keplr',
  Metamask = 'metamask'
}

declare global {
  interface Window {
    keplr: any
    ethereum: any
    providers: any
  }
}
