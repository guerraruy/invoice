import styles from './select.module.scss'

interface Option {
  value: string | number
  text: string
}

interface Props {
  options: Option[]
}

const Select = ({ options }: Props) => {
  return (
    <div className={styles.select}>
      <label>Client:</label>
      <select name='clients'>
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
