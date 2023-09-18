import { useEffect, useState } from 'react'

import Modal from '@/components/ui/modal'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'

import styles from './invoice-item-form-modal.module.scss'

const InvoiceItemFormModal = ({ open, onClose, onSave, item }) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  useEffect(() => {
    if (open) {
      // console.log('ITEM', item)
      if (item) {
        setDescription(item.description)
        setAmount(item.amount)
      } else {
        setDescription('')
        setAmount('')
      }
    }
  }, [item, open])

  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleChangeAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleSave = () => {
    const data = {
      description,
      amount,
    }
    if (item) {
      data.id = item.id
    }
    onSave(data)
  }

  const title = item ? 'Edit Item' : 'Add Item'

  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.invoiceItemFormModal}>
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

export default InvoiceItemFormModal
