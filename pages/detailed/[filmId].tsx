import { useRouter } from 'next/router'
import { Typography } from 'antd'

export default function Home() {
  const router = useRouter()
  const { filmId } = router.query
  return (
    <div >
        <Typography> Detailed Page for film { filmId } </Typography>
    </div>
  )
}
