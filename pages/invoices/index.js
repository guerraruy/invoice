import { FaPlus } from 'react-icons/fa'
import { useRouter } from 'next/router'

import PageHeader from '../../components/ui/page-header'
import Button from '../../components/ui/button'
import InvoicesList from '../../components/invoices/invoicesList'
import useAuthenticated from '../../hooks/useAuthenticated'

import styles from './invoices.module.scss'

const Invoices = () => {
  const router = useRouter()
  useAuthenticated()

  const handleAddInvoice = () => {
    router.push('/invoices/new')
  }

  return (
    <section className={styles.invoices}>
      <Button className={styles.addButton} onClick={handleAddInvoice} round>
        <FaPlus />
      </Button>
      <PageHeader>Invoices</PageHeader>
      <InvoicesList />
    </section>
  )
}

export default Invoices
