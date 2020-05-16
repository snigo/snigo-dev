import Head from 'next/head';

const Index = () => (
  <div className="wrapper">
    <Head>
      <meta charSet="utf-8" />
      <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
      <title>@snigo: with love to web.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/images/ninja-icon.svg" />
      <link rel="alternate icon" href="/images/ninja-icon-32.png" />
    </Head>
    <h1 className="title">Hi, I'm snigo</h1>
    <p>I've accepted #100DaysOfCode challenge and this is my day 1.</p>
    <hr/>
    <h3>Problem:</h3>
    <p>Register domain name and publish this dummy screen on the Internet.</p>
  </div>
);

export default Index;
