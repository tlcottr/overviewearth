import React from "react";
import styles from "./styles.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
      <p>overview.earth is a low-impact site.</p>
      <p>contact@overview.earth</p>
    </div>
  );
};

export default Footer;
