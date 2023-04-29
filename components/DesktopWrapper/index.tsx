import React, { useContext } from "react";
import Nav from "../Nav";
import Contact from "../Connect";
import About from "../About";
import Portfolio from "../Portfolio";
import Team from "../Team";
import NavContext from "../NavContext";
import styles from "./styles.module.scss";
import Video from "../Video";

const DesktopWrapper: React.FC = () => {
  const navContext = useContext(NavContext) as {
    showAbout: boolean;
    showContact: boolean;
    showTeam: boolean;
    showPortfolio: boolean;
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.teamContainer}
          style={{
            transform: navContext.showTeam
              ? "translateY(0)"
              : "translateY(-100%)",
            opacity: navContext.showTeam ? 1 : 0,
          }}
        >
          <Team />
        </div>
        <div className={styles.horizontalContainer}>
          <div
            className={styles.portfolioContainer}
            style={{
              transform: navContext.showPortfolio
                ? "translateX(0)"
                : "translateX(-100%)",
              opacity: navContext.showPortfolio ? 1 : 0,
            }}
          >
            <Portfolio />
          </div>
          <div
            className={styles.navContainer}
            style={{
              transform:
                (navContext.showContact ? "translateY(-125%)" : "") +
                (navContext.showAbout ? " translateX(-115%)" : "") +
                (navContext.showTeam ? " translateY(125%)" : "") +
                (navContext.showPortfolio ? " translateX(115%)" : ""),
              opacity:
                navContext.showContact ||
                navContext.showAbout ||
                navContext.showTeam ||
                navContext.showPortfolio
                  ? 0
                  : 1,
            }}
          >
            <Nav />
          </div>
          <div
            className={styles.aboutContainer}
            style={{
              transform: navContext.showAbout
                ? "translateX(0)"
                : "translateX(100%)",
              opacity: navContext.showAbout ? 1 : 0,
            }}
          >
            <About />
          </div>
        </div>
        <div
          className={styles.contactContainer}
          style={{
            transform: navContext.showContact
              ? "translateY(0)"
              : "translateY(100%)",
            opacity: navContext.showContact ? 1 : 0,
          }}
        >
          <Contact />
        </div>
        <Video />
      </div>
    </>
  );
};

export default DesktopWrapper;
