import BaseGrpc from '../../BaseGrpc'
import * as bazaarQuery from '../../../../chain/flux/bazaar/v1beta1/query'

export class ChainGrpcBazaarQuery extends BaseGrpc {
  protected client: bazaarQuery.QueryClientImpl

  constructor(endpoint: string) {
    super(endpoint)
    this.client = new bazaarQuery.QueryClientImpl(this.getGrpcWebImpl(endpoint))
  }

  async getNFTProducts(classId: string, projectId: string) {
    try {
      const request = bazaarQuery.QueryNFTProductsRequest.create({
        class_id: classId,
        id: projectId
      })
      const response = await this.retry(() => this.client.NFTProducts(request))
      return response
    } catch (e) {
      throw e // rethrow the error after logging
    }
  }

  async getNFTProduct(classId: string, projectId: string, productId: string) {
    try {
      const request = bazaarQuery.QueryNFTProductRequest.create({
        class_id: classId,
        id: projectId,
        product_id: productId
      })
      const response = await this.retry(() => this.client.NFTProduct(request))
      return response
    } catch (e) {
      throw e // rethrow the error after logging
    }
  }

  async getVerifiers() {
    try {
      const request = bazaarQuery.QueryVerifiersRequest.create({ pagination: undefined })
      const response = await this.retry(() => this.client.Verifiers(request))
      return response
    } catch (e) {
      throw e // rethrow the error after logging
    }
  }
}
