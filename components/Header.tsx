import styles from '../styles/header.module.scss'
import Link from 'next/link'
import { ThemeButton } from './ThemeButton'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_title}>
        <Link href='/'>
          <a>気ままにプログラミングのことを書こうと思うBlog</a>
        </Link>
      </div>
      <div className={styles.header_setting}>
        <ThemeButton />
      </div>
    </div>
  )
}
