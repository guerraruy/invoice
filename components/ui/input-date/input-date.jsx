import styles from './input-date.module.scss'

const InputDate = ({ label, value, onChange, ...rest }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className={styles.inputDate}>
      <label>{label}</label>
      <input type='date' value={value} onChange={handleChange} {...rest} />
    </div>
  )
}

export default InputDate
