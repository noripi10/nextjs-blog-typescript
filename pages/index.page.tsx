import styles from '../styles/global.module.scss'
import blogStyles from '../styles/blog.module.scss'
import { Container } from '../components/Container'
import { BlogCard } from '../components/BlogCard'
import { TopVisual } from '../components/TopVisual'
import { Header } from '../components/Header'

import { getServerSideProps } from './index.hook'
import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import { Pagenation } from '../components/PageNation'

// type Props = InferGetStaticPropsType<typeof getStaticProps>
type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Home: React.FC<Props> = (props) => {
  const { blogs, totalBlogCount } = props
  return (
    <Container>
      <>
        <main className={styles.main}>
          <Header />
          <TopVisual />
          <div className={styles.subMain}>
            <div className={blogStyles.blogList}>
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
          <Pagenation totalCount={totalBlogCount} pageSize={2} />
        </main>
      </>
    </Container>
  )
}

export { getServerSideProps }
export default Home
