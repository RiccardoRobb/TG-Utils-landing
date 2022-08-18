import '../styles/theme.scss'
import type { AppProps } from 'next/app'
import head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
} 

export default MyApp
