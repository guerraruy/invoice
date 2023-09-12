import { useRouter } from 'next/router'
import PageHeader from '../../components/ui/page-header'
import styles from './invoices.module.scss'

const Invoices = () => {
  const router = useRouter()

  const handleAddInvoice = () => {
    router.push('/invoices/new')
  }

  return (
    <section className={styles.invoices}>
      <button className={styles.addButton} onClick={handleAddInvoice}>
        ADD
      </button>
      <PageHeader>Dasboard</PageHeader>
    </section>
  )
}

export default Invoices
