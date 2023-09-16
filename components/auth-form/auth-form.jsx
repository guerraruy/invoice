import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import { useAddUserMutation } from '@/services/usersApi'
import Input from '@/components/ui/input'
import Button from '@/components/ui/button'
import { isValidEmail } from '@/helpers/validators'

import styles from './auth-form.module.scss'

const AuthForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, toggleMode] = useState(false)
  const [signUp] = useAddUserMutation()
  const router = useRouter()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('email', email)
  //   console.log('password', password)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isLogin) {
      const { error } = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      if (error) {
        toast.error(error)
      } else {
        router.push('./invoices')
      }
    } else {
      if (!isValidEmail(email)) {
        toast.error('Invalid email')
        return
      }
      if (password?.length < 6) {
        toast.error('Password must have at least 6 characters')
        return
      }
      const data = {
        email,
        password,
      }
      const result = await signUp(data)
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
