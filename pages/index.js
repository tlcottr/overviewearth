import Head from "next/head";
import Nav from "../components/Nav";
import Contact from "../components/Connect";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import styles from "../styles/Home.module.scss";
import { useContext } from "react";
import NavContext from "../components/NavContext";

export default function Home() {
  const { showAbout } = useContext(NavContext);
  const { showContact } = useContext(NavContext);
  const { showTeam } = useContext(NavContext);
  const { showPortfolio } = useContext(NavContext);
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
      <div className={styles.container}>
        <div
          className={styles.teamContainer}
          style={{
            transform: showTeam ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          <Team />
        </div>
        <div className={styles.horizontalContainer}>
          <div
            className={styles.portfolioContainer}
            style={{
              transform: showPortfolio ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <Portfolio />
          </div>
          <div
            className={styles.navContainer}
            style={{
              transform:
                (showContact ? "translateY(-100%)" : "") +
                (showAbout ? " translateX(-100%)" : "") +
                (showTeam ? " translateY(100%)" : "") +
                (showPortfolio ? " translateX(100%)" : ""),
            }}
          >
            <Nav />
          </div>
          <div
            className={styles.aboutContainer}
            style={{
              transform: showAbout ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <About />
          </div>
        </div>
        <div
          className={styles.contactContainer}
          style={{
            transform: showContact ? "translateY(0)" : "translateY(100%)",
          }}
        >
          <Contact />
        </div>
      </div>
    </>
  );
}
