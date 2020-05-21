import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Igor Snitkin",
              "url": "https://snigo.dev",
              "image": "https://www.gravatar.com/avatar/b43b85f1edcc02b4c2a76fc12bfa3f16?s=512",
              "sameAs": [
                "https://github.com/snigo/",
                "https://twitter.com/snigosayshi"
              ],
              "jobTitle": "Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "@snigo"
              }  
            }`,
          }}
        />
      </Html>
    );
  }
}

export default MyDocument;
