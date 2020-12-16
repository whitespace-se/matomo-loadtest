import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matomo loadtest | Open source</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Open source</h1>

        <div className={styles.grid}>
          <p>
            For Matomo, the “free” in “free software” is used primarily in
            reference to freedom and not to price – although Matomo core is
            available free of charge.&nbsp;
          </p>
          <p>
            The most important thing about Matomo is that it confers rights of
            software freedom on the people who install and use it. It is those
            freedoms that enable the Matomo community to grow; to share a
            collective experience; and to contribute their expertise to improve
            Matomo.
          </p>

          <a href="/" className={styles.card}>
            <h3>Matomo loadtest</h3>
            <p>
              The comprehensive range of features gives you actionable insights
              and a complete picture of your customers.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
