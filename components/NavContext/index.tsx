import React, { createContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <NavContext.Provider
      value={{
        showAbout,
        setShowAbout,
        showPortfolio,
        setShowPortfolio,
        showTeam,
        setShowTeam,
        showContact,
        setShowContact,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
