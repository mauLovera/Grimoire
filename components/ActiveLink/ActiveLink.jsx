import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './ActiveLink.module.scss'

export default function ActiveLink({ text, url }) {
  const router = useRouter()
  return (
    <Link
      href={url}
      className={router.pathname === `/${url}` ? styles.active : ''}
    >
      {text}
    </Link>
  )
}
