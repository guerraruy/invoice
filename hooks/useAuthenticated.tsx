import { useSession } from 'next-auth/react'
import { isAuthenticate } from '../helpers/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useAuthenticated = () => {
  const router = useRouter()
  const { status } = useSession()
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticate(status)) {
      router.push('/auth')
    }
  }, [status, router])
}

export default useAuthenticated
