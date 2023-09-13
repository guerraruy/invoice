import Button from '../button'
import Modal from '../modal'

import styles from './confirmation-modal.module.scss'

interface Props {
  title: string
  body: string
  noText?: string
  yesText?: string
  open: boolean
  onClose: () => void
  confirmCallback: () => void
}

const ConfirmationModal = ({
  title = 'Please confirm',
  body,
  noText = 'No',
  yesText = 'Yes',
  onClose,
  open,
  confirmCallback,
}: Props) => {
  const handleConfirm = () => {
    if (confirmCallback) {
      confirmCallback()
      onClose()
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.confirmationModal}>
        <h3 className={styles.title}>{title}</h3>
        <hr />
        <div className={styles.body}>{body}</div>
        <hr />
        <div className={styles.buttonsContainer}>
          <Button onClick={onClose} outlined>
            {noText}
          </Button>
          <Button onClick={handleConfirm}>{yesText}</Button>
        </div>
      </div>
    </Modal>
  )
}

export default ConfirmationModal
