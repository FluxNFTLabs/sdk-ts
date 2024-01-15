import BaseGrpc from '../../BaseGrpc'
import * as accountQuery from '../../../../chain/flux/indexer/account/query'
export class IndexerGrpcAccountQuery extends BaseGrpc {
  protected client: accountQuery.APIClientImpl
  constructor(endpoint: string) {
    super(endpoint)
    this.client = new accountQuery.APIClientImpl(this.getGrpcWebImpl(endpoint))
  }
  async getAccount(address: string) {
    try {
      let request = accountQuery.GetAccountRequest.create({ address })
      let response = await this.retry(() => this.client.GetAccount(request))
      return response
    } catch (e) {
      throw e
    }
  }
}
