import { useState } from 'react'

import styles from './header.module.scss'
import Logo from '../ui/logo'
import MenuButton from '../ui/menu-button'
import Navigation from '../navigation/navigation'

const Header = () => {
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
