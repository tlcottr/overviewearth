import React, { useContext } from "react";
import NavContext from "../NavContext";
import styles from "./styles.module.scss";
import Return from "./Return";
import { useDrag } from "@use-gesture/react";
import { isMobile } from "react-device-detect";

type Props = {};

const About = (props: Props) => {
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

  const handleSwipeRight = () => {
    setShowAbout(!showAbout);
    setShowPortfolio(false);
    setShowTeam(false);
    setShowContact(false);
  };

  const bind = useDrag(({ swipe: [swipeX] }) => {
    if (swipeX >= 0.1 && isMobile) {
      handleSwipeRight();
    }
  });

  return (
    <div className={styles.navContainer}>
      <div className={styles.arrowContainer}>
        <Return size={50} />
      </div>
      <div className={styles.container}>
        <span className={styles.border}>
          <h1 className={styles.title}>About</h1>
        </span>
        <div>
          <div>
            The “overview effect,” coined by author Frank White, is a profound
            experience that astronauts have when they see the Earth from space,
            feeling a sense of awe and interconnectedness with our planet. It
            inspires a deeper appreciation for the Earth and a desire to protect
            it. To put it simply, it’s the realization that this is all we’ve
            got.
          </div>
          <br></br>
          <div>
            At Overview, we are driven by this concept, investing in companies
            that are creating solutions to address climate change. Our mission
            is to support and partner with entrepreneurs who can unlock
            innovations that have the potential to transform industries and make
            our future more resilient and equitable for generations to come.
          </div>
        </div>
      </div>
      <div {...bind()} className={styles.swipe}></div>
    </div>
  );
};

export default About;
