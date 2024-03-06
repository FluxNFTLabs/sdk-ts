import BaseGrpc from '../../BaseGrpc'
import { PageRequest } from '../../../../chain/cosmos/base/query/v1beta1/pagination'
import * as cosmwasmWasmV1Query from '../../../../chain/cosmwasm/wasm/v1/query'
export class ChainGrpcCosmwasmWasmQuery extends BaseGrpc {
  protected client: cosmwasmWasmV1Query.QueryClientImpl
  constructor(endpoint: string) {
    super(endpoint)
    this.client = new cosmwasmWasmV1Query.QueryClientImpl(this.getGrpcWebImpl(endpoint))
  }
  async queryCodes({
    pagination
  }: {
    pagination?: PageRequest
  }): Promise<cosmwasmWasmV1Query.QueryCodesResponse> {
    const request = cosmwasmWasmV1Query.QueryCodesRequest.create({
      pagination
    })
    const response: cosmwasmWasmV1Query.QueryCodesResponse = await this.retry(() =>
      this.client.Codes(request)
    )
    return response
  }
  async queryContractsByCreatorRequest({
    address,
    pagination
  }: {
    address: string
    pagination?: PageRequest
  }): Promise<cosmwasmWasmV1Query.QueryContractsByCreatorResponse> {
    const request = cosmwasmWasmV1Query.QueryContractsByCreatorRequest.create({
      creator_address: address,
      pagination
    })
    const response: cosmwasmWasmV1Query.QueryContractsByCreatorResponse = await this.retry(() =>
      this.client.ContractsByCreator(request)
    )
    return response
  }
}
