// import AuthForm from '../../components/auth-form'
import AuthForm from '../../components/auth-form'

import styles from './auth-page.module.scss'

const AuthPage = () => {
  // return <AuthForm />
  return (
    <div className={styles.authPage}>
      <AuthForm />
    </div>
  )
}

export default AuthPage
