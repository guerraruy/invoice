import ClientForm from '../../../components/client-form'
import PageHeader from '../../../components/ui/page-header'
import styles from './add-client-page.module.scss'

const AddClientPage = () => {
  return (
    <div className={styles.addClientPage}>
      <PageHeader>New Client</PageHeader>
      <ClientForm />
    </div>
  )
}

export default AddClientPage
