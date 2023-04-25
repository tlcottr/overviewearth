import React from "react";
import { LinkedInIcon } from "./Social";
import { TwitterIcon } from "./Social";
import { InstagramIcon } from "./Social";
import styles from "./styles.module.scss";
import Return from "./Return";
import Link from "next/link";

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
              <Link
                href={"https://www.linkedin.com/in/lauren-singer-21336152/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.icon}>
                  <LinkedInIcon />
                </span>
              </Link>
              <Link
                href={
                  "https://twitter.com/Trashis4Tossers?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.icon}>
                  <TwitterIcon />
                </span>
              </Link>
              <Link
                href={"https://www.instagram.com/trashisfortossers/?hl=en"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.icon}>
                  <InstagramIcon />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <div>Kelsey Rudin</div>
              <div className={styles.role}>Managing Partner</div>
              <div className={styles.socialIcons}>
                <Link
                  href={"https://www.linkedin.com/in/kelsey-rudin-41623743/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.icon}>
                    <LinkedInIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>Julia Arnhold</div>
              <div className={styles.role}>Managing Partner</div>
              <div className={styles.socialIcons}>
                <Link
                  href={"https://www.linkedin.com/in/juliaarnhold/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.icon}>
                    <LinkedInIcon />
                  </span>
                </Link>
                <Link
                  href={"https://www.instagram.com/heyarnhold/?hl=en"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.icon}>
                    <InstagramIcon />
                  </span>
                </Link>
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
