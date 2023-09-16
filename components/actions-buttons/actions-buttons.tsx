import { FaPencil, FaRegTrashCan, FaRegFilePdf } from 'react-icons/fa6'

import IconButton from '@/components/ui/icon-button'

import styles from './actions-buttons.module.scss'

interface Props {
  onEdit: () => void
  onDelete: () => void
  onExport?: () => void
}

const ActionsButtons = ({ onEdit, onDelete, onExport }: Props) => {
  const handleExport = (e) => {
    e.preventDefault()
    onExport && onExport()
  }
  const handleEdit = (e) => {
    e.preventDefault()
    onEdit && onEdit()
  }
  const handleDelete = (e) => {
    e.preventDefault()
    onDelete && onDelete()
  }
  return (
    <div className={styles.actionsButtons}>
      <IconButton onClick={handleEdit}>
        <FaPencil />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <FaRegTrashCan />
      </IconButton>
      {onExport && (
        <IconButton onClick={handleExport}>
          <FaRegFilePdf />
        </IconButton>
      )}
    </div>
  )
}

export default ActionsButtons
