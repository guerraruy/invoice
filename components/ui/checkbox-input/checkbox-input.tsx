import styles from './checkbox-input.module.scss'

interface Props {
  label: string
  checked: boolean
  onChange: () => void
}

const CheckboxInput: React.FC<Props> = ({
  label,
  checked,
  onChange,
}): JSX.Element => {
  return (
    <div className={styles.checkboxInput}>
      <input type='checkbox' checked={checked} onChange={onChange} />
      <label>{label}</label>
    </div>
  )
}

export default CheckboxInput
