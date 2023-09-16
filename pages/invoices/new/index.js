import InvoiceForm from '@/components/invoices/invoice-form'
import PageHeader from '@/components/ui/page-header'
import useAuthenticated from '@/hooks/useAuthenticated'

import styles from './add-invoice-page.module.scss'

const AddInvoicePage = () => {
  useAuthenticated()

  return (
    <section className={styles.addInvoicePage}>
      <PageHeader>New Invoice</PageHeader>
      <InvoiceForm />
    </section>
  )
}

export default AddInvoicePage
