import { createContext, useState, useEffect } from "react";

const SiteContext = createContext("normal");

const SiteProvider = ({ children }) => {
  const [state, setState] = useState("normal");

  // initialize state value
  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 8 && currentHour < 1) {
      setState("normal");
    } else {
      setState("offline");
    }
  }, []);

  return <SiteContext.Provider value={state}>{children}</SiteContext.Provider>;
};

export { SiteProvider, SiteContext };
