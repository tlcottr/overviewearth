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
        <Nav />
      </div>
      <Video />
    </>
  );
};

export default MobileWrapper;
