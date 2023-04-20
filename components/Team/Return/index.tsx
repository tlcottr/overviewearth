import React, { useContext } from "react";
import NavContext from "../../NavContext";
import styles from "./styles.module.scss";

interface Props {
  size: number;
}

const Arrow: React.FC<Props> = ({ size }) => {
  const width = (size / 87) * 24;
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 24 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9394 0.939339L1.39341 10.4853C0.807621 11.0711 0.807621 12.0208 1.39341 12.6066C1.97919 13.1924 2.92894 13.1924 3.51473 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 87L13.5 2L10.5 2L10.5 87L13.5 87Z"
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

  const handleTeamClick = () => {
    setShowAbout(false);
    setShowPortfolio(false);
    setShowTeam(!showTeam);
    setShowContact(false);
  };

  return (
    <div className={styles.container} onClick={handleTeamClick}>
      <span className={styles.return}>Back</span>
      <span className={styles.arrow}>
        <Arrow size={size} />
      </span>
    </div>
  );
};

export default Return;
