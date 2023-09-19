import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { notAuthenticate } from '@/helpers/auth'

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
