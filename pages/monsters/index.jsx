import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

import Layout from '@/components/Layout/Layout'

import styles from '@/styles/pages/monsters/Monsters.module.scss'
import { getMonsterList } from 'services/api-calls'

export default function MonstersPage({ monsters }) {
  return (
    <Layout>
      <section className={styles.banner}>
        <h1>Monsters</h1>
        <h2>What are they?</h2>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <button>
            <FaSearch />
          </button>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.content}>
          {monsters.results.map((monster) => {
            return (
              <>
                <Link href={`/monsters/${monster.index}`}>
                  <p>{monster.name}</p>
                </Link>
              </>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await getMonsterList()
  return {
    props: {
      monsters: res,
    },
  }
}
