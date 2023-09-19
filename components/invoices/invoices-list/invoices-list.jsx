import { useState } from 'react'
import { useRouter } from 'next/router'

import {
  useDeleteInvoiceMutation,
  useGetAllInvoicesQuery,
} from '@/services/invoices'
import InvoiceRow from '@/components/invoices/invoice-row'
import Spinner from '@/components/ui/spinner'
import ConfirmationModal from '@/components/ui/confirmation-modal'
import InvoicesFilter from '@/components/invoices/invoices-filter'

import styles from './invoices-list.module.scss'

const InvoicesList = () => {
  const { data: invoices, isLoading } = useGetAllInvoicesQuery()
  const [deleteInvoice] = useDeleteInvoiceMutation()
  const router = useRouter()
  const [idToBeDeleted, setIdToBeDeleted] = useState(null)
  const [statusFilter, setStatusFilter] = useState('')

  const handleStatusChange = (e) => {
    setStatusFilter(e)
  }

  const handleEdit = (id) => {
    router.push(`/invoices/${id}`)
  }

  const handleDelete = () => {
    deleteInvoice(idToBeDeleted)
  }

  const handleConfirm = (id) => {
    setIdToBeDeleted(id)
  }

  const handleExport = (id) => {
    router.push(`/invoices/${id}/pdf`)
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <InvoicesFilter value={statusFilter} onChange={handleStatusChange} />
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
          {invoices
            .filter((e) => statusFilter === '' || e.status === statusFilter)
            .map((invoice) => {
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
