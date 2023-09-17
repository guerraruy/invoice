import { FaRegTrashCan } from 'react-icons/fa6'
import { FaPencil } from 'react-icons/fa6'

import IconButton from '@/components/ui/icon-button'

import styles from './client-row.module.scss'

interface Props {
  name: string
  onEdit: () => void
  onDelete: () => void
}

const ClientRow: React.FC<Props> = ({
  name,
  onEdit,
  onDelete,
}): JSX.Element => {
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
