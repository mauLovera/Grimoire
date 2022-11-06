import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/Layout/Layout'

import styles from '@/styles/pages/classes/Classes.module.scss'
import { getClassList } from 'services/api-calls'

export default function ClassesPage({ classes }) {
  return (
    <Layout>
      <section className={styles.banner}>
        <h1>Monsters</h1>
        <h2>What are they?</h2>
      </section>
      <section className={styles.container}>
        <div className={styles.content}>
          
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await getClassList()
  return {
    props: {
      classes: res,
    },
  }
}
