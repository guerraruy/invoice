import { FaPencil, FaRegTrashCan, FaRegFilePdf } from 'react-icons/fa6'

import IconButton from '@/components/ui/icon-button'

import styles from './invoice-actions.module.scss'

interface Props {
  onEdit: () => void
  onDelete: () => void
  onExport: () => void
}

const InvoiceActions = ({ onEdit, onDelete, onExport }: Props) => {
  return (
    <div className={styles.invoiceActions}>
      <IconButton onClick={onEdit}>
        <FaPencil />
      </IconButton>
      <IconButton onClick={onDelete}>
        <FaRegTrashCan />
      </IconButton>
      <IconButton onClick={onExport}>
        <FaRegFilePdf />
      </IconButton>
    </div>
  )
}

export default InvoiceActions
