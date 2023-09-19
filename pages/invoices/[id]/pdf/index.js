import { Margin, usePDF } from 'react-to-pdf'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Button from '@/components/ui/button'
import { useGetInvoiceQuery } from '@/services/invoices'
import { useGetClientQuery } from '@/services/clients'
import Spinner from '@/components/ui/spinner'
import { getStatusFromInvoice } from '@/helpers/invoices'

import styles from './invoice-pdf-page.module.scss'

const InvoicePdfPage = () => {
  const [total, setTotal] = useState(0)
  const router = useRouter()
  const { id } = router.query
  const { data: invoice, isLoading: isLoadingInvoices } = useGetInvoiceQuery(
    id,
    { skip: !id }
  )
  const { data: client, isLoading: isLoadingClient } = useGetClientQuery(
    invoice?.clientId,
    {
      skip: !invoice?.clientId,
    }
  )
  useEffect(() => {
    if (invoice) {
      const total = invoice.items.reduce((acc, ele) => acc + +ele.amount, 0)
      setTotal(total)
    }
  }, [invoice])

  const { toPDF, targetRef } = usePDF({
    filename: 'invoice.pdf',
    page: { margin: Margin.MEDIUM },
  })

  const handleCancel = () => {
    router.push('/invoices')
  }

  const handlePdf = () => {
    toPDF()
    router.push('/invoices')
  }

  if (!invoice || isLoadingInvoices || isLoadingClient) {
    return <Spinner />
  }

  console
  const status = getStatusFromInvoice(invoice)
  const dueDate = new Date(invoice?.dueDate)
  const due = dueDate.toLocaleDateString()

  return (
    <section className={styles.invoicePdfPage}>
      <div className={styles.buttonContainer}>
        <Button onClick={handleCancel}>CANCEL</Button>
        <Button onClick={handlePdf}>Download PDF</Button>
      </div>

      <div className={styles.pdf} ref={targetRef}>
        <h1>INVOICE</h1>
        <div className={styles.invoiceData}>
          <div className={styles.invoiceDataRow}>
            <div className={styles.label}>{`No. `}</div>
            <div className={styles.value}>{invoice?.invoiceNumber}</div>
          </div>
          <div className={styles.invoiceDataRow}>
            <span className={styles.label}>{`Client `}</span>
            <span className={styles.value}>{client?.name}</span>
          </div>
          <div className={styles.invoiceDataRow}>
            <span className={styles.label}>{`Status `}</span>
            <span className={styles.value}>{status.toUpperCase()}</span>
          </div>
          <div className={styles.invoiceDataRow}>
            <span className={styles.label}>{`Due Date `}</span>
            <span className={styles.value}>{due}</span>
          </div>
          <div className={styles.invoiceItemsHeader}>
            <div className={styles.invoiceDescriptionHeader}>Description</div>
            <div className={styles.invoiceAmountHeader}>Amount</div>
          </div>
          <div className={styles.invoiceItems}>
            {invoice.items.map((e) => {
              return (
                <div key={e.id} className={styles.invoiceItemRow}>
                  <div className={styles.invoiceItemDescription}>
                    {e.description}
                  </div>
                  <div
                    className={styles.invoiceItemAmount}
                  >{`$ ${(+e.amount).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}</div>
                </div>
              )
            })}
          </div>
          <div className={styles.invoiceTotal}>
            Total:
            <div className={styles.totalBox}>{`$ ${total.toLocaleString(
              'en-US',
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            )}`}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvoicePdfPage
