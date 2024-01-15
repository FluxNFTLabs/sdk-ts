import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport'
import { grpc } from '@improbable-eng/grpc-web'
export const getGrpcTransport = (): grpc.TransportFactory | undefined => {
  return NodeHttpTransport()
}
