import Head from "next/head";
import { isMobile } from "react-device-detect";
import DesktopWrapper from "../components/DesktopWrapper";
import MobileWrapper from "../components/MobileWrapper";

export default function Home({ page }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../static/faviconLatest.ico" />
        <title>Overview</title>
        <meta name="title" content="Overview" />
        <meta
          name="description"
          content="At Overview, we invest in climate change solutions at the earliest stages.
"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.overview.earth" />
        <meta property="og:title" content="Overview" />
        <meta
          property="og:description"
          content="At Overview, we invest in climate change solutions at the earliest stages.
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
          content="At Overview, we invest in climate change solutions at the earliest stages.
"
        />
        <meta
          property="twitter:image"
          content="https://github.com/tlcottr/portfolio/blob/main/img/ShareOverview.png?raw=true"
        />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </Head>
      {isMobile ? <MobileWrapper /> : <DesktopWrapper />}
    </>
  );
}
