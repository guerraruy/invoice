import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'

import { store } from '@/redux/store'
import CustomToaster from '@/components/ui/custom-toaster'
import Layout from '@/components/layout/layout'

import '@/styles/globals.css'
import '@/styles/modal.scss'
import 'react-responsive-modal/styles.css'

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
