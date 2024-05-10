import React, { useState } from "react";
import styles from "./styles.module.scss";

type Props = {};

const Header = (props: Props) => {
  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to track the input value
  const [email, setEmail] = useState("");

  // Function to toggle the modal state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform your submit action here, then clear the input and close the modal
    alert(`Email submitted: ${email}`);
    setEmail("");
    setIsModalOpen(false);
  };

  return (
    <div className="absolute top w-full">
      <div className="p-7 flex flex-row-reverse">
        <div className={styles.header}>
          <div
            onClick={() => {
              if (!isModalOpen) toggleModal();
            }}
            className={`cursor-pointer bg-[#EBE9DC] text-black uppercase flex flex-row justify-between items-center ${
              isModalOpen
                ? "h-[30px] w-[400px] rounded-[4px] justify-between items-center"
                : "h-[30px] w-[170px] rounded-[4px] font-bold hover:opacity-[75%]"
            } transition-all`}
          >
            {isModalOpen ? (
              <form className="w-full flex items-center h-full" onSubmit={handleSubmit}>
                <input
                  placeholder="Enter your email"
                  className="w-full bg-[#EBE9DC] outline-none focus:outline-none px-2 rounded-l-[4px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type={email ? "submit" : "button"}
                  onClick={email ? undefined : toggleModal}
                  className={`text-white h-full px-2 font-bold rounded-r-[4px] transition-all expo-out ${isModalOpen && email ? "bg-[#2798FF] hover:bg-[#1F76C6]" : "bg-[#B1B0AA] hover:bg-[#7C8185]"}`}
                >
                  {email ? "Submit" : "Close"}
                </button>
              </form>
            ) : (
              <span className="px-2">Join our newsletter ↗</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
