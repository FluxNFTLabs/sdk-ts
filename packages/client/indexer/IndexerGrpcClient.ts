import { IndexerGrpcWeb3gwQuery, IndexerGrpcMediaQuery, IndexerGrpcAccountQuery } from './grpc'

export class IndexerGrpcClient {
  web3gw: IndexerGrpcWeb3gwQuery
  media: IndexerGrpcMediaQuery
  account: IndexerGrpcAccountQuery

  constructor(endpoint: string) {
    this.web3gw = new IndexerGrpcWeb3gwQuery(endpoint)
    this.media = new IndexerGrpcMediaQuery(endpoint)
    this.account = new IndexerGrpcAccountQuery(endpoint)
  }

  changeEndpoint(endpoint: string) {
    this.web3gw = new IndexerGrpcWeb3gwQuery(endpoint)
    this.media = new IndexerGrpcMediaQuery(endpoint)
    this.account = new IndexerGrpcAccountQuery(endpoint)
  }
}
