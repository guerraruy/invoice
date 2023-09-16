import { useRouter } from 'next/router'
import { useState } from 'react'

import InvoiceForm from '@/components/invoices/invoice-form'
import PageHeader from '@/components/ui/page-header'
import useAuthenticated from '@/hooks/useAuthenticated'

import styles from './edit-invoice-page.module.scss'

const EditInvoicePage = () => {
  useAuthenticated()
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
