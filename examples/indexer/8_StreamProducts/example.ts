import * as bazaartypes from '../../../chain/flux/indexer/bazaar/query'
import { IndexerStreamBazaar } from '../../../packages'
const main = async () => {
  const host = 'http://localhost:4451'
  const client = new IndexerStreamBazaar(host)

  const req: bazaartypes.ProductsRequest = {
    class_id: 'series',
    id: '',
    product_id: ''
  }

  try {
    client.getStreamProducts({
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
