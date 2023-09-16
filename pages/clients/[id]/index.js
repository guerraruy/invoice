import { useRouter } from 'next/router'

import ClientForm from '../../../components/client-form'
import PageHeader from '../../../components/ui/page-header'
import useAuthenticated from '../../../hooks/useAuthenticated'

const EditClientPage = () => {
  useAuthenticated()
  const router = useRouter()

  const { id } = router.query

  return (
    <div>
      <PageHeader>Edit Client</PageHeader>
      <ClientForm id={id} />
    </div>
  )
}

export default EditClientPage
