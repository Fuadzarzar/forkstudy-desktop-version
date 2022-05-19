import '../styles/globals.css'
import { RealViewportProvider } from "next-real-viewport"

function MyApp({ Component, pageProps }) {
  return (
  <>
    <RealViewportProvider>
      <Component {...pageProps} />
    </RealViewportProvider>
  </> 
  )
}

export default MyApp
