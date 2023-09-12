import styles from './icon-button.module.scss'

interface Props {
  children: JSX.Element
  onClick: () => void
}

const IconButton = ({ children, onClick, ...rest }: Props) => (
  <button className={styles.iconButton} onClick={onClick} {...rest}>
    {children}
  </button>
)

export default IconButton
