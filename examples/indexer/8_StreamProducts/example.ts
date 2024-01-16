import * as bazaartypes from '../../../chain/flux/indexer/bazaar/query';
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

const main = async () => {
  const host = 'http://localhost:4451';
  const cc = new bazaartypes.GrpcWebImpl(host, {
    transport: NodeHttpTransport(),
  })
  const client = new bazaartypes.APIClientImpl(cc)

  const req: bazaartypes.ProductsRequest = {
    class_id: "series",
    id: "",
    product_id: "",
  };

  try {
    const obs =  client.StreamProducts(req)
    obs.subscribe((res:any) => {
      console.log(res)
    })
  } catch(err) {
    console.log(err)
  }
}

main()
