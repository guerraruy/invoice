import AuthForm from '@/components/auth-form'

import styles from './auth-page.module.scss'

const AuthPage = () => {
  return (
    <div className={styles.authPage}>
      <AuthForm />
    </div>
  )
}

export default AuthPage
