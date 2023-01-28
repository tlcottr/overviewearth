import Layout from "../components/Layout";
import LandingLayout from "../components/LandingLayout";
import { SiteProvider } from "../components/context/SiteContext";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../static/faviconLatest.ico" />
        <title>Overview</title>
        <meta name="title" content="Overview" />
        <meta
          name="description"
          content="Overview is a venture capital form investing in climate change solutions
"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.overview.earth" />
        <meta property="og:title" content="Overview" />
        <meta
          property="og:description"
          content="Overview is a venture capital form investing in climate change solutions
"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://github.com/tlcottr/portfolio/blob/main/img/ShareOverview.png?raw=true"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://github.com/tlcottr/portfolio/blob/main/img/ShareOverview.png?raw=true"
        />
        <meta property="twitter:title" content="Overview" />
        <meta
          property="twitter:description"
          content="Overview is a venture capital form investing in climate change solutions
"
        />
        <meta
          property="twitter:image"
          content="https://github.com/tlcottr/portfolio/blob/main/img/ShareOverview.png?raw=true"
        />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </Head>
      <SiteProvider>{/*<Layout></Layout>*/}</SiteProvider>
    </>
  );
}
