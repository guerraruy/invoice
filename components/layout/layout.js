import styles from './layout.module.scss'
import Header from '../header'

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
