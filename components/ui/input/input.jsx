import styles from './input.module.scss'

const Input = ({ label, name, ...other }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...other} />
    </div>
  )
}

export default Input
