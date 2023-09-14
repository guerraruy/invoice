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
      {invoices.map((invoice) => {
        return <InvoiceRow key={invoice._id} invoice={invoice} />
      })}
    </div>
  )
}

export default InvoicesList
