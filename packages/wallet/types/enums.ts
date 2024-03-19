export enum Wallet {
  Keplr = 'keplr',
  Metamask = 'metamask',
  Phantom = 'phantom'
}

declare global {
  interface Window {
    keplr: any
    ethereum?: any
    providers: any
  }
}
