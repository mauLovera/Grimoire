import Image from 'next/image'

import Layout from '@/components/Layout/Layout'

import styles from '@/styles/pages/monsters/Monster.module.scss'
import { getMonsterDetails } from 'services/api-calls'

export default function MonsterPage({ monster }) {
  return (
    <Layout fit>
      <section className={styles.banner}>
        <h1>{monster.name}</h1>
        <h2>
          Type: <span> {monster.type}</span>
        </h2>
      </section>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.col}>
            <div className={styles.box}>
              <h1>Armor Class</h1>
              <p>{monster.armor_class}</p>
            </div>
          </div>
          <div className={styles.box}>
            <h1>Size</h1>
            <p>{monster.size}</p>
          </div>
          <div className={styles.list}>
            <h1>Actions</h1>
            {monster.actions?.length ? (
              <>
                {monster.actions.map((action) => (
                  <div key={action.name}>
                    <h4>{action.name}</h4>
                    <h5>{action.desc}</h5>
                  </div>
                ))}
              </>
            ) : (
              <p>This poor monster has no actions.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await getMonsterDetails(slug)
  return {
    props: {
      monster: res,
    },
  }
}
