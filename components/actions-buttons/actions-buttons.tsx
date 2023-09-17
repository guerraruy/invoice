import { FC, SyntheticEvent } from 'react'
import { FaPencil, FaRegTrashCan, FaRegFilePdf } from 'react-icons/fa6'

import IconButton from '@/components/ui/icon-button'

import styles from './actions-buttons.module.scss'

interface Props {
  onEdit: (e: SyntheticEvent) => void
  onDelete: (e: SyntheticEvent) => void
  onExport?: (e: SyntheticEvent) => void
}

const ActionsButtons: FC<Props> = ({
  onEdit,
  onDelete,
  onExport,
}): JSX.Element => {
  const handleExport = (e: SyntheticEvent) => {
    e.preventDefault()
    onExport && onExport(e)
  }
  const handleEdit = (e: SyntheticEvent) => {
    e.preventDefault()
    onEdit && onEdit(e)
  }
  const handleDelete = (e: SyntheticEvent) => {
    e.preventDefault()
    onDelete && onDelete(e)
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
