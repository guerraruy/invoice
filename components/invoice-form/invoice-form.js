import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useGetClientsQuery } from '../../services/clients'
import Select from '../ui/select'
import InvoiceItems from '../invoice-items'
import InputDate from '../ui/input-date'
import Button from '../ui/button'

import styles from './invoice-form.module.scss'
import { useRouter } from 'next/router'
import { useAddInvoiceMutation } from '../../services/invoices'

const InvoiceForm = () => {
  const { data, isLoading } = useGetClientsQuery() // populates client dropdown
  const [options, setOptions] = useState([])
  const [clientId, setClientId] = useState('')
  const [dueDate, setDueDate] = useState('')
  const { items } = useSelector((state) => state.invoiceItems)
  const router = useRouter()
  const [addInvoice] = useAddInvoiceMutation()
  useEffect(() => {
    if (data) {
      setOptions(data.map((e) => ({ value: e._id, text: e.name })))
    }
  }, [data])

  const handleClientChange = (id) => {
    setClientId(id)
  }

  const handleDueDateChange = (value) => {
    setDueDate(value)
    console.log('DATE', value)
  }

  const handleCancel = () => {
    router.push('/invoices')
  }

  const handleSave = async (e) => {
    e.preventDefault()
    const invoice = {
      dueDate,
      clientId,
      items,
    }
    console.log('NEW INVOICE', invoice)
    const result = await addInvoice(invoice)
    console.log('result', result)
    router.push('/invoices')
  }

  return (
    <div className={styles.invoiceForm}>
      <form>
        <div className={styles.topContainer}>
          <Select
            options={options}
            value={clientId}
            onChange={handleClientChange}
          />
          <div className={styles.spacer} />
          <InputDate
            label='Due Date'
            onChange={handleDueDateChange}
            value={dueDate}
          />
        </div>
        <InvoiceItems />
        <div className={styles.buttonsContainer}>
          <Button type='button' onClick={handleCancel} outlined>
            Cancel
          </Button>
          <Button onClick={handleSave}>Create Invoice</Button>
        </div>
      </form>
    </div>
  )
}

export default InvoiceForm
