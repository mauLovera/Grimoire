import Link from 'next/link'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import Layout from '@/components/Layout/Layout'

import styles from '@/styles/pages/monsters/Monsters.module.scss'
import { getMonsterList, getMonsterSearch } from 'services/api-calls'
import Banner from '@/components/Banner/Banner'

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
    <Layout fit>
      <Banner header={'Monsters'} subHeader={'What are they?'} />
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.searchContainer}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputContainer}>
                <label htmlFor="query">Monster Name</label>
                <input
                  type="text"
                  placeholder="Search..."
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </form>
          </div>
          <ul>
            {monstersData.length
              ? monstersData.map((monster) => {
                  return (
                    <Link
                      href={`/monsters/${monster.index}`}
                      key={monster.name}
                    >
                      <li>
                        <span></span>
                        {monster.name}
                      </li>
                    </Link>
                  )
                })
              : monsters.results.map((monster) => {
                  return (
                    <Link
                      href={`/monsters/${monster.index}`}
                      key={monster.name}
                    >
                      <li>
                        <span></span>
                        {monster.name}
                      </li>
                    </Link>
                  )
                })}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await getMonsterList()
  return {
    props: {
      monsters: res,
    },
  }
}
