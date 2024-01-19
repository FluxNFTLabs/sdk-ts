import { IndexerGrpcFnftQuery } from '../../../packages'
const main = async () => {
  const host = 'http://localhost:4448'
  const client = new IndexerGrpcFnftQuery(host)
  try {
    const res = await client.getClasses()
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

main()
