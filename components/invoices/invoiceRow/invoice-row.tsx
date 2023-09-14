import styles from './invoice-row.module.scss'

const InvoiceRow = ({ invoice }) => {
  return (
    <div className={styles.invoiceRow}>
      <div className={styles.invoiceNo}>Invoice #{invoice.invoiceNumber}</div>
    </div>
  )
}

export default InvoiceRow
