import styles from './starting-page.module.scss'

const StartingPageContent: React.FC = (): JSX.Element => {
  // Show Link to Login page if NOT auth

  return (
    <section className={styles.starting}>
      <h1>Welcome to EZINVOICE!</h1>
    </section>
  )
}

export default StartingPageContent
