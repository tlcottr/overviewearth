/**
 * @typedef {import("@prismicio/client").Content.TeamSectionSlice} TeamSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamSectionSlice>} TeamSectionProps
 * @param {TeamSectionProps}
 */
import React, { useContext } from "react";
import NavContext from "../../components/NavContext";
import { LinkedInIcon } from "../../components/Team/Social";
import { TwitterIcon } from "../../components/Team/Social";
import { InstagramIcon } from "../../components/Team/Social";
import styles from "../../components/Team/styles.module.scss";
import Return from "../../components/Team/Return";
import Link from "next/link";
import { useDrag } from "@use-gesture/react";
import { isMobile } from "react-device-detect";
import { PrismicRichText } from "@prismicio/react";

const Team = ({ slice }) => {
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

  const handleSwipeUp = () => {
    setShowAbout(false);
    setShowPortfolio(false);
    setShowTeam(!showTeam);
    setShowContact(false);
  };

  const bind = useDrag(({ swipe: [swipeY] }) => {
    if (swipeY <= 0 && isMobile) {
      handleSwipeUp();
    }
  });
  return (
    <div className={styles.container} {...bind()}>
      <div className="top">
        <span className={styles.border}>
          <h1 className={styles.title}>Team</h1>
        </span>
        <div className={styles.teamGrid}>
          <div>
            <div>
              <div>
                <PrismicRichText field={slice.primary.name} />
              </div>
              <div className={styles.role}>
                <PrismicRichText field={slice.primary.role} />
              </div>
              <div className={styles.socialIcons}>
                <Link
                  href={"https://www.linkedin.com/in/juliaarnhold/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.icon}>
                    <LinkedInIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <PrismicRichText field={slice.primary.nameTwo} />
              </div>
              <div className={styles.role}>
                <PrismicRichText field={slice.primary.roleTwo} />
              </div>
              <div className={styles.socialIcons}>
                <Link
                  href={"https://www.linkedin.com/in/kelsey-rudin-41623743/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.icon}>
                    <LinkedInIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <PrismicRichText field={slice.primary.nameThree} />
            </div>
            <div className={styles.role}>
              <PrismicRichText field={slice.primary.roleThree} />
            </div>
            <div className={styles.socialIcons}>
              <Link
                href={"https://www.linkedin.com/in/lauren-singer-21336152/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.icon}>
                  <LinkedInIcon />
                </span>
              </Link>
              <Link
                href={
                  "https://twitter.com/Trashis4Tossers?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.icon}>
                  <TwitterIcon />
                </span>
              </Link>
              <Link
                href={"https://www.instagram.com/trashisfortossers/?hl=en"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.icon}>
                  <InstagramIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <Return size={50} />
      </div>
      <div {...bind()} className={styles.swipe}></div>
    </div>
  );
};

export default Team;
