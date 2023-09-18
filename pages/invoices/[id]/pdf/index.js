import { Margin, usePDF } from 'react-to-pdf'
import { useRouter } from 'next/router'

import Button from '@/components/ui/button'

import styles from './invoice-pdf-page.module.scss'

const InvoicePdfPage = () => {
  const router = useRouter()

  const { toPDF, targetRef } = usePDF({
    filename: 'invoice.pdf',
    page: { margin: Margin.MEDIUM },
  })

  const handleCancel = () => {
    router.push('/invoices')
  }

  return (
    <div className={styles.invoicePdfPage}>
      <div className={styles.buttonContainer}>
        <Button onClick={handleCancel}>CANCEL</Button>
        <Button onClick={toPDF}>Download PDF</Button>
      </div>

      <div className={styles.pdf} ref={targetRef}>
        <h1>INVOICE</h1>
      </div>
    </div>
  )
}

export default InvoicePdfPage
