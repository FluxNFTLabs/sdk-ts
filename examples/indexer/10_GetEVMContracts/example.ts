import { IndexerGrpcExplorerQuery } from '../../../packages'
const main = async () => {
  const host = 'http://localhost:4463'
  const client = new IndexerGrpcExplorerQuery(host)
  try {
    const res = await client.listEvmContracts({})
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

main()
