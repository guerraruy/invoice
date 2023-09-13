import styles from './invoice-item.module.scss'

const InvoiceItem = ({ item }) => {
  return (
    <div className={styles.invoiceItem}>
      <div className={styles.description}>{item.description}</div>
      <div className={styles.amount}>{item.amount}</div>
    </div>
  )
}

export default InvoiceItem
