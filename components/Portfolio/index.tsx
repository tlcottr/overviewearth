import React, { useState, useEffect, useContext } from "react";
import NavContext from "../NavContext";
import styles from "./styles.module.scss";
import Image from "next/image";
import Return from "./Return";
import Link from "next/link";
import { useDrag } from "@use-gesture/react";
import { isMobile } from "react-device-detect";

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

  // const handleSwipeLeft = () => {
  //   setShowAbout(false);
  //   setShowPortfolio(!showPortfolio);
  //   setShowTeam(false);
  //   setShowContact(false);
  // };

  // const bind = useDrag(({ swipe: [swipeX] }) => {
  //   if (swipeX <= 0.1 && isMobile) {
  //     handleSwipeLeft();
  //   }
  // });

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
      <div className={styles.container} /*{...bind()}*/>
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
        <div className={styles.portfolioHolder}>
          <div className={styles.portfolioGrid} /*{...bind()}*/>
            <Link href={"https://www.alga.bio/"} rel="" target="_blank">
              {isMobile ? (
                <>
                  <div className={styles.portfolioItem}>
                    <div className={styles.imageContainerMobile}>
                      <Image
                        height={10}
                        width={75}
                        src={"/static/images/alga2.png"}
                        alt="logo"
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
                      src={"/static/images/alga2.png"}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>Eliminating enteric methane emissions at-scale</p>
                  </div>
                </div>
              )}
            </Link>
            <Link
              href={"https://www.anthropogenic.com/"}
              rel=""
              target="_blank"
            >
              {isMobile ? (
                <>
                  <div className={styles.portfolioItem}>
                    <div className={styles.imageContainerMobileLong}>
                      <Image
                        height={10}
                        width={75}
                        src={"/static/images/anthropogenic.png"}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className={styles.textContainerMobile}>
                    <p>real-time impact monitoring</p>
                  </div>
                </>
              ) : (
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainerLonger}>
                    <Image
                      height={10}
                      width={75}
                      src={"/static/images/anthropogenic.png"}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>real-time impact monitoring</p>
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
                        alt="logo"
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
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>a single payment platform for EV drivers and fleets</p>
                  </div>
                </div>
              )}
            </Link>
            <Link href={"https://www.elio.earth/"} rel="" target="_blank">
              {isMobile ? (
                <>
                  <div className={styles.portfolioItem}>
                    <div className={styles.imageContainerMobile}>
                      <Image
                        height={10}
                        width={75}
                        src={"/static/images/elio.png"}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className={styles.textContainerMobile}>
                    <p>AI co-pilot for sustainable drug manufacturing</p>
                  </div>
                </>
              ) : (
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainer}>
                    <Image
                      height={10}
                      width={65}
                      src={"/static/images/elio.png"}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>AI co-pilot for sustainable drug manufacturing</p>
                  </div>
                </div>
              )}
            </Link>
            <Link href={"https://www.emvolon.com/"} rel="" target="_blank">
              {isMobile ? (
                <>
                  <div className={styles.portfolioItem}>
                    <div className={styles.imageContainerMobileLong}>
                      <Image
                        height={10}
                        width={75}
                        src={"/static/images/emvolon.png"}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className={styles.textContainerMobile}>
                    <p>
                      Converting Wasted Resources Into Valuable Liquid Chemicals
                    </p>
                  </div>
                </>
              ) : (
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainerLong}>
                    <Image
                      height={10}
                      width={75}
                      src={"/static/images/emvolon.png"}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>
                      Converting Wasted Resources Into Valuable Liquid Chemicals
                    </p>
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
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className={styles.textContainerMobile}>
                    <p>Low impact, better for you mylk</p>
                  </div>
                </>
              ) : (
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainerTall}>
                    <Image
                      height={10}
                      width={75}
                      src={"/static/images/mylk.png"}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>Low impact, better for you mylk</p>
                  </div>
                </div>
              )}
            </Link>
            <Link
              href={"https://highwoodemissions.com/"}
              rel=""
              target="_blank"
            >
              {isMobile ? (
                <>
                  <div className={styles.portfolioItem}>
                    <div className={styles.imageContainerMobileLong}>
                      <Image
                        height={10}
                        width={75}
                        src={"/static/images/highwood.png"}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className={styles.textContainerMobile}>
                    <p>Emissions Software For The Oil And Gas Industry</p>
                  </div>
                </>
              ) : (
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainerLong}>
                    <Image
                      height={10}
                      width={75}
                      src={"/static/images/highwood.png"}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>Emissions Software For The Oil And Gas Industry</p>
                  </div>
                </div>
              )}
            </Link>
            <Link
              href={"https://www.miraterrasoil.com/"}
              rel=""
              target="_blank"
            >
              {isMobile ? (
                <>
                  <div className={styles.portfolioItem}>
                    <div className={styles.imageContainerMobileLong}>
                      <Image
                        height={10}
                        width={75}
                        src={"/static/images/miraterra.png"}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className={styles.textContainerMobile}>
                    <p>
                      Making Soil Intelligence More Accurate And Less Expensive
                    </p>
                  </div>
                </>
              ) : (
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainerLong}>
                    <Image
                      height={10}
                      width={75}
                      src={"/static/images/miraterra.png"}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>
                      Making Soil Intelligence More Accurate And Less Expensive
                    </p>
                  </div>
                </div>
              )}
            </Link>
            <Link href={"https://www.mittilabs.earth"} rel="" target="_blank">
              {isMobile ? (
                <>
                  <div className={styles.portfolioItem}>
                    <div className={styles.imageContainerMobileLong}>
                      <Image
                        height={10}
                        width={75}
                        src={"/static/images/mittilabs.png"}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className={styles.textContainerMobile}>
                    <p>Decarbonizing Smallholder Farming</p>
                  </div>
                </>
              ) : (
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainerLong}>
                    <Image
                      height={10}
                      width={75}
                      src={"/static/images/mittilabs.png"}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>Decarbonizing Smallholder Farming</p>
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
                        alt="logo"
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
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>Changing the physics of air conditioning</p>
                  </div>
                </div>
              )}
            </Link>
            <Link href={"https://carboninsurance.co/"} rel="" target="_blank">
              {isMobile ? (
                <>
                  <div className={styles.portfolioItem}>
                    <div className={styles.imageContainerMobile}>
                      <Image
                        height={10}
                        width={75}
                        src={"/static/images/oka.png"}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className={styles.textContainerMobile}>
                    <p>carbon credit insurance</p>
                  </div>
                </>
              ) : (
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainer}>
                    <Image
                      height={10}
                      width={60}
                      src={"/static/images/oka.png"}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>carbon credit insurance</p>
                  </div>
                </div>
              )}
            </Link>
            <Link href={"https://www.reynko.com/"} rel="" target="_blank">
              {isMobile ? (
                <>
                  <div className={styles.portfolioItem}>
                    <div className={styles.imageContainerMobile}>
                      <Image
                        height={10}
                        width={75}
                        src={"/static/images/reynko.png"}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className={styles.textContainerMobile}>
                    <p>Solving the turbulence problem</p>
                  </div>
                </>
              ) : (
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainer}>
                    <Image
                      height={10}
                      width={75}
                      src={"/static/images/reynko.png"}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>Solving the turbulence problem</p>
                  </div>
                </div>
              )}
            </Link>
            <Link href={"https://gosteward.com/"} rel="" target="_blank">
              {isMobile ? (
                <>
                  <div className={styles.portfolioItem}>
                    <div className={styles.imageContainerMobileLong}>
                      <Image
                        height={10}
                        width={75}
                        src={"/static/images/steward.png"}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className={styles.textContainerMobile}>
                    <p>Regenerative farming Credit Financing</p>
                  </div>
                </>
              ) : (
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainerLong}>
                    <Image
                      height={10}
                      width={75}
                      src={"/static/images/steward.png"}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>Regenerative farming Credit Financing</p>
                  </div>
                </div>
              )}
            </Link>
            <Link href={"https://www.texture.energy/"} rel="" target="_blank">
              {isMobile ? (
                <>
                  <div className={styles.portfolioItem}>
                    <div className={styles.imageContainerMobileLong}>
                      <Image
                        height={10}
                        width={75}
                        src={"/static/images/texture.png"}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className={styles.textContainerMobile}>
                    <p>distributed energy in one place</p>
                  </div>
                </>
              ) : (
                <div className={styles.portfolioItem}>
                  <div className={styles.imageContainerLong}>
                    <Image
                      height={10}
                      width={75}
                      src={"/static/images/texture.png"}
                      alt="logo"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>distributed energy in one place</p>
                  </div>
                </div>
              )}
            </Link>
          </div>
        </div>
        <div /*{...bind()}*/ className={styles.swipe}></div>
      </div>
      <div className={styles.arrowContainer}>
        <Return size={50} />
      </div>
    </div>
  );
};

export default Portfolio;
