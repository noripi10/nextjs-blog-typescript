import Image from 'next/image'

type Props = {
  url?: string
  height?: string
}

export const TopVisual: React.FC<Props> = (props: Props) => {
  const { url = '/assets/main.jpg' } = props
  const height = props.height || 400
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        position: 'relative',
        width: '100%',
        height: height,
        background: 'rgba(3,3,3,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
      }}
    >
      <Image src={url} alt='top-image' layout='fill' objectFit='cover' quality={100} />
    </div>
  )
}
