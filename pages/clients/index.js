import { useRouter } from 'next/router'
import styles from './clients.module.scss'
import PageHeader from '../../components/ui/page-header'
import {
  useDeleteClientMutation,
  useGetClientsQuery,
} from '../../services/clients'
import ClientRow from '../../components/client-row'
import ConfirmationModal from '../../components/ui/confirmation-modal'
import { useState } from 'react'

const Clients = () => {
  const router = useRouter()
  const [idToBeDeleted, setIdToBeDeleted] = useState(null)
  const { data, isLoading } = useGetClientsQuery()
  const [deleteClient] = useDeleteClientMutation()

  const handleAddClient = () => {
    router.push('/clients/new')
  }

  const handleConfirm = (id) => {
    setIdToBeDeleted(id)
  }

  const handleDelete = async () => {
    console.log('DELETE>>>', idToBeDeleted)
    await deleteClient(idToBeDeleted)
  }

  if (isLoading) {
    return <div>LOADING...</div>
  }

  const handleEdit = (id) => {
    router.push(`/clients/${id}`)
  }

  return (
    <>
      <section className={styles.clients}>
        <button className={styles.addButton} onClick={handleAddClient}>
          ADD
        </button>
        <PageHeader>Clients</PageHeader>
        <div className={styles.clientsListContainer}>
          {data.map(({ name, _id }) => (
            <ClientRow
              key={_id}
              name={name}
              onEdit={() => handleEdit(_id)}
              onDelete={() => handleConfirm(_id)}
            />
          ))}
        </div>
      </section>
      <ConfirmationModal
        open={idToBeDeleted}
        body='Are you sure you only want to delete this client?'
        onClose={() => setIdToBeDeleted(null)}
        confirmCallback={handleDelete}
      />
    </>
  )
}

export default Clients
