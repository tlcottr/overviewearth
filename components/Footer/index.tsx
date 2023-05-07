import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { isMobile } from "react-device-detect";
import Exit from "./Exit";

type Props = {
  onClose: () => void;
};

const Popup = ({ onClose }: Props) => {
  const [countdown, setCountdown] = useState("00:00:00");
  const [dataLoad, setDataLoad] = useState(0);

  const handleExit = () => {
    onClose();
  };

  useEffect(() => {
    // Get the current time
    const now = new Date();

    // Calculate the next 5am time
    const next5am = new Date();
    next5am.setHours(1);
    next5am.setMinutes(0);
    next5am.setSeconds(0);
    if (now.getHours() >= 1) {
      next5am.setDate(next5am.getDate() + 1);
    }

    // Update the countdown every second
    const interval = setInterval(() => {
      const diff = next5am.getTime() - new Date().getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdown(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    }, 0);

    // Update the data load every 10 milliseconds
    let intervalDataLoad: ReturnType<typeof setInterval>;
    if (dataLoad < 573) {
      intervalDataLoad = setInterval(() => {
        setDataLoad((prevDataLoad) => prevDataLoad + 1);
      }, 2);
    }

    // Clear the intervals when the component unmounts
    return () => {
      clearInterval(interval);
      clearInterval(intervalDataLoad);
    };
  }, [dataLoad]);

  return (
    <div className={styles.popup}>
      <div className={styles.popupHeadline}>
        <h2 className={styles.popupTitle}>
          Our pledge is to faciliate a renewable and resilient future. Here are
          some of the way our site minimizes its footprint.
        </h2>
      </div>
      <div className={styles.popupContent}>
        <div className={styles.popupSection}>
          <div className={styles.popupQuestion}>GREEN ENERGY POLICY</div>
          <div className={styles.popupAnswer}>
            Our hosting platform, Vercel, uses a “serverless architecture” that
            consumes less energy and reduces emissions.
          </div>
        </div>
        <div className={styles.popupSection}>
          <div className={styles.popupQuestion}>NIGHT MODE</div>
          <div className={styles.popupAnswer}>
            To further reduce its impact, overview.earth goes “offline” between
            the hours of 1am and 5am.
          </div>
        </div>
        <div className={styles.popupSection}>
          <div className={styles.popupQuestion}>CLIMATE STRIKE LICENSE</div>
          <div className={styles.popupAnswer}>
            Our software license prohibits the use of our code by applications
            or companies that threaten to accelerate climate change.
          </div>
        </div>
        <div className={styles.popupSection}>
          <div className={styles.popupQuestion}>RECYCLABLE CODE</div>
          <div className={styles.popupAnswer}>
            This site uses React code, meaning components are reused across the
            site. Additionally, our component library is open source, giving
            other sites the ability to install and use our code.
          </div>
        </div>
        <div className={styles.popupSection}>
          <div className={styles.popupQuestion}>ENERGY FOOTPRINT</div>
          <div className={styles.popupAnswer}>
            This site is lighter than 97% of other webpages.
          </div>
        </div>
      </div>
      <div className={styles.popupFootline}>
        <div className={styles.dataLoad}>Data load: {dataLoad}kb</div>
        <span onClick={handleExit}>
          <Exit />
        </span>
        <div className={styles.nightMode}>Night mode in {countdown}</div>
      </div>
    </div>
  );
};

const Footer = (props: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("contact@overview.earth");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // reset after 2 seconds
  };

  const handlePopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(
      () => {
        setIsFadeIn(true);
      },
      isMobile ? 9000 : 11000
    );
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`${styles.footer} ${isFadeIn ? styles.fadeIn : ""}`}>
      <p onClick={handlePopup} className={styles.popupAnchor}>
        overview.earth is a low-impact site.
      </p>

      <p onClick={handleCopy} className={styles.email}>
        {isCopied ? (
          <span className={styles.copied}>COPIED TO CLIPBOARD</span>
        ) : (
          "contact@overview.earth"
        )}
      </p>

      {isPopupVisible && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default Footer;
