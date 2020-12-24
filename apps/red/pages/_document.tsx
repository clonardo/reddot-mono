import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Document template for all pages
 */
export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="referrer" content="no-referrer" />
          <style>{`
            .page {
              height: 100vh;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
          <style
            id="transition-without-ssr"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: ' *, *::before, *::after { transition: none!important; }'
            }}
          />
        </body>
      </Html>
    );
  }
}
