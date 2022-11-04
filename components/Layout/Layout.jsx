import Head from 'next/head'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default function Layout({ children, title, keywords, description }) {
  return (
    <>
      <Head></Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
