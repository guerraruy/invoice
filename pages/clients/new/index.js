import ClientForm from '@/components/clients/client-form'
import PageHeader from '@/components/ui/page-header'
import useAuthenticated from '@/hooks/useAuthenticated'

import styles from './add-client-page.module.scss'

const AddClientPage = () => {
  useAuthenticated()
  return (
    <div className={styles.addClientPage}>
      <PageHeader>New Client</PageHeader>
      <ClientForm />
    </div>
  )
}

export default AddClientPage
