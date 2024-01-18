import BaseIndexerGrpc from '../../BaseIndexerGrpc'
import * as fnftQuery from '../../../../chain/flux/indexer/fnft/query'
import { QueryNFTResponse, QueryHolderResponse } from '../../../../chain/flux/fnft/v1beta1/query'
export class IndexerGrpcFnftQuery extends BaseIndexerGrpc {
  protected client: fnftQuery.APIClientImpl

  constructor(endpoint: string) {
    super(endpoint)
    this.client = new fnftQuery.APIClientImpl(this.getGrpcWebImpl(endpoint))
  }

  async getHolder({
    class_id,
    id,
    address
  }: {
    class_id: string
    id: string
    address: string
  }): Promise<QueryHolderResponse> {
    try {
      const request = fnftQuery.HoldersRequest.create({
        class_id,
        id,
        address
      })
      const response: fnftQuery.HoldersResponse = await this.retry(() =>
        this.client.GetHolders(request)
      )
      return {
        holder: response.holders[0] ?? null
      }
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getHolders({
    class_id,
    id
  }: {
    class_id: string
    id: string
  }): Promise<fnftQuery.HoldersResponse> {
    try {
      const request = fnftQuery.HoldersRequest.create({
        class_id,
        id
      })
      const response = await this.retry(() => this.client.GetHolders(request))
      return response as fnftQuery.HoldersResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getNFTs({
    class_id,
    id,
    owner,
    status
  }: {
    class_id: string
    id?: string
    owner?: string
    status?: string
  }): Promise<fnftQuery.NFTsResponse> {
    try {
      const request = fnftQuery.NFTsRequest.create({
        class_id: class_id,
        owner: owner ?? '',
        id: id ?? '',
        status: status ?? ''
      })
      const response = await this.retry(() => this.client.GetNFTs(request))
      return response as fnftQuery.NFTsResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getNFT({ class_id, id }: { class_id: string; id: string }): Promise<QueryNFTResponse> {
    try {
      const request = fnftQuery.NFTsRequest.create({
        class_id,
        id
      })
      const response: fnftQuery.NFTsResponse = await this.retry(() => this.client.GetNFTs(request))
      return {
        nft: response.nfts[0] ?? null
      }
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  async getClasses(): Promise<fnftQuery.ClassesResponse> {
    try {
      const request = fnftQuery.ClassesRequest.create({})
      const response = await this.retry(() => this.client.GetClasses(request))
      return response as fnftQuery.ClassesResponse
    } catch (e) {
      console.error(e)
      throw e
    }
  }
}
