import styles from './checkbox.module.scss'

interface Props {
  label: string
  checked: boolean
  onChange: () => void
}

const Checkbox: React.FC<Props> = ({
  label,
  checked,
  onChange,
}): JSX.Element => {
  return (
    <div className={styles.checkbox}>
      <input type='checkbox' checked={checked} onChange={onChange} />
      <label>{label}</label>
    </div>
  )
}

export default Checkbox
