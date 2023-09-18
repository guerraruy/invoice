import { getTotalAmountFromInvoice } from '@/helpers/invoices'
import ActionsButtons from '@/components/actions-buttons'
import { Invoice } from '@/interfaces'

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
  invoice: Invoice
  onEdit: () => void
  onDelete: () => void
  onExport: () => void
}

const InvoiceRow: React.FC<Props> = ({
  invoice,
  onEdit,
  onDelete,
  onExport,
}: Props) => {
  const dueDate = new Date(invoice.dueDate)
  const due = dueDate.toLocaleDateString()
  const client = invoice.client?.name || ''
  const amount = getTotalAmountFromInvoice(invoice)
  const statusClass = styles[invoice.status]

  return (
    <div className={`${styles.invoiceRow} ${statusClass}`}>
      <div className={styles.invoiceNo}>
        <div className={styles.label}>Invoice:</div>
        {` # ${invoice.invoiceNumber}`}
      </div>
      <div className={styles.invoiceDueDate}>
        <div className={styles.label}>Due:</div>
        {due}
      </div>
      <div className={styles.invoiceClient}>
        <div className={styles.label}>Client:</div>
        {client}
      </div>
      <div className={styles.invoiceAmount}>
        <div className={styles.label}>Amount:</div>
        {`$ ${(+amount).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}
      </div>
      <div className={styles.invoiceStatus}>
        <div className={styles.label}>Status:</div>
        <span className={`${styles.statusText} ${statusClass}`}>
          {invoice.status}
        </span>
      </div>
      <div className={styles.invoiceActions}>
        <ActionsButtons
          onEdit={onEdit}
          onDelete={onDelete}
          onExport={onExport}
        />
      </div>
    </div>
  )
}

export default InvoiceRow
