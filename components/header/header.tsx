import { useState } from 'react'

import Logo from '@/components/ui/logo'
import MenuButton from '@/components/ui/menu-button'
import Navigation from '@/components/navigation/navigation'

import styles from './header.module.scss'

const Header: React.FC = (): React.ReactElement => {
  const [showNavigationMobile, toggleNavigationMobile] = useState(false)

  const toggle = () => {
    toggleNavigationMobile((prev) => !prev)
  }

  return (
    <header className={styles.header}>
      <Logo />
      <Navigation show={showNavigationMobile} toggle={toggle} />
      <MenuButton onClick={toggle} />
    </header>
  )
}

export default Header
