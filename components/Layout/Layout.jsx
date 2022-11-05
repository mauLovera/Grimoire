import Head from 'next/head'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

import styles from './Layout.module.scss'

export default function Layout({ children, title, keywords, description }) {
  return (
    <>
      <Head></Head>
      <Header />
      <main className={styles.container}>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
