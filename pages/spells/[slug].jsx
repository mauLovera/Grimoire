import Image from 'next/image'

import Layout from '@/components/Layout/Layout'

import styles from '@/styles/pages/spells/Spell.module.scss'
import { getSpellDetails } from 'services/api-calls'
import Banner from '@/components/Banner/Banner'

export default function SpellPage({ spell }) {
  return (
    <Layout fit>
      <Banner header={spell.name.replace('/', ' ')} subHeader={`School: ${spell.school.name}`} />
      <section className={styles.container}>
        <div className={styles.content}>
          <section>
            <p>
              <span className={styles.bold}>Casting Time: </span>
              {spell.casting_time}
            </p>
            <p>
              <span className={styles.bold}>Range: </span>
              {spell.range}
            </p>
            <p>
              <span className={styles.bold}>Components: </span>
              {spell.components}
            </p>
            <p>
              <span className={styles.bold}>Duration: </span>
              {spell.duration}
            </p>
          </section>
          <section>
            <h2>Description</h2>
            {spell.desc.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </section>
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
