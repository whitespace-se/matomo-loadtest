import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Matomo loadtest | No data limitations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">No data limitations</h1>
        <div className="grid">
          <p>
            With Matomo, what you can track and achieve is limitless. You’re not
            bound by the limitations tools like Google Analytics impose. Google
            Analytics can also quickly get very pricey once you reach a certain
            amount of traffic, users, goals, websites, segments. So you end up
            paying a premium or sacrifice getting the insights you need. With
            Matomo, the sky’s the limit – track as much data or as many
            websites/goals/segments as you want.
          </p>

          <a href="/" className="card">
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
