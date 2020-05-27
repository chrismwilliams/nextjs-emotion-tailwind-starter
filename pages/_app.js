import { useEffect, useRef } from "react";
import Router from "next/router";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import "tailwindcss/dist/base.css";

import SEO from "../utils/next-seo.config";
import { initGA, logPageView } from "../utils/analytics";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  let ga_initialised = useRef(false);

  useEffect(() => {
    if (!ga_initialised.current) {
      initGA();
      ga_initialised.current = true;
    }

    const handleRouteChange = (url) => {
      logPageView(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
