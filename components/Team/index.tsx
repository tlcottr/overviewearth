import React from "react";
import { LinkedInIcon } from "./Social";
import { TwitterIcon } from "./Social";
import { InstagramIcon } from "./Social";
import styles from "./styles.module.scss";
import Return from "./Return";

type Props = {};

const Team = (props: Props) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.container}>
        <span className={styles.border}>
          <h1 className={styles.title}>Team</h1>
        </span>
        <div className={styles.teamGrid}>
          <div>
            <div>Lauren Singer</div>
            <div className={styles.role}>Managing Partner</div>
            <div className={styles.socialIcons}>
              <span className={styles.icon}>
                <LinkedInIcon />
              </span>
              <span className={styles.icon}>
                <TwitterIcon />
              </span>
              <span className={styles.icon}>
                <InstagramIcon />
              </span>
            </div>
          </div>
          <div>
            <div>
              <div>Kelsey Rudin</div>
              <div className={styles.role}>Managing Partner</div>
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
          <div>
            <div>
              <div>Julia Arnhold</div>
              <div className={styles.role}>Managing Partner</div>
              <div className={styles.socialIcons}>
                <span className={styles.icon}>
                  <InstagramIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <Return size={50} />
      </div>
    </div>
  );
};

export default Team;
