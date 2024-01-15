import BaseGrpc from '../../BaseGrpc'
import * as mediaQuery from '../../../../chain/flux/indexer/media/query'
import { grpc } from '@improbable-eng/grpc-web'
export class IndexerGrpcMediaQuery extends BaseGrpc {
  protected client: mediaQuery.APIClientImpl
  constructor(endpoint: string) {
    super(endpoint)
    this.client = new mediaQuery.APIClientImpl(this.getGrpcWebImpl(endpoint))
  }
  async getPresignedURL(req: mediaQuery.PresignedURLRequest, metadata: grpc.Metadata) {
    try {
      let request = mediaQuery.PresignedURLRequest.create(req)
      let response = await this.retry(() => this.client.PresignedURL(request, metadata))
      return response
    } catch (e) {
      throw e
    }
  }
}
