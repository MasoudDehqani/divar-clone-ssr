import { AppProps } from 'next/dist/next-server/lib/router/router'
import { AppType } from 'next/dist/next-server/lib/utils'
import '../styles/globals.css'
import DivarContextProvider from "../src/components/context/divarContext"

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <DivarContextProvider>
      <Component {...pageProps} />
    </DivarContextProvider>
  ) 
}

export default MyApp
