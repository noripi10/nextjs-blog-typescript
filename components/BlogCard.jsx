import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/blog.module.scss'

export const BlogCard = ({ blog }) => {
  return (
    <Link href={`/blog/${blog?.id}`}>
      <a>
        <div className={styles.blogCard}>
          <Image src={blog.mainVisual.url} alt='main blog image' objectFit='cover' width={400} height={200} />
          <div className={styles.blogInfo}>
            <div>{blog.title}</div>
            <div>作成日:{blog.createdAt}</div>
          </div>
        </div>
      </a>
    </Link>
  )
}
