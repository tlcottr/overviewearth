import React, { useContext, useState, useEffect } from "react";
import Nav from "../Nav";
import Contact from "../Connect";
import About from "../About";
import Portfolio from "../Portfolio";
import Team from "../Team";
import NavContext from "../NavContext";
import styles from "./styles.module.scss";
import Video from "../Video";

const DesktopWrapper: React.FC = ({ teamData, aboutData }) => {
  const navContext = useContext(NavContext) as {
    showAbout: boolean;
    showContact: boolean;
    showTeam: boolean;
    showPortfolio: boolean;
  };

  const [showMain, setShowMain] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showMainFade, setShowMainFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
      setTimeout(() => {
        setShowMainFade(true);
      }, 1000); // Wait 1 second for preMainContainer to finish fading out
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
      setTimeout(() => {
        setShowText(false);
      }, 9000);
    }, 5100);
    return () => clearTimeout(textTimer);
  }, []);
  return (
    <>
      <div className={styles.container}>
        {showMain ? (
          <div
            className={styles.mainContainer}
            style={{
              opacity: showMainFade ? 1 : 0,
              transition:
                showMainFade && showMain ? "opacity 2s linear" : "none",
            }}
          >
            <div
              className={styles.teamContainer}
              style={{
                transform: navContext.showTeam
                  ? "translateY(0)"
                  : "translateY(-100%)",
                opacity: navContext.showTeam ? 1 : 0,
              }}
            >
              <Team teamData={teamData} />
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
                <About aboutData={aboutData} />
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
          </div>
        ) : (
          <div
            className={styles.preMainContainer}
            style={{
              opacity: 1,
              zIndex: 2,
            }}
          >
            <h1
              className={styles.preMainText}
              style={{
                opacity: showText ? 1 : 0,
                transition: "opacity 2s linear .7s",
              }}
            >
              Overview invests in businesses mitigating methane and other super
              pollutants at the earliest stages.
            </h1>
          </div>
        )}
        <Video />
      </div>
    </>
  );
};

export default DesktopWrapper;
