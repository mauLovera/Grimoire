import styles from './Banner.module.scss'

export default function Banner({ header, subHeader, reverse }) {
  return (
    <section className={`${styles.container} ${reverse ? styles.reverse : ''}`}>
      <h1>{header}</h1>
      <h2>{subHeader}</h2>
    </section>
  )
}
