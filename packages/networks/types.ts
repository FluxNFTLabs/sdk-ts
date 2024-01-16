export enum Network {
  Localhost = 'localhost',
  Devnet = 'devnet'
}

export type NetworkEndpoints = {
  id: Network
  name: string
  lcd: string
  tm: string
  api: string
}
