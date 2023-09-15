import { useRouter } from 'next/router'

import InvoiceForm from '../../../components/invoice-form'
import PageHeader from '../../../components/ui/page-header'

import styles from './edit-invoice-page.module.scss'
import { useState } from 'react'

const EditInvoicePage = () => {
  const router = useRouter()
  const [invoiceNumber, setInvoiceNumber] = useState('')

  const { id } = router.query

  const handleGetInvoice = (invoiceNo) => {
    setInvoiceNumber(invoiceNo)
  }

  return (
    <section className={styles.editInvoicePage}>
      <PageHeader>{`Edit Invoice ( #${invoiceNumber} )`}</PageHeader>
      <InvoiceForm id={id} onGetInvoice={handleGetInvoice} />
    </section>
  )
}

export default EditInvoicePage
