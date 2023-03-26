import MessagesProvider from '@/context/MessagesProvider'
import '@/styles/global.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <MessagesProvider>
      <Component {...pageProps} />
    </MessagesProvider>
  )
}
