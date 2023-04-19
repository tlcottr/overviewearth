import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

type Props = {};

const Portfolio = (props: Props) => {
  return (
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
  );
};

export default Portfolio;
