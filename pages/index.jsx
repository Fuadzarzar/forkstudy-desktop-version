import Header from '../components/Header/Header'
import Head from 'next/head'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>forkstudy - Aprenda e compartilhe conhecimento com um amigo.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
