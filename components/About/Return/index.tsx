import React, { useContext } from "react";
import NavContext from "../../NavContext";
import styles from "./styles.module.scss";
import { isMobile } from "react-device-detect";

interface Props {
  size: number;
}

const Arrow: React.FC<Props> = ({ size }) => {
  const height = (size / 87) * 24;
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 87 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M86.0607 13.0607C86.6464 12.4749 86.6464 11.5251 86.0607 10.9394L76.5147 1.39341C75.9289 0.807625 74.9792 0.807625 74.3934 1.39341C73.8076 1.9792 73.8076 2.92895 74.3934 3.51473L82.8787 12L74.3934 20.4853C73.8076 21.0711 73.8076 22.0208 74.3934 22.6066C74.9792 23.1924 75.9289 23.1924 76.5147 22.6066L86.0607 13.0607ZM-2.62268e-07 13.5L85 13.5L85 10.5L2.62268e-07 10.5L-2.62268e-07 13.5Z"
        fill="#BFBAAE"
      />
    </svg>
  );
};

const Return: React.FC<Props> = ({ size }) => {
  const {
    showAbout,
    setShowAbout,
    showPortfolio,
    setShowPortfolio,
    showTeam,
    setShowTeam,
    showContact,
    setShowContact,
  } = useContext(NavContext);

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    setShowPortfolio(false);
    setShowTeam(false);
    setShowContact(false);
  };

  return (
    <div className={styles.container} onClick={handleAboutClick}>
      <span className={styles.arrow}>
        {isMobile ? "" : <Arrow size={size} />}
      </span>
      <span className={styles.return}>Back</span>
    </div>
  );
};

export default Return;
