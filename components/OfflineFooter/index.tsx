import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const OfflineFooter = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [countdown, setCountdown] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText("contact@overview.earth");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // reset after 2 seconds
  };

  useEffect(() => {
    // Get the current time
    const now = new Date();

    // Calculate the next 5am time
    const next5am = new Date();
    next5am.setHours(5);
    next5am.setMinutes(0);
    next5am.setSeconds(0);
    if (now.getHours() >= 5) {
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
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.footer}>
      <p className={styles.popupAnchor}>Back online in {countdown}</p>
      <p onClick={handleCopy} className={styles.email}>
        {isCopied ? (
          <span className={styles.copied}>COPIED TO CLIPBOARD</span>
        ) : (
          "contact@overview.earth"
        )}
      </p>
    </div>
  );
};

export default OfflineFooter;
