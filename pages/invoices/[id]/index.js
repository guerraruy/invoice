import { useRouter } from 'next/router'

import InvoiceForm from '../../../components/invoice-form'
import PageHeader from '../../../components/ui/page-header'

import styles from './edit-invoice-page.module.scss'

const EditInvoicePage = () => {
  const router = useRouter()

  const { id } = router.query

  return (
    <section className={styles.editInvoicePage}>
      <PageHeader>Edit Invoice</PageHeader>
      <InvoiceForm id={id} />
    </section>
  )
}

export default EditInvoicePage
