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
        <h1>Classes</h1>
        <h2>Who are you?</h2>
      </section>
      <section className={styles.container}>
        <div className={styles.content}>
          {classes.results.map((clss) => (
            <Link
              href={{
                pathname: `/classes/${clss.name.toLowerCase()}`,
              }}
              key={clss.index}
              className={styles.row}
            >
              <div className={styles.image}>
                <Image
                  src={`/class-images/${clss.name}.svg`}
                  width={40}
                  height={40}
                  alt={`${clss.name}-logo`}
                />
              </div>
              <p>{clss.name}</p>
            </Link>
          ))}
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
