import {
  getStatusFromInvoice,
  getTotalAmountFromInvoice,
} from '../../../helpers/invoices'

import styles from './invoice-row.module.scss'

const InvoiceRow = ({ invoice }) => {
  const dueDate = new Date(invoice.dueDate)
  console.log('dueDate', dueDate.getTime())
  const due = dueDate.toLocaleDateString()
  const client = invoice.client[0].name
  const amount = getTotalAmountFromInvoice(invoice)
  const status = getStatusFromInvoice(invoice)
  const statusClass = styles[status]
  console.log('statusClass', statusClass)

  return (
    <div className={`${styles.invoiceRow} ${statusClass}`}>
      <div className={styles.invoiceNo}>{`# ${invoice.invoiceNumber}`}</div>
      <div className={styles.invoiceDueDate}>{due}</div>
      <div className={styles.invoiceClient}>{client}</div>
      <div className={styles.invoiceAmount}>{amount}</div>
      <div className={styles.invoiceStatus}>{status}</div>
      <div className={styles.actions}></div>
    </div>
  )
}

export default InvoiceRow
