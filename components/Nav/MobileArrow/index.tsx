import React from "react";
import styles from "./styles.module.scss";

interface Props {}

const Arrow: React.FC<Props> = () => {
  return (
    <svg
      width="20"
      height="auto"
      viewBox="0 0 67 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.flip}
    >
      <path
        d="M0.602234 13.6022C-0.169739 14.3742 -0.169739 15.6258 0.602234 16.3978L13.1822 28.9777C13.9541 29.7497 15.2057 29.7497 15.9777 28.9777C16.7497 28.2057 16.7497 26.9541 15.9777 26.1821L4.79554 15L15.9777 3.81784C16.7497 3.04587 16.7497 1.79427 15.9777 1.0223C15.2057 0.250336 13.9541 0.250336 13.1822 1.0223L0.602234 13.6022ZM67 13.0233L2 13.0233L2 16.9767L67 16.9767L67 13.0233Z"
        fill="#BFBAAE"
      />
    </svg>
  );
};

const MobileArrow = (Props) => {
  return <Arrow />;
};

export default MobileArrow;
