import React, { useState, useEffect, useContext } from "react";
import NavContext from "../NavContext";
import styles from "./styles.module.scss";
import Image from "next/image";
import Return from "./Return";
import Link from "next/link";
import { useDrag } from "@use-gesture/react";

type Props = {};

const Portfolio = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
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

  const handleSwipeLeft = () => {
    setShowAbout(false);
    setShowPortfolio(!showPortfolio);
    setShowTeam(false);
    setShowContact(false);
  };

  const bind = useDrag(({ swipe: [swipeX] }) => {
    console.log("swipeX:", swipeX);
    if (swipeX <= 0) {
      handleSwipeLeft();
    }
  });

  const handleCopy = () => {
    navigator.clipboard.writeText("contact@overview.earth");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // reset after 2 seconds
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <div className={styles.navContainer}>
      <div className={styles.container} {...bind()}>
        <div className={styles.portfolioTop}>
          <span className={styles.border}>
            <h1 className={styles.title}>Portfolio</h1>
          </span>
          <div className={styles.reachOut}>
            <p>
              Is your company addressing climate change?<br></br>
              {isMobile ? "" : ""} We’d love to talk. <br></br>
              <span onClick={handleCopy} className={styles.email}>
                {isCopied ? (
                  <span className={styles.copied}>COPIED TO CLIPBOARD</span>
                ) : (
                  "contact@overview.earth"
                )}
              </span>
            </p>
          </div>
        </div>
        <div className={styles.portfolioGrid}>
          <Link href={"https://www.alga.bio/"} rel="" target="_blank">
            {isMobile ? (
              <>
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainerMobile}>
                    <Image
                      height={10}
                      width={75}
                      src={"/static/images/alga.png"}
                    />
                  </div>
                </div>
                <div className={styles.textContainerMobile}>
                  <p>Eliminating enteric methane emissions at-scale</p>
                </div>
              </>
            ) : (
              <div className={styles.portfolioItem}>
                <div className={styles.imageContainer}>
                  <Image
                    height={10}
                    width={75}
                    src={"/static/images/alga.png"}
                  />
                </div>
                <div className={styles.textContainer}>
                  <p>Eliminating enteric methane emissions at-scale</p>
                </div>
              </div>
            )}
          </Link>
          <Link href={"https://thebluedot.co"} rel="" target="_blank">
            {isMobile ? (
              <>
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainerMobile}>
                    <Image
                      height={10}
                      width={75}
                      src={"/static/images/bluedot.png"}
                    />
                  </div>
                </div>
                <div className={styles.textContainerMobile}>
                  <p>a single payment platform for EV drivers and fleets</p>
                </div>
              </>
            ) : (
              <div className={styles.portfolioItem}>
                <div className={styles.imageContainer}>
                  <Image
                    height={10}
                    width={75}
                    src={"/static/images/bluedot.png"}
                  />
                </div>
                <div className={styles.textContainer}>
                  <p>a single payment platform for EV drivers and fleets</p>
                </div>
              </div>
            )}
          </Link>
          <Link href={"https://goodmylk.co/"} rel="" target="_blank">
            {isMobile ? (
              <>
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainerMobile}>
                    <Image
                      height={10}
                      width={75}
                      src={"/static/images/mylk.png"}
                    />
                  </div>
                </div>
                <div className={styles.textContainerMobile}>
                  <p>Making mylk the new milk</p>
                </div>
              </>
            ) : (
              <div className={styles.portfolioItem}>
                <div className={styles.imageContainer}>
                  <Image
                    height={10}
                    width={75}
                    src={"/static/images/mylk.png"}
                  />
                </div>
                <div className={styles.textContainer}>
                  <p>Making mylk the new milk</p>
                </div>
              </div>
            )}
          </Link>
          <Link href={"https://www.mojavehvac.com/"} rel="" target="_blank">
            {isMobile ? (
              <>
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainerMobile}>
                    <Image
                      height={10}
                      width={75}
                      src={"/static/images/mojave.png"}
                    />
                  </div>
                </div>
                <div className={styles.textContainerMobile}>
                  <p>Changing the physics of air conditioning</p>
                </div>
              </>
            ) : (
              <div className={styles.portfolioItem}>
                <div className={styles.imageContainer}>
                  <Image
                    height={10}
                    width={75}
                    src={"/static/images/mojave.png"}
                  />
                </div>
                <div className={styles.textContainer}>
                  <p>Changing the physics of air conditioning</p>
                </div>
              </div>
            )}
          </Link>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <Return size={50} />
      </div>
    </div>
  );
};

export default Portfolio;
