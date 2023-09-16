import { FaPlus } from 'react-icons/fa6'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import Button from '@/components/ui/button'
import InvoiceItem from '@/components/invoices/invoice-item'
import AddInvoiceItemModal from '@/components/add-invoice-item-modal'
import { addInvoiceItem } from '@/redux/invoiceItemsSlice'
import ConfirmationModal from '@/components/ui/confirmation-modal'
import { removeInvoiceItem } from '@/redux/invoiceItemsSlice'

import styles from './invoice-items.module.scss'

const InvoiceItems = () => {
  const [openAddInvoiceModal, setOpenAddInvoiceModal] = useState(false)
  const [idToBeDeleted, setIdToBeDeleted] = useState(null)
  const { items } = useSelector((state) => state.invoiceItems)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleAddItem = (e) => {
    e.preventDefault()
    setOpenAddInvoiceModal(true)
  }

  const handleClose = () => {
    setOpenAddInvoiceModal(false)
  }

  const handleEditItem = (item) => {
    // e.preventDefault()
    console.log('edit item ', item)
  }

  const handleDeleteItem = () => {
    // console.log('delete item ', item)
    dispatch(removeInvoiceItem(idToBeDeleted))
  }

  const handleSaveItem = (item) => {
    const data = {
      id: self.crypto.randomUUID(),
      ...item,
      amount: +item.amount,
    }
    dispatch(addInvoiceItem(data))
    setOpenAddInvoiceModal(false)
  }

  const handleConfirm = (id) => {
    setIdToBeDeleted(id)
  }

  const displayItems = (items) => {
    if (items?.length > 0) {
      return items.map((item) => {
        return (
          <InvoiceItem
            key={item.id}
            item={item}
            onEdit={() => handleEditItem(item)}
            onDelete={() => handleConfirm(item)}
          />
        )
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
        <div className={styles.header}>
          <div className={styles.headerDescription}>Description</div>
          <div className={styles.headerAmount}>Amount</div>
          <div className={styles.headerActions}>Actions</div>
        </div>
        <div className={styles.listContainer}>{displayItems(items)}</div>
      </div>
      <AddInvoiceItemModal
        open={openAddInvoiceModal}
        onClose={handleClose}
        title='Add Item'
        onSave={handleSaveItem}
      />
      <ConfirmationModal
        open={idToBeDeleted}
        body={`Are you sure you only want to delete this item?`}
        onClose={() => setIdToBeDeleted(null)}
        confirmCallback={handleDeleteItem}
      />
    </>
  )
}

export default InvoiceItems
