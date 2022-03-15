import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ferreira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Gay Bem Gay" />
        <p className="description">
         Um Site para o ferreira gay <code>11/GPSI</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
