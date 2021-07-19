import Image from 'next/image'

type Props = {
  url?: string
  height?: string
}

export const TopVisual: React.FC<Props> = (props: Props) => {
  const height = props.height || '300px'
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: height,
        background: 'rgba(3,3,3,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
      }}
    >
      {props.url ? <Image src={props.url} alt='404 page' layout='fill' /> : <span>Top Visual</span>}
    </div>
  )
}
