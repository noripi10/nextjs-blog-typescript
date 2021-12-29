import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps } from 'next'
import { client } from '../libs/client'
import { BlogType, ResponseBlogDataType } from '../types/blogType'

// export const getStaticProps = async () => {
//   const data = await client.get<ResponseBlogDataType>({ endpoint: 'techblog' })

//   // 作成日でソート
//   const blogs = data.contents.sort((a: BlogType, b: BlogType) => {
//     const aDate = new Date(a.createdAt)
//     const bDate = new Date(b.createdAt)
//     if (aDate > bDate) {
//       return 1
//     } else if (aDate < bDate) {
//       return -1
//     } else {
//       return 0
//     }
//   })

//   return {
//     props: {
//       blogs,
//     },
//   }
// }

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  let offset = context.query?.offset ?? '0'
  let limit = context.query?.limit ?? '4'
  if (offset instanceof Array) {
    offset = offset[0]
  }
  if (limit instanceof Array) {
    limit = limit[0]
  }

  const data = await client.get<ResponseBlogDataType>({
    endpoint: 'techblog',
    queries: {
      offset: !!offset ? parseInt(offset) : 0,
      limit: parseInt(limit),
      orders: 'createdAt',
    },
  })
  const blogs = data.contents

  return {
    props: {
      blogs,
      totalBlogCount: data.totalCount,
    },
  }
}
