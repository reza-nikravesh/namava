import type { AppProps } from "next/app";
import Head from "next/head";
import "../scss/App.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png"/>
      </Head>
      <div dir="rtl">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
