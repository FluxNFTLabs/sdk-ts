import BaseIndexerGrpc from '../../BaseIndexerGrpc'
import * as query from '../../../../chain/flux/indexer/bazaar/query'
import { QueryNFTProductResponse } from '../../../../chain/flux/bazaar/v1beta1/query'
export class IndexerGrpcBazaarQuery extends BaseIndexerGrpc {
  protected client: query.APIClientImpl

  constructor(endpoint: string) {
    super(endpoint)
    this.client = new query.APIClientImpl(this.getGrpcWebImpl(endpoint))
  }
  async getProducts({
    class_id,
    id
  }: {
    class_id: string
    id: string
  }): Promise<query.ProductsResponse> {
    try {
      const request = query.ProductsRequest.create({
        class_id,
        id
      })
      const response = await this.retry(() => this.client.GetProducts(request))
      return response as query.ProductsResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getProduct({
    class_id,
    id,
    product_id
  }: {
    class_id: string
    id: string
    product_id: string
  }): Promise<QueryNFTProductResponse> {
    try {
      const request = query.ProductsRequest.create({
        class_id,
        id,
        product_id
      })
      const response: query.ProductsResponse = await this.retry(() =>
        this.client.GetProducts(request)
      )
      return {
        product: response.products[0] ?? null
      }
    } catch (e) {
      console.error(e)
      throw e
    }
  }
}
