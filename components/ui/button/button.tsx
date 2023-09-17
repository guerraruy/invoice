import styles from './button.module.scss'

interface Props {
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  className?: string
  round?: boolean
  outlined?: boolean
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset' | undefined
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  round,
  outlined,
  disabled,
  type = 'submit',
}): JSX.Element => {
  const roundClass = round ? styles.round : ''
  const outlinedClass = outlined ? styles.outlined : ''
  const btnClass = `${styles.button} ${
    className || ''
  } ${roundClass} ${outlinedClass}`

  return (
    <button
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
