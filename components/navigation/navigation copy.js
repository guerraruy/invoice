import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { isAuthenticate } from '../../helpers/auth'

import styles from './navigation.module.scss'

function Navigation({ show, toggle }) {
  const { data: session, status } = useSession()

  const logoutHandler = () => {
    signOut()
  }

  // className={`Navigation ${show ? 'show' : 'hide'}`}

  return (
    <nav className={`${styles.navigation} ${show ? 'show' : 'hide'}`}>
      <ul>
        {!isAuthenticate(status) && (
          <li>
            <Link href='/auth'>Login</Link>
          </li>
        )}
        {isAuthenticate(status) && (
          <li>
            <Link href='/profile'>Profile</Link>
          </li>
        )}
        <li>
          <Link href='/invoices'>Dashboard</Link>
        </li>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
        {isAuthenticate(status) && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation
