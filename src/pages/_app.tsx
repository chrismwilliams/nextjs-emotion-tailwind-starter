import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { GlobalStyles } from "twin.macro";
import { Global } from "@emotion/react";

import "@fontsource/aleo";
import seoData from "@utils/next-seo.config";
import baseStyles from "@components/styled/baseStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Global styles={baseStyles} />
      <DefaultSeo {...seoData} />
      <Component {...pageProps} />
    </>
  );
}
