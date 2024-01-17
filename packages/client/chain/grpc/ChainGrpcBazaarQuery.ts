import BaseGrpc from '../../BaseGrpc'
import * as bazaarQuery from '../../../../chain/flux/bazaar/v1beta1/query'

export class ChainGrpcBazaarQuery extends BaseGrpc {
  protected client: bazaarQuery.QueryClientImpl

  constructor(endpoint: string) {
    super(endpoint)
    this.client = new bazaarQuery.QueryClientImpl(this.getGrpcWebImpl(endpoint))
  }

  async getNFTProducts({
    class_id,
    id
  }: {
    class_id: string
    id: string
  }): Promise<bazaarQuery.QueryNFTProductsResponse> {
    try {
      const request = bazaarQuery.QueryNFTProductsRequest.create({
        class_id,
        id
      })
      const response = await this.retry(() => this.client.NFTProducts(request))
      return response as bazaarQuery.QueryNFTProductsResponse
    } catch (e) {
      throw e // rethrow the error after logging
    }
  }

  async getNFTProduct({
    class_id,
    id,
    product_id
  }: {
    class_id: string
    id: string
    product_id: string
  }): Promise<bazaarQuery.QueryNFTProductResponse> {
    try {
      const request = bazaarQuery.QueryNFTProductRequest.create({
        class_id,
        id,
        product_id
      })
      const response = await this.retry(() => this.client.NFTProduct(request))
      return response as bazaarQuery.QueryNFTProductResponse
    } catch (e) {
      throw e // rethrow the error after logging
    }
  }

  async getVerifiers(): Promise<bazaarQuery.QueryVerifiersResponse> {
    try {
      const request = bazaarQuery.QueryVerifiersRequest.create({ pagination: undefined })
      const response = await this.retry(() => this.client.Verifiers(request))
      return response as bazaarQuery.QueryVerifiersResponse
    } catch (e) {
      throw e // rethrow the error after logging
    }
  }
}
