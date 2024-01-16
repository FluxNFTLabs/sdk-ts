import BaseGrpc from '../../BaseGrpc'
import * as fnftQuery from '../../../../chain/flux/fnft/v1beta1/query'

export class ChainGrpcFnftQuery extends BaseGrpc {
  protected client: fnftQuery.QueryClientImpl

  constructor(endpoint: string) {
    super(endpoint)
    this.client = new fnftQuery.QueryClientImpl(this.getGrpcWebImpl(endpoint))
  }

  async getHolder(
    classId: string,
    projectId: string,
    address: string
  ): Promise<fnftQuery.QueryHolderResponse> {
    try {
      const request = fnftQuery.QueryHolderRequest.create({
        class_id: classId,
        id: projectId,
        address: address
      })
      const response = await this.retry(() => this.client.Holder(request))
      return response as fnftQuery.QueryHolderResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getHolders(classId: string, projectId: string): Promise<fnftQuery.QueryHoldersResponse> {
    try {
      const request = fnftQuery.QueryHoldersRequest.create({
        class_id: classId,
        id: projectId
      })
      const response = await this.retry(() => this.client.Holders(request))
      return response as fnftQuery.QueryHoldersResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getNFTs(classId: string, owner: string): Promise<fnftQuery.QueryNFTsResponse> {
    try {
      const request = fnftQuery.QueryNFTsRequest.create({
        class_id: classId,
        owner: owner
      })
      const response = await this.retry(() => this.client.NFTs(request))
      return response as fnftQuery.QueryNFTsResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getNFT(classId: string, projectId: string): Promise<fnftQuery.QueryNFTResponse> {
    try {
      const request = fnftQuery.QueryNFTRequest.create({
        class_id: classId,
        id: projectId
      })
      const response = await this.retry(() => this.client.NFT(request))
      return response as fnftQuery.QueryNFTResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getClasses(): Promise<fnftQuery.QueryClassesResponse> {
    try {
      const request = fnftQuery.QueryClassesRequest.create({})
      const response = await this.retry(() => this.client.Classes(request))
      return response as fnftQuery.QueryClassesResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getClass(classId: string): Promise<fnftQuery.QueryClassResponse> {
    try {
      const request = fnftQuery.QueryClassRequest.create({
        class_id: classId
      })
      const response = await this.retry(() => this.client.Class(request))
      return response as fnftQuery.QueryClassResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getSupply(classId: string): Promise<fnftQuery.QuerySupplyResponse> {
    try {
      const request = fnftQuery.QuerySupplyRequest.create({
        class_id: classId
      })
      const response = await this.retry(() => this.client.Supply(request))
      return response as fnftQuery.QuerySupplyResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getBalance(classId: string, owner: string): Promise<fnftQuery.QueryBalanceResponse> {
    try {
      const request = fnftQuery.QueryBalanceRequest.create({
        class_id: classId,
        owner: owner
      })
      const response = await this.retry(() => this.client.Balance(request))
      return response as fnftQuery.QueryBalanceResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }
}
