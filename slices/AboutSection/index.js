/**
 * @typedef {import("@prismicio/client").Content.AboutSectionSlice} AboutSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSectionSlice>} AboutSectionProps
 * @param {AboutSectionProps}
 */
import styles from "../../components/About/styles.module.scss"
import Return from "../../components/About/Return";
import { useContext } from "react";
import React from "react";
import NavContext from "../../components/NavContext";
import { useDrag } from "@use-gesture/react";
import { isMobile } from "react-device-detect";
import { PrismicRichText } from "@prismicio/react"

const AboutSection = ({ slice }) => {
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
      <div className={styles.container} {...bind()}>
        <span className={styles.border}>
          <h1 className={styles.title}>About</h1>
        </span>
        <div className={styles.aboutHolder}>
          <div>
          <PrismicRichText field={slice.primary.aboutBodyParagraphOne} />
          </div>
          <br></br>
          <div>
          <PrismicRichText field={slice.primary.aboutBodyParagraphTwo} />
          </div>
        </div>
        <div {...bind()} className={styles.swipe}></div>
      </div>
    </div>
  );
};

export default AboutSection;
