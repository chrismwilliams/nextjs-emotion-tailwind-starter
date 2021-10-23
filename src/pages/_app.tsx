import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { GlobalStyles } from "twin.macro";
import { Global } from "@emotion/react";
import { ThemeProvider } from "next-themes";

import seoData from "@utils/next-seo.config";
import baseStyles from "@components/styled/baseStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Global styles={baseStyles} />
      <DefaultSeo {...seoData} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
