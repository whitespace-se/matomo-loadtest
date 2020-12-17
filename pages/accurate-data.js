import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Matomo loadtest | 100% accurate data</title>
        <link rel="icon" href={`${process.env.BASE_PATH}/favicon.ico`} />
      </Head>

      <main className="main">
        <h1 className="title">100% accurate data</h1>

        <div className="grid">
          <h2>
            Data sampling can cost your business time, resources, and money
          </h2>
          <p>
            If you’re using Google Analytics (GA), you could be making costly
            business decisions based on inaccurate reports. This is because GA
            implements data sampling once you’ve collected a certain amount of
            data. So what you get in a GA report is an estimate rather than the
            full picture.
          </p>
          <p>
            While there is a calculation applied to get a sample that gives you
            good enough insights, we don’t encourage you to settle for just
            “good enough” data. To make confident, data-driven decisions, you’ll
            want the actual facts.
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
