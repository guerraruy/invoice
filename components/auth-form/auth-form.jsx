import { useState } from 'react'
import { useAddUserMutation } from '../../services/usersApi'
import { signIn } from 'next-auth/react'

import Input from '../ui/input'
import Button from '../ui/button'

import styles from './auth-form.module.scss'

const AuthForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, toggleMode] = useState(false)
  const [signUp] = useAddUserMutation()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('email', email)
  //   console.log('password', password)
  // }

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

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const switchModeHandler = () => {
    toggleMode((prev) => !prev)
  }

  const disabled = !email.trim() || !password

  const title = isLogin ? 'Login' : 'Sign Up'
  const actionBtnTxt = isLogin ? 'Login' : 'Create Account'
  return (
    <div className={styles.authForm}>
      <div className={styles.title}>{title}</div>
      <form onSubmit={handleSubmit}>
        <Input
          name='email'
          label='Email'
          value={email}
          onChange={handleChangeEmail}
          autoFocus
        />
        <Input
          name='password'
          label='Password'
          value={password}
          onChange={handleChangePassword}
          type='password'
        />
        <Button className={styles.actionBtn} disabled={disabled}>
          {actionBtnTxt}
        </Button>
        <button
          type='button'
          className={styles.toggle}
          onClick={switchModeHandler}
        >
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
      </form>
    </div>
  )
}

export default AuthForm