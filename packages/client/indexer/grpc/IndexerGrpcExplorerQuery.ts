import BaseIndexerGrpc from '../../BaseIndexerGrpc'
import * as explorerQuery from '../../../../chain/flux/indexer/explorer/query'
import { ListEvmContractsRequest, ListEvmContractsResponse } from '../../../../chain/flux/indexer/explorer/query'
import { PageRequest } from "../../../../chain/cosmos/base/query/v1beta1/pagination";

export class IndexerGrpcExplorerQuery extends BaseIndexerGrpc {
  protected client: explorerQuery.APIClientImpl

  constructor(endpoint: string) {
    super(endpoint)
    this.client = new explorerQuery.APIClientImpl(this.getGrpcWebImpl(endpoint))
  }

  public async listEvmContracts({
    address,
    pagination,
  }: {
    address?: string,
    pagination?: PageRequest,
  }): Promise<ListEvmContractsResponse> {
    const request = ListEvmContractsRequest.create({
      address: address,
      pagination: pagination,
    })
    const response: explorerQuery.ListEvmContractsResponse = await this.retry(() =>
      this.client.ListEvmContracts(request)
    )
    return response
  }
}
