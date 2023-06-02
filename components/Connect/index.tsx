import React, { useContext, useState } from "react";
import NavContext from "../NavContext";
import styles from "./styles.module.scss";
import { LinkedInIcon, InstagramIcon, TwitterIcon } from "../Team/Social";
import Return from "./Return";
import Link from "next/link";
import { useDrag } from "@use-gesture/react";
import { isMobile } from "react-device-detect";

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
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("contact@overview.earth");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // reset after 2 seconds
  };

  const handleSwipeDown = () => {
    setShowAbout(false);
    setShowPortfolio(false);
    setShowTeam(false);
    setShowContact(!showContact);
  };

  const bind = useDrag(({ swipe: [swipeY] }) => {
    if (swipeY >= .1 && isMobile) {
      handleSwipeDown();
    }
  });
  return (
    <>
      <div className={styles.arrowContainer}>
        <Return size={50} />
      </div>
      <div className={styles.container} {...bind()}>
        <div className={styles.top}>
          <span className={styles.border}></span>
          <div className={styles.center}>
            <div onClick={handleCopy} className={styles.email}>
              {isCopied ? (
                <span className={styles.copied}>COPIED TO CLIPBOARD</span>
              ) : (
                <span>
                  contact<span className={styles.emailSymbol}>@</span>
                  overview.earth
                </span>
              )}
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
    </>
  );
};

export default Contact;
