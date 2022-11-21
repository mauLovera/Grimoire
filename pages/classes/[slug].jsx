import Image from 'next/image'

import Layout from '@/components/Layout/Layout'
import styles from '@/styles/pages/classes/Class.module.scss'
import { getClassDetails } from 'services/api-calls'
import Banner from '@/components/Banner/Banner'

export default function ClassPage({ clss }) {
  return (
    <Layout fit>
      <Banner
        header={clss.name}
        subHeader={
          <Image
            src={`/class-images/${clss.name}.svg`}
            width={100}
            height={100}
            alt={`${clss.name}-logo`}
            className={styles.image}
          />
        }
        reverse
      />
      <section className={styles.container}>
        <div className={styles.content}>
          <section>
            <p>
              <span className={styles.bold}>Hit Die: </span>
              {clss.hit_die}
            </p>
            <p>
              <span className={styles.bold}>Saving Throws: </span>
              {clss.saving_throws.map((e) => `${e.name} `)}
            </p>
            <p>
              <span className={styles.bold}>Skills: </span>
              {clss.proficiency_choices.map((e) => e.desc)}
            </p>
          </section>
          <section>
            <h2>Proficiencies</h2>
            <p>
              <span className={styles.bold}>Armor: </span>
              <span className={styles.results}>
                {clss.proficiencies.map((e) =>
                  e.name.includes('Armor') ? `${e.name} ` : ''
                )}
              </span>
            </p>
            <p>
              <span className={styles.bold}>Weapons: </span>
              <span className={styles.results}>
                {clss.proficiencies.map((e) => {
                  return e.name.includes('Weapon') ? `${e.name} ` : ''
                })}
              </span>
            </p>
            <p>
              <span className={styles.bold}>Equipment: </span>
              <span className={styles.results}>
                {clss.starting_equipment.map((e) => `${e.equipment?.name} `)}
              </span>
            </p>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await getClassDetails(slug)
  return {
    props: {
      clss: res,
    },
  }
}
