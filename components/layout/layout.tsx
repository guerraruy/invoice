import Header from '../header'

import styles from './layout.module.scss'

interface Props {
  children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
