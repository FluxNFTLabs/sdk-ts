import * as fnfttypes from '../../../chain/flux/indexer/fnft/query'
import { IndexerGrpcFnftQuery } from '../../../packages'
const main = async () => {
  const host = 'http://localhost:4448'
  const client = new IndexerGrpcFnftQuery(host)

  const req: fnfttypes.NFTsRequest = {
    class_id: 'series',
    id: '',
    owner: '',
    status: ''
  }

  try {
    const res = await client.getNFTs(req)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

main()
