import * as fnfttypes from '../../../chain/flux/stream/v1beta1/query';
import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

const main = async () => {
  const host = 'http://localhost:9091';
  const cc = new fnfttypes.GrpcWebImpl(host, {
    transport: NodeHttpTransport(),
  })
  const client = new fnfttypes.QueryClientImpl(cc)

  const req: fnfttypes.QueryNFTRequest = {
    classId: "series",
    id: "0",
  };

  try {
    const res = await client.NFT(req)
    console.log(res)
  } catch(err) {
    console.log(err)
  }
}

main()
