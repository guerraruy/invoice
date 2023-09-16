import '@/styles/globals.css'
import '@/styles/modal.scss'
import 'react-responsive-modal/styles.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { SessionProvider } from 'next-auth/react'
import CustomToaster from '../components/ui/custom-toaster'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
          <CustomToaster />
        </Layout>
      </SessionProvider>
    </Provider>
  )
}

export default App
