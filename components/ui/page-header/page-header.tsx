import styles from './page-header.module.scss'

interface Props {
  children: string
}

const PageHeader = ({ children }: Props) => {
  return <div className={styles.pageHeader}>{children}</div>
}

export default PageHeader
