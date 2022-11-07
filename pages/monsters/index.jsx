import { useState } from 'react'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

import Layout from '@/components/Layout/Layout'

import styles from '@/styles/pages/monsters/Monsters.module.scss'
import { getMonsterList, getMonsterSearch } from 'services/api-calls'

export default function MonstersPage({ monsters }) {
  const [formData, setFormData] = useState({ query: '' })
  const [monstersData, setMonstersData] = useState([])

  const handleSearch = async (input) => {
    const res = await getMonsterSearch(input)
    setMonstersData(res.results)
  }

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleSearch(formData)
  }

  return (
    <Layout>
      <section className={styles.banner}>
        <h1>Monsters</h1>
        <h2>What are they?</h2>
        <form className={styles.search} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            name="query"
            value={formData.query}
            onChange={handleChange}
            autoComplete="off"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </section>
      <section className={styles.container}>
        <div className={styles.content}>
          {monstersData.length
            ? monstersData.map((monster) => {
                return (
                  <>
                    <Link href={`/monsters/${monster.index}`}>
                      <p>{monster.name}</p>
                    </Link>
                  </>
                )
              })
            : monsters.results.map((monster) => {
                return (
                  <>
                    <Link href={`/monsters/${monster.index}`}>
                      <p>{monster.name}</p>
                    </Link>
                  </>
                )
              })
          }
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
