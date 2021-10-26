import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://rsms.me" />
          <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png?v=1" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
          <link rel="manifest" href="/site.webmanifest?v=1" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.ico?v=1" />
          <meta name="apple-mobile-web-app-title" content="YOUniversity" />
          <meta name="application-name" content="YOUniversity" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="theme-color" content="#326a8c" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
