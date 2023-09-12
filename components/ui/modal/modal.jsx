import React from 'react'
import { Modal as ResponsiveModal } from 'react-responsive-modal'
import { IoCloseOutline } from 'react-icons/io5'

// import './modal.scss'

const Modal = (props) => {
  return <ResponsiveModal {...props} center closeIcon={<IoCloseOutline />} />
}

export default Modal
