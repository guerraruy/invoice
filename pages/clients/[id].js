import { useRouter } from 'next/router'
import ClientForm from '../../components/client/client-form'
import PageHeader from '../../components/ui/page-header'

const EditClientPage = () => {
  const router = useRouter()
  // console.log('router', router)

  const { id } = router.query

  return (
    <div>
      <PageHeader>Edit Client</PageHeader>
      <ClientForm id={id} />
    </div>
  )
}

export default EditClientPage
