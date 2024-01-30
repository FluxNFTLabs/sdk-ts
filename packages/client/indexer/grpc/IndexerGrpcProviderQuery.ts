import BaseIndexerGrpc from '../../BaseIndexerGrpc'
import * as query from '../../../../chain/flux/indexer/provider/query'

export class IndexerGrpcProviderQuery extends BaseIndexerGrpc {
  protected client: query.APIClientImpl

  constructor(endpoint: string) {
    super(endpoint)
    this.client = new query.APIClientImpl(this.getGrpcWebImpl(endpoint))
  }
  async getBlock(height: string) {
    try {
      const request = query.ProviderBlockRequest.create({
        height
      })
      const response = await this.retry(() => this.client.GetBlock(request))
      return response as query.ProviderBlockResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }
  async getEvents({ height, modules }: { height: string; modules: Array<string> }) {
    try {
      const request = query.ProviderEventsRequest.create({
        height,
        modules
      })
      const response = await this.retry(() => this.client.GetEvents(request))
      return response as query.ProviderEventsResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }
}
