import Head from 'next/head'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

import styles from './Layout.module.scss'

export default function Layout({ children, title, keywords, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <main className={styles.container}>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

Layout.defaultProps = {
  title: 'Grimoire | A DnD 5th Edition Application',
  description:
    'A lookup application for DnD 5th Edition classes, monsters, and spells.',
  keywords: 'DnD, Search, 5th Edition, Spells, Monsters, Classes',
}
