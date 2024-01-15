import BaseGrpc from '../../BaseGrpc'
import * as authQuery from '../../../../chain/cosmos/auth/v1beta1/query'
export class ChainGrpcAuthQuery extends BaseGrpc {
  protected client: authQuery.QueryClientImpl
  constructor(endpoint: string) {
    super(endpoint)
    this.client = new authQuery.QueryClientImpl(this.getGrpcWebImpl(endpoint))
  }
  async getAccount(address: string) {
    try {
      let request = authQuery.QueryAccountRequest.create({ address })
      let response = await this.retry(() => this.client.AccountInfo(request))
      return response
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
