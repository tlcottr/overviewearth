import React, { useState } from "react";
import styles from "./styles.module.scss";
import Exit from "./Exit";

type Props = {
  onClose: () => void;
};

const Popup = ({ onClose }: Props) => {
  const handleExit = () => {
    onClose();
  };

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
            This site is lighter than 97% of other webpages. Real-time energy
            use is displayed in the footer.
          </div>
        </div>
      </div>
      <div className={styles.popupFootline}>
        <div>Data load: 573kb</div>
        <span onClick={handleExit}>
          <Exit />
        </span>
        <div>Night mode in 04:33:21</div>
      </div>
    </div>
  );
};

const Footer = (props: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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

  return (
    <div className={styles.footer}>
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
