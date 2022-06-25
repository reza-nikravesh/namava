import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import "../scss/App.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div dir="rtl">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
