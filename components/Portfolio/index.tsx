import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Return from "./Return";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.container}>
        <span className={styles.border}>
          <h1 className={styles.title}>Portfolio</h1>
        </span>
        <div className={styles.portfolioGrid}>
          <div className={styles.portfolioItem}>
            <Image height={10} width={75} src={"/static/images/alga.png"} />
          </div>
          <div className={styles.portfolioItem}>
            <Image height={10} width={75} src={"/static/images/alga.png"} />
          </div>
          <div className={styles.portfolioItem}>
            <Image height={10} width={75} src={"/static/images/alga.png"} />
          </div>
          <div className={styles.portfolioItem}>
            <Image height={10} width={75} src={"/static/images/alga.png"} />
          </div>
          <div className={styles.portfolioItem}>
            <Image height={10} width={75} src={"/static/images/alga.png"} />
          </div>
          <div className={styles.portfolioItem}>
            <Image height={10} width={75} src={"/static/images/alga.png"} />
          </div>
          <div className={styles.portfolioItem}>
            <Image height={10} width={75} src={"/static/images/alga.png"} />
          </div>
          <div className={styles.portfolioItem}>
            <Image height={10} width={75} src={"/static/images/alga.png"} />
          </div>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <Return size={50} />
      </div>
    </div>
  );
};

export default Portfolio;
