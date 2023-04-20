import React from "react";
import styles from "./styles.module.scss";
import { LinkedInIcon, InstagramIcon, TwitterIcon } from "../Team/Social";
import Return from "./Return";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className={styles.container}>
      <Return size={50}/>
      <span className={styles.border}>
        <h1 className={styles.title}>Connect</h1>
      </span>
      <div className={styles.center}>
        <div>contact@overview.earth</div>
        <div className={styles.socialIcons}>
          <span className={styles.icon}>
            <LinkedInIcon />
          </span>
          <span className={styles.icon}>
            <TwitterIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
