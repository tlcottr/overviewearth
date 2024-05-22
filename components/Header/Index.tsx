import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { isMobile } from "react-device-detect";
import { subscribe } from "../../pages/api/subscribeService";
import { ClipLoader } from "react-spinners";

type Props = {};

const Header = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const toggleModal = () => {
    if (!isSubscribed) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await subscribe(email);
      setIsSubscribed(true);
      setEmail("");
      setIsModalOpen(false);
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000); // Reset after 3 seconds
    } catch (error) {
      setError("Subscription failed. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
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
      <div className="absolute top-0 left-0 right-0 w-full">
        <div className="p-[1rem] md:p-7 flex flex-row font-inconsolata w-full">
          <div className={styles.header2}>
            <div
              onClick={() => {
                if (!isSubscribed && !isModalOpen) toggleModal();
              }}
              className={`cursor-pointer ${
                error ? "bg-red-50" : "bg-[#EBE9DC]"
              } text-black uppercase flex flex-row justify-between items-center transition-all expo-out ${
                isModalOpen
                  ? "h-[24px] md:h-[30px] w-full md:w-[400px] rounded-[4px] justify-between items-center"
                  : "h-[24px] md:h-[30px] w-[130px] md:w-[170px] rounded-[4px] font-medium hover:opacity-[75%]"
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
                    className="w-full bg-transparent outline-none focus:outline-none px-2 rounded-l-[4px]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setError(null)}
                  />
                  <button
                    type={email ? "submit" : "button"}
                    onClick={email ? undefined : toggleModal}
                    className={`text-white h-full px-2 font-bold rounded-r-[4px] transition-all expo-out flex flex-col items-center justify-center ${
                      error
                        ? "bg-red-500 hover:bg-red-600"
                        : email
                        ? "bg-[#8D8D8C] hover:bg-[#7B7B7B]"
                        : "bg-[#B1B0AA] hover:bg-[#7C8185]"
                    }`}
                  >
                    {isLoading ? (
                      <ClipLoader size={20} color={"#FFFFFF"} />
                    ) : error ? (
                      "Retry"
                    ) : email ? (
                      "Submit"
                    ) : (
                      "Close"
                    )}{" "}
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
