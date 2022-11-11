import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

import ActiveLink from '@/components/ActiveLink/ActiveLink'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.logo}>
          <Link href={'/'}>Grimoire</Link>
        </h1>
        <nav>
          <h4 className={styles.header}>Links</h4>
          <ul>
            <li>
              <ActiveLink url={'classes'} text={'Classes'} />
            </li>
            <li>
              <ActiveLink url={'monsters'} text={'Monsters'} />
            </li>
            <li>
              <ActiveLink url={'spells'} text={'Spells'} />
            </li>
          </ul>
        </nav>
        <nav>
          <h4 className={styles.header}>Resources</h4>
          <ul>
            <li>
              <Link href={'https://github.com/mauLovera/next-grimoire'}>
                GitHub <FaGithub />
              </Link>
            </li>
            <li>
              <Link href={'https://www.dnd5eapi.co/'}>DnD 5e API</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
