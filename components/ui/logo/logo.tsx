import { useRouter } from 'next/router'
import Image from 'next/image'

import styles from './logo.module.scss'

const Logo = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <div className={styles.logo} onClick={handleClick}>
      <Image src='/logo.png' alt='EZINVOICE LOGO' width={155} height={36} />
    </div>
  )
}

export default Logo
