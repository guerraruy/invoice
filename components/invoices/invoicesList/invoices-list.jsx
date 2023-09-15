import styles from './invoices-list.module.scss'
import {
  useDeleteInvoiceMutation,
  useGetAllInvoicesQuery,
} from '../../../services/invoices'
import InvoiceRow from '../invoiceRow'
import Spinner from '../../ui/spinner'
import { useRouter } from 'next/router'
import ConfirmationModal from '../../ui/confirmation-modal'
import { useState } from 'react'

const InvoicesList = () => {
  const { data: invoices, isLoading } = useGetAllInvoicesQuery()
  const [deleteInvoice] = useDeleteInvoiceMutation()
  const router = useRouter()
  const [idToBeDeleted, setIdToBeDeleted] = useState(null)

  const handleEdit = (id) => {
    console.log('edit', id)
    router.push(`/invoices/${id}`)
  }

  const handleDelete = () => {
    deleteInvoice(idToBeDeleted)
    console.log('delete', idToBeDeleted)
  }

  const handleConfirm = (id) => {
    setIdToBeDeleted(id)
  }

  const handleExport = (id) => {
    console.log('export', id)
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className={styles.invoicesList}>
        <div className={styles.header}>
          <div className={styles.headerInvoiceNo}>No.</div>
          <div className={styles.headerDueDate}>Due</div>
          <div className={styles.headerClient}>Client</div>
          <div className={styles.headerAmount}>Amount</div>
          <div className={styles.headerStatus}>Status</div>
          <div className={styles.headerActions}>Actions</div>
        </div>
        <div className={styles.listContainer}>
          {invoices.map((invoice) => {
            return (
              <InvoiceRow
                key={invoice._id}
                invoice={invoice}
                onEdit={() => handleEdit(invoice._id)}
                onDelete={() => handleConfirm(invoice._id)}
                onExport={() => handleExport(invoice._id)}
              />
            )
          })}
        </div>
      </div>
      <ConfirmationModal
        open={idToBeDeleted}
        body={`Are you sure you only want to delete this invoice?`}
        onClose={() => setIdToBeDeleted(null)}
        confirmCallback={handleDelete}
      />
    </>
  )
}

export default InvoicesList
