import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/blog.module.scss'

export const BlogCard = ({ blog }) => {
  return (
    <Link href={`/blog/${blog?.id}`}>
      <a>
        <div className={styles.blogCard}>
          <Image
            className={styles.blogImage}
            src={blog.mainVisual.url}
            alt='main blog image'
            objectFit='cover'
            width={1000}
            height={500}
          />
          <div className={styles.blogInfo}>
            <div>{blog.title}</div>
            <div>作成日:{blog.createdAt}</div>
          </div>
        </div>
      </a>
    </Link>
  )
}
