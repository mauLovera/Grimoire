import Link from 'next/link'
import { useRouter } from 'next/router'
import { GiHamburgerMenu } from 'react-icons/gi'

import styles from './Header.module.scss'

export default function Header() {
  const router = useRouter()

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h1>
          <Link href="/">Grimoire</Link>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              href="/classes"
              className={router.pathname === '/classes' ? styles.active : ''}
            >
              Classes
            </Link>
          </li>
          <li>
            <Link
              href="/monsters"
              className={router.pathname === '/monsters' ? styles.active : ''}
            >
              Monsters
            </Link>
          </li>
          <li>
            <Link
              href="/spells"
              className={router.pathname === '/spells' ? styles.active : ''}
            >
              Spells
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
