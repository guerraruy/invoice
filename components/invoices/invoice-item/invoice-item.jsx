import ActionsButtons from '../../actions-buttons'

import styles from './invoice-item.module.scss'

const InvoiceItem = ({ item, onEdit, onDelete }) => {
  return (
    <div className={styles.invoiceItem}>
      <div className={styles.description}>{item.description}</div>
      <div className={styles.amount}>{`$ ${(+item.amount).toLocaleString(
        'en-US',
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }
      )}`}</div>
      <div className={styles.actions}>
        <ActionsButtons onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  )
}

export default InvoiceItem
