import styles from './input.module.scss'

interface Props {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  autoFocus?: boolean
}

const Input: React.FC<Props> = ({
  label,
  name,
  value,
  onChange,
  autoFocus,
  type,
}): JSX.Element => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        type={type}
      />
    </div>
  )
}

export default Input
