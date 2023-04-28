import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Return from "./Return";
import Link from "next/link";

type Props = {};

const Portfolio = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);

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
      <div className={styles.container}>
        <div className={styles.portfolioTop}>
          <span className={styles.border}>
            <h1 className={styles.title}>Portfolio</h1>
          </span>
          <div className={styles.reachOut}>
            Is your company addressing climate change?<br></br> We’d love to
            talk. contact@overview.earth
          </div>
        </div>
        <div className={styles.portfolioGrid}>
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
                  <p>Making mylk the new milk.</p>
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
                  <p>Making mylk the new milk.</p>
                </div>
              </div>
            )}
          </Link>
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
                  <p>Eliminating enteric methane emissions at-scale.</p>
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
                  <p>Eliminating enteric methane emissions at-scale.</p>
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
                  <p>Changing the physics of air conditioning.</p>
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
                  <p>Changing the physics of air conditioning.</p>
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
                  <p>Changing the physics of air conditioning.</p>
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
                  <p>Changing the physics of air conditioning.</p>
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
