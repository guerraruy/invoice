import { useRouter } from 'next/router'
import PageHeader from '../../components/ui/page-header'
import styles from './invoices.module.scss'
import Button from '../../components/ui/button'
import { FaPlus } from 'react-icons/fa'

const Invoices = () => {
  const router = useRouter()

  const handleAddInvoice = () => {
    router.push('/invoices/new')
  }

  return (
    <section className={styles.invoices}>
      <Button className={styles.addButton} onClick={handleAddInvoice} round>
        <FaPlus />
      </Button>
      <PageHeader>Dasboard</PageHeader>
    </section>
  )
}

export default Invoices
