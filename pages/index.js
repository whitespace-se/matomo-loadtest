import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matomo loadtest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/whitespace-se/matomo-loadtest">Matomo loadtest</a>
        </h1>

        <div className={styles.grid}>
          <a href="/page-1" className={styles.card}>
            <h3>Page 1</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/page-2" className={styles.card}>
            <h3>Page 2</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/page-3" className={styles.card}>
            <h3>Page 3</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/page-4" className={styles.card}>
            <h3>Page 4</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>          
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
