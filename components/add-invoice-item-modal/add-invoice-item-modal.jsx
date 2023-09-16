import { useState } from 'react'

import Modal from '@/components/ui/modal'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'

import styles from './add-invoice-item-modal.module.scss'

const AddInvoiceItemModal = ({ open, onClose, onSave, title }) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleChangeAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleSave = () => {
    onSave({
      description,
      amount,
    })
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.addInvoiceItemModal}>
        <h3 className={styles.title}>{title}</h3>
        <hr className={styles.topRule} />
        <Input
          name='description'
          label='Description'
          value={description}
          onChange={handleChangeDescription}
          autoFocus
        />
        <Input
          name='amount'
          label='Amount'
          value={amount}
          onChange={handleChangeAmount}
          type='number'
        />
        <hr className={styles.bottomRule} />
        <div className={styles.buttonsContainer}>
          <Button onClick={onClose} outlined>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </Modal>
  )
}

export default AddInvoiceItemModal
