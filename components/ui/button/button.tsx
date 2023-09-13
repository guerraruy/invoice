import styles from './button.module.scss'

interface Props {
  children: string
  onClick?: () => void
  className?: string
}

const Button = ({ children, onClick, className, ...rest }: Props) => {
  const btnClass = `${styles.button} ${className ? className : ''}`
  return (
    <button className={btnClass} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
