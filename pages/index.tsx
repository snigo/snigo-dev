import Head from 'next/head';

const Index = () => (
  <div className="shell">
    <Head>
      <meta charSet="utf-8" />
      <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
      <title>@snigo: with love to web.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/images/ninja-icon.svg" />
      <link rel="alternate icon" href="/images/ninja-icon-32.png" />
    </Head>
    <div className="wrapper">
      <h1 className="title">Hi, I'm @snigo<span style={{color: 'var(--colors-blue-50'}}>.</span></h1>
      <p>I've accepted <a href="https://www.100daysofcode.com/" target="_blank" rel="noreferrer noopener">#100DaysOfCode</a> challenge and this is my day <span style={{color: 'var(--colors-pink-40'}}>1</span>.</p>
      <hr/>
      <div className="dummy-card">
        <div className="dummy-card-featured-image" />
        <div className="dummy-card-body">
          <h3>Problem:</h3>
          <p>Register domain name and publish this dummy screen on the Internet.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
