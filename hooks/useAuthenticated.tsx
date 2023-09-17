import { useSession } from 'next-auth/react'
import { notAuthenticate } from '../helpers/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useAuthenticated = () => {
  const router = useRouter()
  const { status } = useSession()
  // Redirect if not authenticated
  useEffect(() => {
    if (notAuthenticate(status)) {
      router.push('/auth')
    }
  }, [status, router])
}

export default useAuthenticated
