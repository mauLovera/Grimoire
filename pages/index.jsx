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
        <div className={styles.boxContainer}>
          <h3>Classes</h3>
          <p>
            Class is the primary definition of what your character can do. It’s
            more than a profession; it’s your character’s calling. Class shapes
            the way you think about the world and interact with it and your
            relationship with other people and powers in the multiverse.{' '}
          </p>
          <Link href="/classes">
            <button>See More</button>
          </Link>
        </div>
        <div className={styles.boxContainer}>
          <h3>Monsters</h3>
          <p>
            Having various sizes, strengths, and weaknesses, a monster is the
            most common adversary your characters will face in the world.
            Knowing their skills, type, speed, saving throws, and hit points is
            crucial to your character{"'"}s survival and management of them as
            an ever-present threat.
          </p>
          <Link href="/monsters">
            <button>See More</button>
          </Link>
        </div>
        <div className={styles.boxContainer}>
          <h3>Spells</h3>
          <p>
            A spell is a discrete magical Effect, a single shaping of the
            magical energies that suffuse the multiverse into a specific,
            limited expression. In casting a spell, a character carefully plucks
            at the invisible strands of Raw Magic suffusing the world, pins them
            in place in a particular pattern, sets them vibrating in a specific
            way, and then releases them to unleash the desired effect—in most
            cases, all in the span of seconds.
          </p>
          <Link href="/spells">
            <button>See More</button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
