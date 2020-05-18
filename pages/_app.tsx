import Head from 'next/head';

import '../styles/main.scss';

const Snigo = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="@snigo" />
      <meta name="apple-mobile-web-app-title" content="@snigo" />
      <meta name="theme-color" content="#fafeff" />
      <meta name="msapplication-navbutton-color" content="#fafeff" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/images/ninja-icon.svg" />
      <link rel="alternate icon" href="/images/ninja-icon-32.png" />
      <link rel="icon" sizes="128x128" href="/images/ninja-icon-128.png" />
      <link rel="apple-touch-icon" sizes="128x128" href="/images/ninja-icon-128.png" />
      <link rel="icon" sizes="192x192" href="/images/ninja-icon-192.png" />
      <link rel="apple-touch-icon" sizes="192x192" href="/images/ninja-icon-192.png" />
      <link rel="icon" sizes="256x256" href="/images/ninja-icon-256.png" />
      <link rel="apple-touch-icon" sizes="256x256" href="/images/ninja-icon-256.png" />
      <link rel="icon" sizes="384x384" href="/images/ninja-icon-384.png" />
      <link rel="apple-touch-icon" sizes="384x384" href="/images/ninja-icon-384.png" />
      <link rel="icon" sizes="512x512" href="/images/ninja-icon-512.png" />
      <link rel="apple-touch-icon" sizes="512x512" href="/images/ninja-icon-512.png" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default Snigo;
