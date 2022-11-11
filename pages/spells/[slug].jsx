import Image from 'next/image'

import Layout from '@/components/Layout/Layout'

import styles from '@/styles/pages/spells/Spell.module.scss'
import { getSpellDetails } from 'services/api-calls'

export default function SpellPage({ spell }) {
  return (
    <Layout fit>
      <section className={styles.banner}>
        <h1>{spell.name}</h1>
        <h2>
          School: <span> {spell.school.name}</span>
        </h2>
      </section>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.col}>
            <div className={styles.box}>
              <h1>Available For</h1>
              {spell.classes.length ? (
                <>
                  {spell.classes.map((playerClass) => (
                    <div key={playerClass.index}>
                      <p>{playerClass.name}</p>
                    </div>
                  ))}
                </>
              ) : (
                <p>No player classes may use this spell</p>
              )}
            </div>
          </div>
          <div className={styles.list}>
            <h1>Description</h1>
            <p>{spell.desc[0]}</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await getSpellDetails(slug)
  return {
    props: {
      spell: res,
    },
  }
}
