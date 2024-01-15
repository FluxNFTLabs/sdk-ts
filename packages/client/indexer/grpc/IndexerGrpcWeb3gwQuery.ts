import BaseGrpc from '../../BaseGrpc'
import * as web3gwQuery from '../../../../chain/flux/indexer/web3gw/query'
export class IndexerGrpcWeb3gwQuery extends BaseGrpc {
  protected client: web3gwQuery.APIClientImpl
  constructor(endpoint: string) {
    super(endpoint)
    this.client = new web3gwQuery.APIClientImpl(this.getGrpcWebImpl(endpoint))
  }
  async faucetSend(address: string) {
    try {
      let request = web3gwQuery.FaucetSendRequest.create({ address })
      let response = await this.retry(() => this.client.FaucetSend(request))
      return response
    } catch (e) {
      throw e
    }
  }
}
