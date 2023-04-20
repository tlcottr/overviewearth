import React from "react";
import styles from "./styles.module.scss";

type Props = {};

const Exit = (props: Props) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.81543 7.81543L17.9523 17.9523" stroke="#ECE9DC" />
      <path d="M7.81543 17.9523L17.9523 7.81543" stroke="#ECE9DC" />
      <circle cx="13" cy="13" r="12.5" stroke="#ECE9DC" />
    </svg>
  );
};

export default Exit;
