import styles from './select.module.scss'

interface Option {
  value: string | number
  text: string
}

interface Props {
  label?: string
  options: Option[]
  value: string | number
  onChange: (id: string) => void
}

const Select: React.FC<Props> = ({
  label,
  options,
  value,
  onChange,
}): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className={styles.select}>
      {label && <label>{label}</label>}
      <select value={value} onChange={handleChange}>
        {options.map((e) => (
          <option key={e.value} value={e.value}>
            {e.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
