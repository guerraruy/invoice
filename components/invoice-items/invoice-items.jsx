import { FaPlus } from 'react-icons/fa6'
import Button from '../ui/button'
import styles from './invoice-items.module.scss'
import InvoiceItem from '../invoice-item'
import AddInvoiceItemModal from '../add-invoice-item-modal'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInvoiceItem } from '../../redux/invoiceItemsSlice'
import { useRouter } from 'next/router'

const InvoiceItems = () => {
  const [open, setOpen] = useState(false)
  const { items } = useSelector((state) => state.invoiceItems)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleAddItem = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSaveItem = (item) => {
    const data = {
      id: self.crypto.randomUUID(),
      ...item,
    }
    console.log('item saved', data)
    dispatch(addInvoiceItem(data))
    setOpen(false)
  }

  const handleCancel = () => {
    router.push('/invoices')
  }

  const handleSave = () => {
    router.push('/invoices')
  }

  const displayItems = (items) => {
    if (items?.length > 0) {
      return items.map((item) => {
        return <InvoiceItem key={item.id} item={item} />
      })
    } else {
      return (
        <div className={styles.note}>
          <em>No items have been added yet</em>
        </div>
      )
    }
  }

  return (
    <>
      <div className={styles.invoiceItems}>
        <div className={styles.itemsTitleContainer}>
          <div className={styles.itemsTitle}>Invoice Items</div>
          <Button className={styles.addButton} onClick={handleAddItem} round>
            <FaPlus />
          </Button>
        </div>
        <div className={styles.listContainer}>{displayItems(items)}</div>
        <div className={styles.buttonsContainer}>
          <Button type='button' onClick={handleCancel} outlined>
            Cancel
          </Button>
          <Button onClick={handleSave}>Create Invoice</Button>
        </div>
      </div>
      <AddInvoiceItemModal
        open={open}
        onClose={handleClose}
        title='Add Item'
        onSave={handleSaveItem}
      />
    </>
  )
}

export default InvoiceItems
