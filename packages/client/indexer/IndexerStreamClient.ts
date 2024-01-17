import { IndexerStreamBazaar, IndexerStreamFnft, IndexerStreamProvider } from './stream'

export class IndexerStreamClient {
  bazaar: IndexerStreamBazaar
  fnft: IndexerStreamFnft
  provider: IndexerStreamProvider
  constructor(endpoint: string) {
    this.bazaar = new IndexerStreamBazaar(endpoint)
    this.fnft = new IndexerStreamFnft(endpoint)
    this.provider = new IndexerStreamProvider(endpoint)
  }
  changeEndpoint(endpoint: string) {
    this.bazaar = new IndexerStreamBazaar(endpoint)
    this.fnft = new IndexerStreamFnft(endpoint)
    this.provider = new IndexerStreamProvider(endpoint)
  }
}
