import styles from './input-date.module.scss'

interface Props {
  label?: string
  value: string
  onChange: (e: string) => void
}

const InputDate: React.FC<Props> = ({
  label,
  value,
  onChange,
  ...rest
}): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className={styles.inputDate}>
      {label && <label>{label}</label>}
      <input type='date' value={value} onChange={handleChange} {...rest} />
    </div>
  )
}

export default InputDate
