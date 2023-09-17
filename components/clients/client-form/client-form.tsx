import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Button from '@/components/ui/button'
import {
  useAddClientMutation,
  useGetClientQuery,
  useUpdateClientMutation,
} from '@/services/clients'

import styles from './client-form.module.scss'

interface Props {
  id?: string
}

const ClientForm: React.FC<Props> = ({ id }): JSX.Element => {
  const [name, setName] = useState('')
  const [addClient] = useAddClientMutation()
  const [updateClient] = useUpdateClientMutation()
  const { data, isLoading } = useGetClientQuery(id, { skip: !id })
  useEffect(() => {
    if (data) {
      setName(data.name)
    }
  }, [data])
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      name,
    }
    if (id) {
      const result = await updateClient({ data, _id: id })
    } else {
      const result = await addClient(data)
    }
    router.push('/clients')
  }

  const handleCancel = () => {
    router.push('/clients')
  }

  const buttonText = id ? 'Save' : 'Add Client'

  return (
    <form className={styles.clientForm} onSubmit={handleSubmit}>
      <div className={styles.control}>
        <label htmlFor='client-name'>Name</label>
        <input
          type='text'
          id='client-name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.buttonsContainer}>
        <Button type='button' onClick={handleCancel} outlined>
          Cancel
        </Button>
        <Button>{buttonText}</Button>
      </div>
    </form>
  )
}

export default ClientForm
