import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Matomo loadtest</title>
        <link rel="icon" href={`${process.env.BASE_PATH}/favicon.ico`} />
      </Head>

      <main className="main">
        <h1 className="title">
          <Link href="https://github.com/whitespace-se/matomo-loadtest">
            <a>Matomo loadtest</a>
          </Link>
        </h1>

        <div className="grid">
          <Link href="/open-source">
            <a className="card">
              <h3>Open source</h3>
              <p>
                Minimise risk with a secure, transparent platform that’s been
                thoroughly tested by hundreds of contributors.{" "}
              </p>
            </a>
          </Link>

          <Link href="/accurate-data">
            <a className="card">
              <h3>100% accurate data</h3>

              <p>
                No data sampling means you can make impactful decisions based on
                100% accurate reporting.
              </p>
            </a>
          </Link>

          <Link href="/tracking-personal-data">
            <a className="card">
              <h3>Tracking personal data</h3>
              <p>
                Securely track personal data in accordance with privacy laws.
                This option is unavailable with GA.
              </p>
            </a>
          </Link>

          <Link href="/no-data-limitations">
            <a className="card">
              <h3>No data limitations</h3>
              <p>
                Get an unlimited number of websites, users and segments. There’s
                also no limitation on how much data you store.
              </p>
            </a>
          </Link>
        </div>
      </main>

      {/* <footer className="footer">
        <a
          href="https://whitespace.se?utm_source=matomo-loadtest&utm_medium=default-template&utm_campaign=matomo-loadtest"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/matomo.svg" alt="Whitespace Matomo Logo" className="logo} ">
        </Link>
      </footer> */}
    </div>
  );
}
