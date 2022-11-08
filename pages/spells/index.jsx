import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

import Layout from '@/components/Layout/Layout'

import styles from '@/styles/pages/monsters/Monsters.module.scss'
import { getSpellList, getSpellSearch } from 'services/api-calls'

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
    <Layout>
      <section className={styles.banner}>
        <h1>Spells</h1>
        <h2>What do they do?</h2>
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
        {spellsData.length
            ? spellsData.map((spell) => {
                return (
                  <>
                    <Link href={`/spells/${spell.index}`}>
                      <p>{spell.name}</p>
                    </Link>
                  </>
                )
              })
            : spells.results.map((spell) => {
                return (
                  <>
                    <Link href={`/spells/${spell.index}`}>
                      <p>{spell.name}</p>
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

export async function getServerSideProps() {
  const res = await getSpellList()
  return {
    props: {
      spells: res,
    },
  }
}
