import { useRouter } from 'next/router'
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react'

import PageHeader from '@/components/ui/page-header'
import { useDeleteClientMutation, useGetClientsQuery } from '@/services/clients'
import ClientRow from '@/components/clients/client-row'
import ConfirmationModal from '@/components/ui/confirmation-modal'
import Button from '@/components/ui/button'
import useAuthenticated from '@/hooks/useAuthenticated'
import Spinner from '@/components/ui/spinner'

import styles from './clients.module.scss'

const Clients = () => {
  useAuthenticated()
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
    await deleteClient(idToBeDeleted)
  }

  if (isLoading) {
    return <Spinner />
  }

  const handleEdit = (id) => {
    router.push(`/clients/${id}`)
  }

  const displayClientsList = () => {
    return data.map(({ name, _id }) => (
      <ClientRow
        key={_id}
        name={name}
        onEdit={() => handleEdit(_id)}
        onDelete={() => handleConfirm(_id)}
      />
    ))
  }

  return (
    <>
      <section className={styles.clients}>
        <Button className={styles.addButton} onClick={handleAddClient} round>
          <FaPlus />
        </Button>
        <PageHeader>Clients</PageHeader>
        <div className={styles.clientsListContainer}>
          {data?.length > 0 ? (
            displayClientsList()
          ) : (
            <div className={styles.noClient}>
              <em>No client has been created yet</em>
            </div>
          )}
        </div>
      </section>
      <ConfirmationModal
        open={idToBeDeleted}
        body={`Are you sure you only want to delete this client?
        All associated Invoices will also be deleted!`}
        onClose={() => setIdToBeDeleted(null)}
        confirmCallback={handleDelete}
      />
    </>
  )
}

export default Clients
