import Link from 'next/link'

import Layout from '@/components/Layout/Layout'
import Banner from '@/components/Banner/Banner'
import styles from '@/styles/pages/Home.module.scss'

export default function HomePage() {
  return (
    <Layout>
      <Banner
        header={'Welcome to Grimoire!'}
        subHeader={'What are you looking for?'}
      />
      <section className={styles.container}>
        <div className={styles.box}>
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
        <div className={styles.box}>
          <h3>Monsters</h3>
          <p>
            Having various sizes, strengths, and weaknesses, a monster is the
            most common adversary your characters will face in the world.
            Knowing their skills, type, speed, saving throws, and hit points are
            crucial to your character{"'"}s survival and management of them as
            an ever-present threat.
          </p>
          <Link href="/monsters">
            <button>See More</button>
          </Link>
        </div>
        <div className={styles.box}>
          <h3>Spells</h3>
          <p>
            A spell is a discrete magical effect, a single shaping of the
            magical energies that suffuse the multiverse into a specific,
            limited expression. In casting a spell, a character carefully plucks
            at the invisible strands of Raw Magic suffusing the world and then releases them to unleash the desired effect.
          </p>
          <Link href="/spells">
            <button>See More</button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
