import * as fnfttypes from '../../../chain/flux/indexer/fnft/query'
import { IndexerStreamFnft } from '../../../packages/client/indexer/stream/IndexerStreamFnft'
const main = async () => {
  const host = 'http://localhost:4448'
  const client = new IndexerStreamFnft(host)
  const req: fnfttypes.HoldersRequest = {
    class_id: 'series',
    id: '',
    address: ''
  }

  try {
    client.getStreamHolders({
      request: req,
      callback: (res: any) => {
        console.log(res)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

main()
