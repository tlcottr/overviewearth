import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { isMobile } from "react-device-detect";

type Props = {};

const Header = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(false);

  const toggleModal = () => {
    if (!isSubscribed) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setIsModalOpen(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsFadeIn(true);
    }, isMobile ? 9000 : 11000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`${styles.header} ${isFadeIn ? styles.fadeIn : ""}`}>
      <div className="absolute top-0 left-0 right-0 w-full">
        <div className="p-[1rem] md:p-7 flex flex-row font-inconsolata w-full">
          <div className={styles.header2}>
            <div
              onClick={() => {
                if (!isSubscribed && !isModalOpen) toggleModal();
              }}
              className={`cursor-pointer bg-[#EBE9DC] text-black uppercase flex flex-row justify-between items-center ${
                isModalOpen
                  ? "h-[24px] md:h-[30px] w-full md:w-[400px] rounded-[4px] justify-between items-center"
                  : "h-[24px] md:h-[30px] w-[130px] md:w-[170px] rounded-[4px] hover:opacity-[75%]"
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
                        ? "bg-[#8D8D8C] hover:bg-[#7B7B7B]"
                        : "bg-[#B1B0AA] hover:bg-[#7C8185]"
                    }`}
                  >
                    {email ? "Submit" : "Close"}
                  </button>
                </form>
              ) : (
                <span className="px-2 w-full flex flex-row items-center justify-center text-[0.55rem] md:text-xs select-none">
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
