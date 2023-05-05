import React, { useContext, useState, useEffect } from "react";
import Nav from "../Nav";
import Contact from "../Connect";
import About from "../About";
import Portfolio from "../Portfolio";
import Team from "../Team";
import NavContext from "../NavContext";
import styles from "./styles.module.scss";
import Video from "../Video";

const MobileWrapper: React.FC = () => {
  const navContext = useContext(NavContext) as {
    showAbout: boolean;
    showContact: boolean;
    showTeam: boolean;
    showPortfolio: boolean;
  };

  const [showMain, setShowMain] = useState(false);
  const [showMainFade, setShowMainFade] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(false);
      setTimeout(() => {
        setShowMainFade(true);
      }, 1000); // Wait 1 second for preMainContainer to finish fading out
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
      setTimeout(() => {
        setShowText(false);
      }, 4000);
    }, 3200);
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
              <Team />
            </div>
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
            <div
              className={styles.contactContainer}
              style={{
                transform: navContext.showContact
                  ? "translateY(0)"
                  : "translateY(-100%)",
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
              transition: "opacity 1s linear",
              animationDelay: "3000",
            }}
          >
            <h1
              className={styles.preMainText}
              style={{
                opacity: showText ? 1 : 0,
                transition: "opacity 1s linear",
                animationDelay: "3000",
              }}
            >
              We are Overview, a venture capital firm investing in climate
              change solutions.
            </h1>
          </div>
        )}
        <div
          className={styles.navContainer}
          style={{
            transform:
              (navContext.showAbout ? "translateX(-100%)" : "") +
              (navContext.showPortfolio ? "translateX(100%)" : "") +
              (navContext.showTeam ? "translateY(100%)" : "") +
              (navContext.showContact ? "translateY(-100%)" : ""),
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
      </div>
      <Video />
    </>
  );
};

export default MobileWrapper;
