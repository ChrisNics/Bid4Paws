import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.gif" />
      </Head>
      <body className="debug-screens ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
