import Image from 'next/image'

import Layout from '@/components/Layout/Layout'
import Banner from '@/components/Banner/Banner'

import styles from '@/styles/pages/monsters/Monster.module.scss'
import { getMonsterDetails } from 'services/api-calls'

export default function MonsterPage({ monster }) {
  return (
    <Layout fit>
      <Banner
        header={monster.name}
        subHeader={`${monster.size} ${monster.type}, ${monster.alignment}`}
      />
      <section className={styles.container}>
        <div className={styles.content}>
          <section className={styles.stats}>
            <div>
              <h2>STR</h2>
              <p>{monster.strength}</p>
            </div>
            <div>
              <h2>DEX</h2>
              <p>{monster.dexterity}</p>
            </div>
            <div>
              <h2>CON</h2>
              <p>{monster.constitution}</p>
            </div>
            <div>
              <h2>INT</h2>
              <p>{monster.intelligence}</p>
            </div>
            <div>
              <h2>WIS</h2>
              <p>{monster.wisdom}</p>
            </div>
            <div>
              <h2>CHA</h2>
              <p>{monster.charisma}</p>
            </div>
          </section>
          <section>
            <p>
              <span className={styles.bold}>Armor Class: </span>
              {monster.armor_class}
            </p>
            <p>
              <span className={styles.bold}>Hit Points: </span>
              {monster.hit_points} ({monster.hit_points_roll})
            </p>
            <p>
              <span className={styles.bold}>Speed: </span> Walk{' '}
              {monster.speed.walk}, Swim {monster.speed.swim}
            </p>
            <p>
              <span className={styles.bold}>Challenge Rating: </span>
              {monster.challenge_rating} ({monster.xp} XP)
            </p>
          </section>
          <section>
            <p>
              <span className={styles.bold}>Saving Throws: </span>
              {monster.proficiencies.map((prof) => {
                const profName = prof.proficiency.name.substring(
                  prof.proficiency.name.indexOf(':') + 1
                )
                return profName
                  .split(' ')
                  .map((e) =>
                    e.length === 3
                      ? `${e.charAt(0)}${e.substring(1).toLowerCase()} +${
                          prof.value
                        } `
                      : ''
                  )
              })}
            </p>
            <p>
              <span className={styles.bold}>Skills: </span>
              {monster.proficiencies.map((prof) => {
                const profName = prof.proficiency.name.substring(
                  prof.proficiency.name.indexOf(':') + 1
                )
                return profName
                  .split(' ')
                  .map((e) => (e.length > 3 ? `${e} +${prof.value} ` : ''))
              })}
            </p>
            <p className={styles.capitalize}>
              <span className={styles.bold}>Senses: </span>
              {Object.keys(monster.senses).map(
                (e) => `${e.replace('_', ' ')} ${monster.senses[e]} `
              )}
            </p>
            <p className={styles.capitalize}>
              <span className={styles.bold}>Languages: </span>
              {monster.languages}
            </p>
          </section>
          <section className={styles.abilities}>
            {monster.special_abilities.map((e) => (
              <div key={e.name}>
                <h3 className={styles.bold}>{e.name}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </section>
          <section className={styles.actions}>
            <h2>Actions</h2>
            {monster.actions.map((e) => (
              <div key={e.name}>
                <h3 className={styles.bold}>{e.name}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </section>
          {monster.legendary_actions.length ? (
            <section className={styles.legendaryActions}>
              <h2>Legendary Actions</h2>
              {monster.legendary_actions.map((e) => (
                <div key={e.name}>
                  <h3 className={styles.bold}>{e.name}</h3>
                  <p>{e.desc}</p>
                </div>
              ))}
            </section>
          ) : (
            ''
          )}
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
