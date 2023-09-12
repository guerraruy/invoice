import styles from './client-row.module.scss'
import { FaRegTrashCan } from 'react-icons/fa6'
import { FaPencil } from 'react-icons/fa6'
import IconButton from '../ui/icon-button'

interface Props {
  name: string
  onEdit: () => void
  onDelete: () => void
}

const ClientRow = ({ name, onEdit, onDelete }: Props) => {
  return (
    <div className={styles.clientRow}>
      <div className={styles.name}>{name}</div>
      <div className={styles.iconsContainer}>
        <IconButton onClick={onEdit}>
          <FaPencil />
        </IconButton>
        <IconButton onClick={onDelete}>
          <FaRegTrashCan />
        </IconButton>
      </div>
    </div>
  )
}

export default ClientRow
