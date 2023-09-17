import React from 'react'
import { Modal as ResponsiveModal } from 'react-responsive-modal'
import { IoCloseOutline } from 'react-icons/io5'

interface Props {
  open: boolean
  onClose: () => void
  children: JSX.Element
}

const Modal: React.FC<Props> = ({ open, onClose, children }): JSX.Element => {
  return (
    <ResponsiveModal
      open={open}
      onClose={onClose}
      center
      closeIcon={<IoCloseOutline />}
    >
      {children}
    </ResponsiveModal>
  )
}

export default Modal
