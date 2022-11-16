import Link from 'next/link'
import { useState } from 'react'

import Layout from '@/components/Layout/Layout'

import { FaSearch } from 'react-icons/fa'
import { getSpellList, getSpellSearch } from 'services/api-calls'
import styles from '@/styles/pages/spells/Spells.module.scss'
import Banner from '@/components/Banner/Banner'

export default function SpellsPage({ spells }) {
  const [formData, setFormData] = useState({ query: '' })
  const [spellsData, setSpellsData] = useState([])

  const handleSearch = async (input) => {
    const res = await getSpellSearch(input)
    setSpellsData(res.results)
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
      <Banner header={'Spells'} subHeader={'What do they do?'} />
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.searchContainer}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputContainer}>
                <label htmlFor="query">Spell Name</label>
                <input
                  type="text"
                  placeholder="Search..."
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              {/* <button type="submit">Filter Monsters</button> */}
            </form>
          </div>
          <ul>
            {spellsData.length
              ? spellsData.map((spell) => {
                  return (
                    <Link href={`/spells/${spell.index}`} key={spell.name}>
                      <li>
                        <span></span>
                        {spell.name}
                      </li>
                    </Link>
                  )
                })
              : spells.results.map((spell) => {
                  return (
                    <Link href={`/spells/${spell.index}`} key={spell.name}>
                      <li>
                        <span></span>
                        {spell.name}
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
  const res = await getSpellList()
  return {
    props: {
      spells: res,
    },
  }
}
