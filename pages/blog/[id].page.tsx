import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/global.module.scss'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'

import { getStaticPaths, getStaticProps } from './[id].hook'
import { InferGetServerSidePropsType } from 'next'

type Props = InferGetServerSidePropsType<typeof getStaticProps>

const BlogId: React.FC<Props> = ({ blog }) => {
  const router = useRouter()

  return (
    <Container title={blog.title}>
      <Header />
      {blog.mainVisual.url && (
        <Image src={blog.mainVisual.url} alt='main blog image' objectFit='cover' width={1024} height={160} />
      )}
      <main className={styles.main}>
        <div className={styles.contents}>
          <h1>{blog.title}</h1>
          <p>{blog.category.name}</p>
          <p>{blog.publishedAt}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
          />
        </div>
        <button className={styles.button} onClick={() => router.push('/')}>
          戻る
        </button>
      </main>
    </Container>
  )
}

export { getStaticPaths, getStaticProps }
export default BlogId
