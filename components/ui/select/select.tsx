import styles from './select.module.scss'

interface Option {
  value: string | number
  text: string
}

interface Props {
  options: Option[]
  value: string | number
  onChange: (id: string) => void
}

const Select = ({ options, value, onChange }: Props) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className={styles.select}>
      <label>Client:</label>
      <select name='clients' value={value} onChange={handleChange}>
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
