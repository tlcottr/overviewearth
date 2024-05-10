import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { isMobile } from "react-device-detect";

type Props = {};

const Header = (props: Props) => {
  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to track the input value
  const [email, setEmail] = useState("");
  // State to track subscription status
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(false);

  // Function to toggle the modal state (only if not subscribed)
  const toggleModal = () => {
    if (!isSubscribed) {
      setIsModalOpen(!isModalOpen);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful subscription (replace this with your actual submission logic)
    setIsSubscribed(true); // Mark the subscription as successful
    setEmail(""); // Optionally clear the email input
    setIsModalOpen(false); // Automatically close the modal
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
    <div className={`${styles.header} ${isFadeIn ? styles.fadeIn : ""}`}>
      <div className="absolute top w-full">
        <div className="p-7 flex flex-row-reverse">
          <div className={styles.header2}>
            <div
              onClick={() => {
                if (!isSubscribed && !isModalOpen) toggleModal();
              }}
              className={`cursor-pointer bg-[#EBE9DC] text-black uppercase flex flex-row justify-between items-center ${
                isModalOpen
                  ? "h-[30px] w-[400px] rounded-[4px] justify-between items-center"
                  : "h-[30px] w-[170px] rounded-[4px] font-bold hover:opacity-[75%]"
              } transition-all ${isSubscribed ? "pointer-events-none" : ""}`}
            >
              {isSubscribed ? (
                <span className="px-2 w-full flex flex-row items-center justify-center">
                  Thanks for signing up
                </span>
              ) : isModalOpen ? (
                <form
                  className="w-full flex items-center h-full"
                  onSubmit={handleSubmit}
                >
                  <input
                    placeholder="Enter your email"
                    className="w-full bg-[#EBE9DC] outline-none focus:outline-none px-2 rounded-l-[4px]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type={email ? "submit" : "button"}
                    onClick={email ? undefined : toggleModal}
                    className={`text-white h-full px-2 font-bold rounded-r-[4px] transition-all expo-out ${
                      email
                        ? "bg-[#2798FF] hover:bg-[#1F76C6]"
                        : "bg-[#B1B0AA] hover:bg-[#7C8185]"
                    }`}
                  >
                    {email ? "Submit" : "Close"}
                  </button>
                </form>
              ) : (
                <span className="px-2 w-full flex flex-row items-center justify-center">
                  Join our newsletter ↗
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
