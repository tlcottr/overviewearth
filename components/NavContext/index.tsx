import React, { createContext, useState } from "react";

interface NavContextType {
  showAbout: boolean;
  setShowAbout: React.Dispatch<React.SetStateAction<boolean>>;
  showPortfolio: boolean;
  setShowPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
  showTeam: boolean;
  setShowTeam: React.Dispatch<React.SetStateAction<boolean>>;
  showContact: boolean;
  setShowContact: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavContext = createContext<NavContextType>({
  showAbout: false,
  setShowAbout: () => {},
  showPortfolio: false,
  setShowPortfolio: () => {},
  showTeam: false,
  setShowTeam: () => {},
  showContact: false,
  setShowContact: () => {},
});

export const NavProvider: React.FC = ({ children }) => {
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
