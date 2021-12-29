import { useCallback, useMemo, VFC } from 'react'
import styles from '../styles/pageNation.module.scss'
import { useRouter } from 'next/router'

type Props = {
  totalCount: number
  pageSize: number
}

export const Pagenation: VFC<Props> = (props: Props) => {
  const { totalCount, pageSize } = props

  const range = useMemo(() => {
    const start = 1
    const end = Math.ceil(totalCount / pageSize) + 1
    const pages = [...Array(end - start).keys()].map((e) => start + e)
    return pages
  }, [totalCount, pageSize])

  return (
    <div className={styles.pagenation}>
      {range.map((pageNo) => (
        <PageNationItem key={pageNo} pageNo={pageNo} pageSize={pageSize} />
      ))}
    </div>
  )
}

type ItemProps = {
  pageNo: number
  pageSize: number
}

const PageNationItem: VFC<ItemProps> = (props: ItemProps) => {
  const { pageNo, pageSize } = props
  const router = useRouter()

  const onPaging = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault()
      router.push({
        pathname: '/',
        query: { offset: pageNo - 1, limit: pageSize },
      })
    },
    [router, pageNo, pageSize]
  )

  return (
    <a href='#' onClick={onPaging} className={styles.pagenatiom_item} key={pageNo}>
      {pageNo}
    </a>
  )
}
