import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Matomo loadtest | Tracking personal data</title>
        <link rel="icon" href={`${process.env.BASE_PATH}/favicon.ico`} />
      </Head>

      <main className="main">
        <h1 className="title">Tracking personal data</h1>

        <div className="grid">
          <p>
            When you use the{" "}
            <Link href="https://developer.matomo.org/api-reference/tracking-javascript">
              <a>Matomo (Piwik) JavaScript Tracker</a>
            </Link>{" "}
            Matomo will by default track the following information:
          </p>
          <ul>
            <li>
              User IP address (see also:{" "}
              <Link href="https://matomo.org/docs/privacy-how-to/">
                <a>IP anonymisation</a>
              </Link>
              )
            </li>
            <li>
              Optional{" "}
              <Link href="https://matomo.org/docs/user-id/">
                <a>User ID</a>
              </Link>
            </li>
            <li>Date and time of the request</li>
            <li>Title of the page being viewed (Page Title)</li>
            <li>URL of the page being viewed (Page URL)</li>
            <li>
              URL of the page that was viewed prior to the current page
              (Referrer URL)
            </li>
            <li>Screen resolution being used</li>
            <li>Time in local user’s timezone</li>
            <li>
              Files that were clicked and downloaded (
              <Link href="https://matomo.org/faq/new-to-piwik/faq_47/">
                <a>Download</a>
              </Link>
              )
            </li>
            <li>
              Links to an outside domain that were clicked (
              <Link href="https://matomo.org/faq/new-to-piwik/faq_71/">
                <a>Outlink</a>
              </Link>
              )
            </li>
            <li>
              Pages generation time (the time it takes for webpages to be
              generated by the webserver and then downloaded by the user:{" "}
              <Link href="https://matomo.org/docs/page-speed/">
                <a>Page speed</a>
              </Link>
              )
            </li>
            <li>
              Location of the user: country, region, city, approximate latitude
              and longitude (
              <Link href="https://matomo.org/docs/geo-locate/">
                <a>Geolocation</a>
              </Link>
              )
            </li>
            <li>
              Main Language of the browser being used (
              <code>Accept-Language</code> header)
            </li>
            <li>
              User Agent of the browser being used (<code>User-Agent</code>{" "}
              header)
            </li>
          </ul>
          <p>
            From the User-Agent, we use our{" "}
            <Link
              href="https://github.com/piwik/device-detector"
              onclick="javascript:window.open('https://github.com/piwik/device-detector'); return false;"
            >
              <a>Universal Device Detection library</a>
            </Link>{" "}
            to detect the browser, operating system, device used (desktop,
            tablet, mobile, tv, cars, console, etc.), brand and model.
          </p>
          <p>
            Some information is also stored in{" "}
            <Link href="https://matomo.org/faq/general/faq_146/">
              <a>first party cookies</a>
            </Link>{" "}
            and then collected by Matomo:
          </p>
          <Link href="/">
            <a name="Matomo loadtest" className="card">
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
