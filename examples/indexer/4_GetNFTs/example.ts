import * as fnfttypes from '../../../chain/flux/indexer/fnft/query';
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

const main = async () => {
  const host = 'http://localhost:4445';
  const cc = new fnfttypes.GrpcWebImpl(host, {
    transport: NodeHttpTransport(),
  })
  const client = new fnfttypes.APIClientImpl(cc)

  const req: fnfttypes.GetNFTsRequest = {
    class_id: "series",
    id: "",
    owner: "",
  };

  try {
    const res = await client.GetNFTs(req)
    console.log(res)
  } catch(err) {
    console.log(err)
  }
}

main()
