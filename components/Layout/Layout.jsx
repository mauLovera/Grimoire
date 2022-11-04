import Head from 'next/head'

export default function Layout({ children, title, keywords, description }) {
  return (
    <>
      <Head></Head>
      <main>{children}</main>
    </>
  )
}
