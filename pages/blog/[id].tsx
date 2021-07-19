import React from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/global.module.scss'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { client } from '../../libs/client'
import { BlogType, ResponseBlogDataType } from '../../types/blogType'

type Props = {
  blog: BlogType
}

const BlogId: React.FC<Props> = ({ blog }) => {
  const router = useRouter()

  return (
    <Container title={blog.title}>
      <main className={styles.main}>
        <Header />
        {blog.mainVisual.url && (
          <Image src={blog.mainVisual.url} alt='main blog image' objectFit='cover' width={650} height={450} />
        )}
        <h1>{blog.title}</h1>
        <p>{blog.category.name}</p>
        <p>{blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
        <button onClick={() => router.push('/')}>戻る</button>
      </main>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<ResponseBlogDataType>({ endpoint: 'techblog' })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  const data = await client.get({
    endpoint: 'techblog',
    contentId: context.params.id,
  })

  return {
    props: {
      blog: data,
    },
  }
}

export default BlogId
