import styles from './button.module.scss'

interface Props {
  children: string
  onClick?: () => void
}

const Button = ({ children, onClick, ...rest }: Props) => {
  return (
    <button className={styles.button} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
