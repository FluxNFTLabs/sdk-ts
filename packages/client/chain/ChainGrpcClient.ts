import {
  ChainGrpcAuthQuery,
  ChainGrpcBankQuery,
  ChainGrpcFnftQuery,
  ChainGrpcBazaarQuery,
  ChainGrpcTxService
} from './grpc'
export class ChainGrpcClient {
  transaction: ChainGrpcTxService
  auth: ChainGrpcAuthQuery
  bank: ChainGrpcBankQuery
  fnft: ChainGrpcFnftQuery
  bazaar: ChainGrpcBazaarQuery
  constructor(endpoint: string) {
    this.transaction = new ChainGrpcTxService(endpoint)
    this.auth = new ChainGrpcAuthQuery(endpoint)
    this.bank = new ChainGrpcBankQuery(endpoint)
    this.fnft = new ChainGrpcFnftQuery(endpoint)
    this.bazaar = new ChainGrpcBazaarQuery(endpoint)
  }
  changeEndpoint(endpoint: string) {
    this.transaction = new ChainGrpcTxService(endpoint)
    this.auth = new ChainGrpcAuthQuery(endpoint)
    this.bank = new ChainGrpcBankQuery(endpoint)
    this.fnft = new ChainGrpcFnftQuery(endpoint)
    this.bazaar = new ChainGrpcBazaarQuery(endpoint)
  }
}
