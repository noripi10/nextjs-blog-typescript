import { client } from '../libs/client'
import { BlogType, ResponseBlogDataType } from '../types/blogType'

export const getStaticProps = async () => {
  const data = await client.get<ResponseBlogDataType>({ endpoint: 'techblog' })

  // 作成日でバブルソート
  const blogs = data.contents.sort((a: BlogType, b: BlogType) => {
    const aDate = new Date(a.createdAt)
    const bDate = new Date(b.createdAt)
    if (aDate > bDate) {
      return 1
    } else if (aDate < bDate) {
      return -1
    } else {
      return 0
    }
  })

  return {
    props: {
      blogs,
    },
  }
}
