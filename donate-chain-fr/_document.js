import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add the favicon link */}
          <link rel="icon" href="/favicon.ico" />
          {/* You can also add other formats if needed */}
          {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
          {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
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
