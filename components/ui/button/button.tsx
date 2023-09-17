import styles from './button.module.scss'

interface Props {
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  className?: string
  round?: boolean
  outlined?: boolean
  disabled?: boolean
  type?: string
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  round,
  outlined,
  disabled,
  ...rest
}): JSX.Element => {
  const roundClass = round ? styles.round : ''
  const outlinedClass = outlined ? styles.outlined : ''
  const btnClass = `${styles.button} ${
    className || ''
  } ${roundClass} ${outlinedClass}`
  return (
    <button className={btnClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
