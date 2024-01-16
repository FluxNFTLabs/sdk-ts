import * as fnfttypes from '../../../chain/flux/indexer/fnft/query';
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

const main = async () => {
  const host = 'http://localhost:4448';
  const cc = new fnfttypes.GrpcWebImpl(host, {
    transport: NodeHttpTransport(),
  })
  const client = new fnfttypes.APIClientImpl(cc)

  const req: fnfttypes.NFTsRequest = {
    class_id: "series",
    id: "",
    owner: "",
    status: "",
  };

  try {
    const obs =  client.StreamNFTs(req)
    obs.subscribe((res:any) => {
      console.log(res)
    })
  } catch(err) {
    console.log(err)
  }
}

main()
