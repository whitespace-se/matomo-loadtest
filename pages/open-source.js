import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Matomo loadtest | Open source</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">Open source</h1>

        <div className="grid">
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

          <Link href="/">
            <a className="card">
              <h3>Matomo loadtest</h3>
              <p>
                The comprehensive range of features gives you actionable
                insights and a complete picture of your customers.
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
