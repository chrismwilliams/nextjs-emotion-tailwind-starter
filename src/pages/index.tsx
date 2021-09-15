import { NextSeo } from "next-seo";

import Layout from "@components/Layout";
import StyledHome from "@components/home/styled";

export default function Home() {
  return (
    <>
      <NextSeo title="Home" />
      <Layout>
        <StyledHome>
          <h1>Hello World</h1>
        </StyledHome>
      </Layout>
    </>
  );
}
