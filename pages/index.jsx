import Link from 'next/link'

import Layout from '@/components/Layout/Layout'

import styles from '@/styles/pages/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <section className={styles.welcome}>
        <h1>Welcome to Grimoire!</h1>
        <h2>What are you looking for?</h2>
      </section>
      <section className={styles.content}>
        <Link href="/classes">
          <div className={styles.box}>Classes</div>
        </Link>
        <Link href="/monsters">
          <div className={styles.box}>Monsters</div>
        </Link>
        <Link href="/spells">
          <div className={styles.box}>Spells</div>
        </Link>
      </section>
    </Layout>
  )
}
