import { Network, NetworkEndpoints } from './types'
import { localhostEndpoints, devnetEndpoints } from './endpoints'
export const defaultNetwork: Network = Network.Devnet
export const networkEndpoints: Record<Network, NetworkEndpoints> = {
  [Network.Localhost]: localhostEndpoints,
  [Network.Devnet]: devnetEndpoints
}

export const getNetworkEndpoint = (network: Network): NetworkEndpoints => {
  return networkEndpoints[network]
}
