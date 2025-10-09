import '../styles/globals.css'
import '../styles/agentcorti.css'
// import DigitalRain from '../components/DigitalRain'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <DigitalRain /> */}
      <Component {...pageProps} />
    </>
  )
}