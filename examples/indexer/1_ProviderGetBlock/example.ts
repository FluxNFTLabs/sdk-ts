import * as providertypes from '../../../chain/flux/indexer/provider/query';
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

const main = async () => {
  const host = 'http://localhost:4445';
  const cc = new providertypes.GrpcWebImpl(host, {
    transport: NodeHttpTransport(),
  })
  const client = new providertypes.APIClientImpl(cc)

  const req: providertypes.ProviderBlockRequest = {
    height: "1",
  };

  try {
    const res = await client.GetBlock(req)
    console.log(res)
  } catch(err) {
    console.log(err)
  }
}

main()
