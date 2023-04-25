import React from "react";
import styles from "./styles.module.scss";
import { LinkedInIcon, InstagramIcon, TwitterIcon } from "../Team/Social";
import Return from "./Return";
import Link from "next/link";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.arrowContainer}>
        <Return size={50} />
      </div>
      <div className={styles.container}>
        <span className={styles.border}>
          <h1 className={styles.title}>Connect</h1>
        </span>
        <div className={styles.center}>
          <div>contact@overview.earth</div>
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
              href={"https://www.linkedin.com/company/overview-capital/about/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.icon}>
                <LinkedInIcon />
              </span>
            </Link>
            <Link
              href={"https://twitter.com/OverviewCapital"}
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
