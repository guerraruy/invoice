import { useEffect, useState } from 'react'
import { useGetClientsQuery } from '../../services/clients'
import Select from '../ui/select'
import styles from './invoice-form.module.scss'
import InvoiceItems from '../invoice-items'
import InputDate from '../ui/input-date'

const InvoiceForm = () => {
  const { data, isLoading } = useGetClientsQuery()
  const [options, setOptions] = useState([])
  useEffect(() => {
    if (data) {
      setOptions(data.map((e) => ({ value: e._id, text: e.name })))
    }
  }, [data])

  return (
    <div className={styles.invoiceForm}>
      <form>
        <div className={styles.topContainer}>
          <Select options={options} />
          <div className={styles.spacer} />
          <InputDate label='Due Date' />
        </div>
        <InvoiceItems />
      </form>
    </div>
  )
}

export default InvoiceForm
