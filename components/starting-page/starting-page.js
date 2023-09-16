import classes from './starting-page.module.scss'
import toast from 'react-hot-toast'

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  const notify1 = () => toast.success('Here is your toast.')
  const notify2 = () => toast.error('Here is your toast.')

  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <button onClick={notify1}>TOAST</button>
      <button onClick={notify2}>TOAST</button>
    </section>
  )
}

export default StartingPageContent
