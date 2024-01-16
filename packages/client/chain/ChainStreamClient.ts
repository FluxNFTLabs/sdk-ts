import { ChainGrpcStreamEvent } from './stream'
export class ChainStreamClient {
  streamEvent: ChainGrpcStreamEvent
  constructor(endpoint: string) {
    this.streamEvent = new ChainGrpcStreamEvent(endpoint)
  }
  changeEndpoint(endpoint: string) {
    this.streamEvent = new ChainGrpcStreamEvent(endpoint)
  }
}
