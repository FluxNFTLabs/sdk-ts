import BaseGrpc from '../../BaseGrpc'
import * as fnftQuery from '../../../../chain/flux/fnft/v1beta1/query'

export class ChainGrpcFnftQuery extends BaseGrpc {
  protected client: fnftQuery.QueryClientImpl

  constructor(endpoint: string) {
    super(endpoint)
    this.client = new fnftQuery.QueryClientImpl(this.getGrpcWebImpl(endpoint))
  }

  async getHolder(classId: string, projectId: string, address: string) {
    try {
      const request = fnftQuery.QueryHolderRequest.create({
        class_id: classId,
        id: projectId,
        address: address
      })
      const response = await this.retry(() => this.client.Holder(request))
      return response
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getHolders(classId: string, projectId: string) {
    try {
      const request = fnftQuery.QueryHoldersRequest.create({
        class_id: classId,
        id: projectId
      })
      const response = await this.retry(() => this.client.Holders(request))
      return response
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getNFTs(classId: string, owner: string) {
    try {
      const request = fnftQuery.QueryNFTsRequest.create({
        class_id: classId,
        owner: owner
      })
      const response = await this.retry(() => this.client.NFTs(request))
      return response
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getNFT(classId: string, projectId: string) {
    try {
      const request = fnftQuery.QueryNFTRequest.create({
        class_id: classId,
        id: projectId
      })
      const response = await this.retry(() => this.client.NFT(request))
      return response
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getClasses() {
    try {
      const request = fnftQuery.QueryClassesRequest.create({})
      const response = await this.retry(() => this.client.Classes(request))
      return response
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getClass(classId: string) {
    try {
      const request = fnftQuery.QueryClassRequest.create({
        class_id: classId
      })
      const response = await this.retry(() => this.client.Class(request))
      return response
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getSupply(classId: string) {
    try {
      const request = fnftQuery.QuerySupplyRequest.create({
        class_id: classId
      })
      const response = await this.retry(() => this.client.Supply(request))
      return response
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getBalance(classId: string, owner: string) {
    try {
      const request = fnftQuery.QueryBalanceRequest.create({
        class_id: classId,
        owner: owner
      })
      const response = await this.retry(() => this.client.Balance(request))
      return response
    } catch (e) {
      console.error(e)
      throw e
    }
  }
}
