import InvoiceForm from '../../../components/invoice-form'
import PageHeader from '../../../components/ui/page-header'

import styles from './add-invoice-page.module.scss'

const AddInvoicePage = () => {
  return (
    <section className={styles.addInvoicePage}>
      <PageHeader>New Invoice</PageHeader>
      <InvoiceForm />
    </section>
  )
}

export default AddInvoicePage
