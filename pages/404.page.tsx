import styles from '../styles/global.module.scss'
import Link from 'next/link'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { TopVisual } from '../components/TopVisual'

const Page404: React.FC = () => {
  return (
    <Container>
      <>
        <main className={styles.main}>
          <Header />
          <TopVisual url={'/assets/404.jpg'} height={'550px'} />
          <p>ページが見つかりませんでした</p>
          <Link href='/'>
            <a>ホームに戻る</a>
          </Link>
        </main>
      </>
    </Container>
  )
}

export default Page404
