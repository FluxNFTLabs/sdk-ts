import { NetworkEndpoints, Network } from './types'
export const localhostEndpoints: NetworkEndpoints = {
  name: 'Localhost',
  id: Network.Localhost,
  lcd: 'https://lcd.localhost',
  tm: 'https://tm.localhost',
  api: 'https://api.localhost'
}
export const devnetEndpoints: NetworkEndpoints = {
  name: 'Devnet',
  id: Network.Devnet,
  lcd: 'https://devnet.lcd.fluxnft.space',
  tm: 'https://devnet.tm.fluxnft.space',
  api: 'http://devnet.api.fluxnft.space'
}
