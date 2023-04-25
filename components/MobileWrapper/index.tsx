import React, { useContext } from "react";
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

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.teamContainer}
          style={{
            transform: navContext.showTeam
              ? "translateY(0)"
              : "translateY(-100%)",
          }}
        >
          <Team />
        </div>
        <div
          className={styles.navContainer}
          style={{
            transform:
              (navContext.showContact ? "translateY(-100%)" : "") +
              (navContext.showAbout ? " translateX(-100%)" : "") +
              (navContext.showTeam ? " translateY(100%)" : "") +
              (navContext.showPortfolio ? " translateX(100%)" : ""),
          }}
        >
          <Nav />
        </div>
        <Video />
      </div>
    </>
  );
};

export default MobileWrapper;
