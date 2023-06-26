import React from "react";
import styles from "./styles.module.scss";

interface Props {}

const Arrow: React.FC<Props> = () => {
  return (
    <svg
      width="auto"
      height="180"
      viewBox="0 0 30 483"
      fill="none"
      className={styles.regArrow}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6017 482.398C14.3736 483.17 15.6252 483.17 16.3972 482.398L28.9771 469.818C29.7491 469.046 29.7491 467.794 28.9771 467.022C28.2052 466.25 26.9536 466.25 26.1816 467.022L14.9994 478.204L3.81729 467.022C3.04532 466.25 1.79372 466.25 1.02175 467.022C0.249783 467.794 0.249781 469.046 1.02175 469.818L13.6017 482.398ZM13.0233 -2.43644e-06L13.0227 481L16.9762 481L16.9768 2.43644e-06L13.0233 -2.43644e-06Z"
        fill="#BFBAAE"
      />
    </svg>
  );
};

const ArrowMobileShort: React.FC<Props> = () => {
  return (
    <svg
      width="auto"
      height="100"
      viewBox="0 0 30 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.smallArrow}
    >
      <path
        d="M13.6025 201.398C14.3744 202.17 15.626 202.17 16.398 201.398L28.978 188.818C29.7499 188.046 29.7499 186.794 28.978 186.022C28.206 185.25 26.9544 185.25 26.1824 186.022L15.0003 197.204L3.81811 186.022C3.04615 185.25 1.79454 185.25 1.02257 186.022C0.250607 186.794 0.250605 188.046 1.02257 188.818L13.6025 201.398ZM13.0238 -2.43644e-06L13.0235 200L16.977 200L16.9772 2.43644e-06L13.0238 -2.43644e-06Z"
        fill="#BFBAAE"
      />
    </svg>
  );
};

const MobileLong: React.FC<Props> = () => {
  return (
    <>
      <Arrow />
      <ArrowMobileShort />
    </>
  );
};

export default MobileLong;
