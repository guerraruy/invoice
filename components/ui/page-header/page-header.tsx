import styles from './page-header.module.scss'

interface Props {
  children: string
}

const PageHeader: React.FC<Props> = ({ children }): JSX.Element => {
  return <div className={styles.pageHeader}>{children}</div>
}

export default PageHeader
