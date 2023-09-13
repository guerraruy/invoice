import styles from './input-date.module.scss'

const InputDate = ({ label, value, ...rest }) => {
  return (
    <div className={styles.inputDate}>
      <label>{label}</label>
      <input type='date' {...rest} />
    </div>
  )
}

export default InputDate
