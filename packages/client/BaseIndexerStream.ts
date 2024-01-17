import * as streamService from '../../chain/flux/indexer/bazaar/query'
import { getGrpcTransport } from '../utils/grpc'
import { Observable, Subscription } from 'rxjs'
export default class BaseIndexerStream extends streamService.GrpcWebImpl {
  protected module: string = ''

  constructor(endpoint: string) {
    super(endpoint, { transport: getGrpcTransport() })
  }

  public getGrpcWebImpl(endpoint: string) {
    return new BaseIndexerStream(endpoint)
  }
  subscribe({
    observable,
    callback,
    onEndCallback,
    onStatusCallback
  }: {
    observable: Observable<any>
    callback: Function
    onEndCallback?: Function
    onStatusCallback?: Function
  }): Subscription {
    let subscription = observable.subscribe({
      next: (response: any) => {
        callback(response)
      },
      error: (err: any) => {
        onStatusCallback && onStatusCallback(err)
      },
      complete: () => {
        onEndCallback && onEndCallback()
      }
    })
    return subscription
  }
}
