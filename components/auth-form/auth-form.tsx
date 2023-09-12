import styles from './auth-form.module.scss'
import { useAddUserMutation } from '../../services/usersApi'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signUp] = useAddUserMutation()

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isLogin) {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
    } else {
      const data = {
        email,
        password,
      }
      const result = await signUp(data)
      console.log(result)
    }
  }

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.control}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default AuthForm
