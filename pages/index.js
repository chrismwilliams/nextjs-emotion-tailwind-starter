import { NextSeo } from "next-seo";

import { Layout, Hero, CardGrid } from "../components/elements";

export default function Home() {
  return (
    <>
      <NextSeo title="Home" />
      <Layout>
        <Hero />
        <CardGrid />
      </Layout>
    </>
  );
}
