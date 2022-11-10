import Link from 'next/link'
import { useRouter } from 'next/router'

import ActiveLink from '@/components/ActiveLink/ActiveLink'
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
    </header>
  )
}
