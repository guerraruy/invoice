import { FaPencil, FaRegTrashCan, FaRegFilePdf } from 'react-icons/fa6'

import IconButton from '@/components/ui/icon-button'

import styles from './actions-buttons.module.scss'

interface Props {
  onEdit: () => void
  onDelete: () => void
  onExport: () => void
}

const ActionsButtons = ({ onEdit, onDelete, onExport }: Props) => {
  return (
    <div className={styles.actionsButtons}>
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

export default ActionsButtons
