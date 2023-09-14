import { useState } from 'react'
import styles from './checkbox.module.scss'

const Checkbox = ({ label, checked, onChange, ...rest }) => {
  // const [isChecked, setIsChecked] = useState(false)
  const handleChange = (e) => {
    console.log('---CHANGE', e.target.checked, e.target.value)
    e.preventDefault()
    // onChange(e.target.checked)
    // console.log('2-paid', e.target.checked)
    // setChecked(!e.target.checked)
    // onChange(e.target)
  }

  return (
    <div className={styles.checkbox}>
      {/* <input type='checkbox' checked={checked} onChange={handleChange} /> */}
      {/* <input type='checkbox' checked={checked} onChange={handleChange} /> */}
      {/* <input
        type='checkbox'
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      /> */}
      <input
        type='checkbox'
        checked={checked}
        // onChange={() => setIsChecked((prev) => !prev)}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  )
}

export default Checkbox
