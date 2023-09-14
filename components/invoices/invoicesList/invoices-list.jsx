import styles from './invoices-list.module.scss'
import { useGetAllInvoicesQuery } from '../../../services/invoices'
import InvoiceRow from '../invoiceRow'
import Spinner from '../../ui/spinner'

const InvoicesList = () => {
  const { data: invoices, isLoading } = useGetAllInvoicesQuery()
  console.log('invoices', invoices)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className={styles.invoicesList}>
      <div className={styles.header}>
        <div className={styles.headerInvoiceNo}>No.</div>
        <div className={styles.headerDueDate}>Due</div>
        <div className={styles.headerClient}>Client</div>
        <div className={styles.headerAmount}>Amount</div>
        <div className={styles.headerStatus}>Status</div>
      </div>
      <div className={styles.listContainer}>
        {invoices.map((invoice) => {
          return <InvoiceRow key={invoice._id} invoice={invoice} />
        })}
      </div>
    </div>
  )
}

export default InvoicesList
