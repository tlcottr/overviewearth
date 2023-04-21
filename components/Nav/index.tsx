import React, { useContext } from "react";
import Logo from "./Logo";
import LongArrow from "./LongArrow";
import ShortArrow from "./ShortArrow";
import styles from "./styles.module.scss";
import NavContext from "../NavContext";

type Props = {};

const Nav = (props: Props) => {
  const {
    showAbout,
    setShowAbout,
    showPortfolio,
    setShowPortfolio,
    showTeam,
    setShowTeam,
    showContact,
    setShowContact,
  } = useContext(NavContext);

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    setShowPortfolio(false);
    setShowTeam(false);
    setShowContact(false);
  };

  const handlePortfolioClick = () => {
    setShowPortfolio(!showPortfolio);
    setShowAbout(false);
    setShowTeam(false);
    setShowContact(false);
  };

  const handleTeamClick = () => {
    setShowTeam(!showTeam);
    setShowAbout(false);
    setShowPortfolio(false);
    setShowContact(false);
  };

  const handleContactClick = () => {
    setShowContact(!showContact);
    setShowAbout(false);
    setShowPortfolio(false);
    setShowTeam(false);
  };

  return (
    <div className={styles.navPosition}>
      <div className={styles.container}>
        <div className={styles.verticalContainer}>
          <span
            className={`${styles.flipUp} ${
              showTeam ? styles.activeLinkVertical : ""
            }`}
            onClick={handleTeamClick}
          >
            <a className={styles.linkVertical}>
              <ShortArrow size={200} />
              <span className={styles.linkVerticalFlip}>Team</span>
            </a>
          </span>
          <div className={styles.horizontalContainer}>
            <span
              className={`${styles.flipLeft} ${
                showPortfolio ? styles.activeLinkHorizontal : ""
              }`}
              onClick={handlePortfolioClick}
            >
              <a className={styles.linkHorizontal}>
                <LongArrow size={300} />
                <span className={styles.linkHorizontalFlip}>Portfolio</span>
              </a>
            </span>
            <Logo />
            <span
              className={`${styles.flipRight} ${
                showAbout ? styles.activeLinkHorizontal : ""
              }`}
              onClick={handleAboutClick}
            >
              <a className={styles.linkHorizontal}>
                <LongArrow size={300} />
                <span className={styles.linkHorizontalInner}>About</span>
              </a>
            </span>
          </div>
          <span
            className={`${styles.flipDown} ${
              showContact ? styles.activeLinkVertical : ""
            }`}
            onClick={handleContactClick}
          >
            <a className={styles.linkVertical}>
              <ShortArrow size={20} />
              <span className={styles.linkVerticalInner}>Connect</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
