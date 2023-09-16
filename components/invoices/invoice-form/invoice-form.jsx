import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { setInvoiceItems } from '@/redux/invoiceItemsSlice'
import { useGetClientsQuery } from '@/services/clients'
import Select from '@/components/ui/select'
import InvoiceItems from '@/components/invoices/invoice-items'
import InputDate from '@/components/ui/input-date'
import Button from '@/components/ui/button'
import {
  useAddInvoiceMutation,
  useGetInvoiceQuery,
  useUpdateInvoiceMutation,
} from '@/services/invoices'
import Checkbox from '@/components/ui/checkbox'
import Spinner from '@/components/ui/spinner'

import styles from './invoice-form.module.scss'

// interface Props {
//   id?: string
//   onGetInvoice?: (invoiceNo: number) => void
// }

const InvoiceForm = ({ id, onGetInvoice }) => {
  const { data: clients, isLoading: isLoadingClients } = useGetClientsQuery() // populates client dropdown
  const { data: invoice, isLoading: isLoadingInvoices } = useGetInvoiceQuery(
    id,
    { skip: !id }
  )
  const [updateInvoice] = useUpdateInvoiceMutation()
  const [options, setOptions] = useState([])
  const [clientId, setClientId] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [paid, setPaid] = useState(false)
  const { items } = useSelector((state) => state.invoiceItems)
  const router = useRouter()
  const [addInvoice] = useAddInvoiceMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setInvoiceItems([]))
  }, [dispatch])

  useEffect(() => {
    if (clients) {
      setOptions(clients.map((e) => ({ value: e._id, text: e.name })))
    }
  }, [clients])

  useEffect(() => {
    if (invoice) {
      onGetInvoice && onGetInvoice(invoice.invoiceNumber)
      setDueDate(invoice.dueDate)
      setPaid(invoice.paid)
      setClientId(invoice.clientId)
      dispatch(setInvoiceItems(invoice.items))
    }
  }, [invoice, dispatch, onGetInvoice])

  const handleClientChange = (id) => {
    setClientId(id)
  }

  const handleDueDateChange = (value) => {
    setDueDate(value)
  }

  const handlePaidChange = () => {
    setPaid((prev) => !prev)
  }

  const handleCancel = () => {
    router.push('/invoices')
  }

  const handleSave = async (e) => {
    e.preventDefault()
    const data = {
      dueDate,
      clientId,
      paid,
      items,
      invoiceNumber: invoice.invoiceNumber,
    }
    // console.log('NEW INVOICE', invoice)
    // const result = await addInvoice(invoice)
    // console.log('result', result)
    // router.push('/invoices')

    // const data = {
    //   name,
    // }

    if (id) {
      const result = await updateInvoice({ data, _id: id })
    } else {
      const result = await addInvoice(data)
    }
    router.push('/invoices')
  }

  const buttonText = id ? 'Save' : 'Create Invoice'

  if (isLoadingClients || isLoadingInvoices) {
    return <Spinner />
  }

  return (
    <div className={styles.invoiceForm}>
      <form>
        <div className={styles.topContainer}>
          {/* <label>{`Invoice # ${invoice?.invoiceNumber}`}</label> */}
          <div className={styles.control}>
            <label>Client</label>
            <Select
              options={options}
              value={clientId}
              onChange={handleClientChange}
            />
          </div>
          <div className={styles.control}>
            <label>Due Date</label>
            <InputDate onChange={handleDueDateChange} value={dueDate} />
          </div>

          {/* <div className={styles.spacer} /> */}
          <div className={styles.rightBlock}>
            <Checkbox checked={paid} onChange={handlePaidChange} label='Paid' />
          </div>
        </div>
        <InvoiceItems />
        <div className={styles.buttonsContainer}>
          <Button type='button' onClick={handleCancel} outlined>
            Cancel
          </Button>
          <Button onClick={handleSave}>{buttonText}</Button>
        </div>
      </form>
    </div>
  )
}

export default InvoiceForm
