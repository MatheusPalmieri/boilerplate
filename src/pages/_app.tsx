import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Advanced - Boilerplate</title>

        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#06092E" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Style Components"
        />
      </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
}

export default App;
