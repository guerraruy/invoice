import {
  getStatusFromInvoice,
  getTotalAmountFromInvoice,
} from '@/helpers/invoices'
import InvoiceActions from '@/components/invoices/invoice-actions'

import styles from './invoice-row.module.scss'

interface Client {
  _id: string
  name: string
}

interface InvoiceItems {
  description: string
  amount: number
}
interface Props {
  invoice: {
    _id: string
    dueDate: string
    client: Client[]
    invoiceNumber: number
    items: InvoiceItems[]
  }
  onEdit: () => void
  onDelete: () => void
  onExport: () => void
}

const InvoiceRow = ({ invoice, onEdit, onDelete, onExport }: Props) => {
  const dueDate = new Date(invoice.dueDate)
  const due = dueDate.toLocaleDateString()
  const client = invoice.client[0].name
  const amount = getTotalAmountFromInvoice(invoice)
  const status = getStatusFromInvoice(invoice)
  const statusClass = styles[status]

  return (
    <div className={`${styles.invoiceRow} ${statusClass}`}>
      <div className={styles.invoiceNo}>{`# ${invoice.invoiceNumber}`}</div>
      <div className={styles.invoiceDueDate}>{due}</div>
      <div className={styles.invoiceClient}>{client}</div>
      <div className={styles.invoiceAmount}>{amount}</div>
      <div className={styles.invoiceStatus}>{status}</div>
      <div className={styles.invoiceActions}>
        <InvoiceActions
          onEdit={onEdit}
          onDelete={onDelete}
          onExport={onExport}
        />
      </div>
    </div>
  )
}

export default InvoiceRow
