import * as providertypes from '../../../chain/flux/indexer/provider/query'
import { IndexerGrpcProviderQuery } from '../../../packages'
const main = async () => {
  const host = 'http://localhost:4445'

  const client = new IndexerGrpcProviderQuery(host)

  const req: providertypes.ProviderEventsRequest = {
    height: '19173',
    modules: ['fnft', 'auction']
  }

  try {
    const res = await client.getEvents(req)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

main()
