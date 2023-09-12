import { useSession } from 'next-auth/react'
import ProfileForm from './profile-form'
import classes from './user-profile.module.css'
import { useEffect } from 'react'
import { isAuthenticate, isLoading } from '../../helpers/auth'

function UserProfile() {
  // Redirect away if NOT auth
  const { data: session, status } = useSession()
  // console.log('=======status', status)
  // useEffect(() => {
  //   if (!isAuthenticate(status)) {
  //     window.location.href = '/auth'
  //   }
  // }, [status])

  if (isLoading(status)) {
    return <h1>Loading...</h1>
  }

  if (!isAuthenticate(status)) {
    window.location.href = '/auth'
    return null
  }

  // console.log('<<<<<>>>>> STATUS', status)
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  )
}

export default UserProfile
