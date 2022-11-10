import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/Layout/Layout'

import styles from '@/styles/pages/classes/Classes.module.scss'
import { getClassList } from 'services/api-calls'
import Banner from '@/components/Banner/Banner'

export default function ClassesPage({ classes }) {
  return (
    <Layout>
      <Banner header={'Classes'} subHeader={'Who are you?'} />
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
