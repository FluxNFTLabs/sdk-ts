import * as providertypes from '../../../chain/flux/indexer/provider/query'
import { IndexerStreamProvider } from '../../../packages'
const main = async () => {
  const host = 'http://localhost:4445'
  const client = new IndexerStreamProvider(host)

  const req: providertypes.ProviderBlockRequest = {
    height: '1'
  }

  try {
    client.getStreamBlock({
      request: req,
      callback: (res: any) => {
        console.log(res.height)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

main()
