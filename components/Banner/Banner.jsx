import styles from './Banner.module.scss'

export default function Banner({ header, subHeader }) {
  return (
    <section className={styles.container}>
      <h1>{header}</h1>
      <h2>{subHeader}</h2>
    </section>
  )
}
