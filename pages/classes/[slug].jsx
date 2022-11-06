import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/Layout/Layout'

import styles from '@/styles/pages/classes/Class.module.scss'
import { getClassDetails, getClassList } from 'services/api-calls'

export default function ClassPage({ clss }) {
  console.log(clss)
  return (
    <Layout>
      <section className={styles.banner}>
        <h1>{clss.name}</h1>
        <Image
          src={`/class-images/${clss.name}.svg`}
          width={100}
          height={100}
          alt={`${clss.name}-logo`}
          className={styles.image}
        />
      </section>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.col}>
            <div className={styles.box}>
              <h1>Hit Die</h1>
              <p>{clss.hit_die}</p>
            </div>
          </div>
          <div className={styles.throws}>
            <h1>Saving Throws</h1>
            <div>
              {clss.saving_throws.map((x) => (
                <p key={x.index}>{x.name}</p>
              ))}
            </div>
          </div>
          <div className={styles.list}>
            <h1>Proficiencies</h1>
            {clss.proficiencies.map((x) => (
              <>
                <p>{x.name.replace('Saving Throw:', '')}</p>
              </>
            ))}
          </div>
          <div className={styles.list}>
            <h1>Proficiency Choices (Choose two)</h1>
            {clss.proficiency_choices.map((x, i) => (
              <>
                {i === 0 ? (
                  <>
                    {x.from.options.map((e) => (
                      <li key={x.index}>
                        {e.item?.name.replace('Skill:', '')}
                      </li>
                    ))}
                  </>
                ) : (
                  ''
                )}
              </>
            ))}
          </div>
          <div className={styles.list}>
            <h1>Starting Equipment</h1>
            {clss.starting_equipment.length ? (
              clss.starting_equipment.map((x) => (
                <p key={x.index}>{x.equipment.name}</p>
              ))
            ) : (
              <p>None</p>
            )}
          </div>
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
