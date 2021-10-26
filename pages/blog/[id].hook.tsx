import { GetStaticPaths, GetStaticPropsContext } from 'next'
// import { ParsedUrlQuery } from 'node:querystring'

import { client } from '../../libs/client'
import { BlogType, ResponseBlogDataType } from '../../types/blogType'

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<ResponseBlogDataType>({ endpoint: 'techblog' })

  const paths = data.contents.map((content) => `/blog/${content.id}`)

  // pathsに関しては下記のように記述する仕方の方がgetStaticPropsのparamsと一緒の形なので見通しは良い
  // const paths = data.contents.map((content) => {
  //   return { params: { id: content.id } }
  // })

  return { paths, fallback: false }
}

type Params = {
  id: string
}

export const getStaticProps = async (context: GetStaticPropsContext<Params>) => {
  const data = await client.get<BlogType>({
    endpoint: 'techblog',
    contentId: context.params?.id,
  })

  return {
    props: {
      blog: data,
    },
  }
}
