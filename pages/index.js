import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matomo loadtest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://github.com/whitespace-se/matomo-loadtest">
            Matomo loadtest
          </a>
        </h1>

        <div className={styles.grid}>
          <a href="/open-source" className={styles.card}>
            <h3>Open source</h3>
            <p>
              Minimise risk with a secure, transparent platform that’s been
              thoroughly tested by hundreds of contributors.{" "}
            </p>
          </a>

          <a href="/accurate-data" className={styles.card}>
            <h3>100% accurate data</h3>
            <p>
              No data sampling means you can make impactful decisions based on
              100% accurate reporting.
            </p>
          </a>

          <a href="/tracking-personal-data" className={styles.card}>
            <h3>Tracking personal data</h3>
            <p>
              Securely track personal data in accordance with privacy laws. This
              option is unavailable with GA.
            </p>
          </a>

          <a href="/no-data-limitations" className={styles.card}>
            <h3>No data limitations</h3>
            <p>
              Get an unlimited number of websites, users and segments. There’s
              also no limitation on how much data you store.
            </p>
          </a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://whitespace.se?utm_source=matomo-loadtest&utm_medium=default-template&utm_campaign=matomo-loadtest"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/matomo.svg" alt="Whitespace Matomo Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
