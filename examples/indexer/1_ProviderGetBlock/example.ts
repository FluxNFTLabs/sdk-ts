import { IndexerGrpcProviderQuery } from '../../../packages'
const main = async () => {
  const host = 'http://localhost:4445'
  const client = new IndexerGrpcProviderQuery(host)
  const height = '19173'
  try {
    const res = await client.getBlock(height)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

main()
