import Select from '@/components/ui/select'

import styles from './invoices-filter.module.scss'

const optionsStatus = [
  { value: '', text: 'All' },
  { value: 'paid', text: 'Paid' },
  { value: 'unpaid', text: 'Unpaid' },
  { value: 'overdue', text: 'Overdue' },
]

const InvoicesFilter = ({ value, onChange }) => {
  return (
    <div className={styles.invoicesFilter}>
      <Select
        label='Filter by status'
        options={optionsStatus}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InvoicesFilter
