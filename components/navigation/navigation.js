import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { isAuthenticate } from '../../helpers/auth'

import styles from './navigation.module.scss'

function Navigation({ show, toggle }) {
  const { data: session, status } = useSession()

  const logoutHandler = () => {
    signOut()
  }

  const navClass = `${styles.navigation} ${show ? styles.show : styles.hide}`
  return (
    <nav className={navClass} onClick={toggle}>
      {!isAuthenticate(status) && <Link href='/auth'>Login</Link>}
      {isAuthenticate(status) && <Link href='/invoices'>Dashboard</Link>}
      {isAuthenticate(status) && <Link href='/clients'>Clients</Link>}
      {isAuthenticate(status) && (
        <button onClick={logoutHandler}>Logout</button>
      )}
    </nav>
  )
}

export default Navigation
