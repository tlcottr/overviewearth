import React, { useContext } from "react";
import NavContext from "../NavContext";
import styles from "./styles.module.scss";
import { LinkedInIcon, InstagramIcon, TwitterIcon } from "../Team/Social";
import Return from "./Return";
import Link from "next/link";
import { useDrag } from "@use-gesture/react";

type Props = {};

const Contact = (props: Props) => {
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

  const handleSwipeDown = () => {
    setShowAbout(false);
    setShowPortfolio(false);
    setShowTeam(false);
    setShowContact(!showContact);
  };

  const bind = useDrag(({ swipe: [swipeY] }) => {
    console.log("swipeY:", swipeY);
    if (swipeY >= 0) {
      handleSwipeDown();
    }
  });
  return (
    <div className={styles.container} {...bind()}>
      <div className={styles.arrowContainer}>
        <Return size={50} />
      </div>
      <div className={styles.top}>
        <span className={styles.border}></span>
        <div className={styles.center}>
          <div>
            contact<span className={styles.emailSymbol}>@</span>overview.earth
          </div>
          <div className={styles.socialIcons}>
            <Link
              href={"https://www.instagram.com/overview.capital/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.icon}>
                <InstagramIcon />
              </span>
            </Link>
            <Link
              href={"https://www.linkedin.com/company/overviewcapital/about/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.icon}>
                <LinkedInIcon />
              </span>
            </Link>
            <Link
              href={"https://twitter.com/overviewcap"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.icon}>
                <TwitterIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
