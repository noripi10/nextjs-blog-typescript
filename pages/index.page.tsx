import { GetStaticProps } from 'next'
import styles from '../styles/global.module.scss'
import blogStyles from '../styles/blog.module.scss'
import { Container } from '../components/Container'
import { BlogCard } from '../components/BlogCard'
import { TopVisual } from '../components/TopVisual'
import { Header } from '../components/Header'

import { getStaticProps } from './index.hook'
import { InferGetStaticPropsType } from 'next'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: React.FC<Props> = (props) => {
  const { blogs } = props
  return (
    <Container>
      <>
        <main className={styles.main}>
          <Header />
          <TopVisual />
          <div className={blogStyles.blogList}>
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </main>
      </>
    </Container>
  )
}

export { getStaticProps }
export default Home
