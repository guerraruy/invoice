import styles from './button.module.scss'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode | string
  onClick?: () => void
  className?: string
  round?: boolean
  outlined?: boolean
  type?: string
}

const Button = ({
  children,
  onClick,
  className,
  round,
  outlined,
  ...rest
}: Props) => {
  const roundClass = round ? styles.round : ''
  const outlinedClass = outlined ? styles.outlined : ''
  const btnClass = `${styles.button} ${
    className || ''
  } ${roundClass} ${outlinedClass}`
  return (
    <button className={btnClass} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
