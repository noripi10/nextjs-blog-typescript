import styles from '../styles/global.module.scss'
import blogStyles from '../styles/blog.module.scss'
import { Container } from '../components/Container'
import { client } from '../libs/client'
import { BlogCard } from '../components/BlogCard'
import { TopVisual } from '../components/TopVisual'
import { Header } from '../components/Header'

export default function Home(props) {
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

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'techblog' })

  // 作成日でバブルソート
  const blogs = data.contents.sort((a, b) => {
    const aDate = new Date(a.createdAt)
    const bDate = new Date(b.createdAt)
    if (aDate > bDate) {
      return 1
    } else if (aDate < bDate) {
      return -1
    } else if (aDate === bDate) {
      return 0
    }
  })

  return {
    props: {
      blogs,
    },
  }
}
