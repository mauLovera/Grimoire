import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h1>Grimoire</h1>
      </div>
      <nav>
        <ul>
          <li>Classes</li>
          <li>Monsters</li>
          <li>Spells</li>
        </ul>
      </nav>
    </header>
  )
}
