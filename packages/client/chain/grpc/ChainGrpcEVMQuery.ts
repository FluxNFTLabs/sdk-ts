import BaseGrpc from '../../BaseGrpc'
import * as evmQuery from '../../../../chain/flux/evm/v1beta1/query'
export class ChainGrpcEVMQuery extends BaseGrpc {
  protected client: evmQuery.QueryClientImpl
  constructor(endpoint: string) {
    super(endpoint)
    this.client = new evmQuery.QueryClientImpl(this.getGrpcWebImpl(endpoint))
  }
  async contractQuery({
    address,
    calldata
  }: {
    address: string
    calldata: Uint8Array
  }): Promise<evmQuery.ContractQueryResponse> {
    const request = evmQuery.ContractQueryRequest.create({
      address,
      calldata
    })
    const response: evmQuery.ContractQueryResponse = await this.retry(() =>
      this.client.ContractQuery(request)
    )
    return response
  }
}
