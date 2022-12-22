import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(theme === "dark" ? true : false);

  const handleToggle = () => {
    setChecked(!checked);
    setTheme(checked ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [theme]);
  return (
    <div className="flex flex-row justify-between items-center">
      {checked ? (
        <div className="bg-[color:var(--primary)] border-black border border-solid h-4 w-4 rounded-full mr-2"></div>
      ) : (
        <div className="border-[color:var(--primary)] border border-solid h-4 w-4 rounded-full mr-2"></div>
      )}
      {checked ? (
        <div>
          <span className="pr-2 cursor-pointer opacity-25 text-[color:var(--primary)]" onClick={() => handleToggle()}>
            Dark
          </span>
          /
          <span
            className="pl-2 cursor-pointer text-[color:var(--primary)]"
            onClick={() => handleToggle()}
          >
            Light
          </span>
        </div>
      ) : (
        <div>
          <span
            className="pr-2 cursor-pointer text-[color:var(--primary)]"
            onClick={() => handleToggle()}
          >
            Dark
          </span>
          /
          <span className="pl-2 cursor-pointer opacity-25 text-[color:var(--primary)]" onClick={() => handleToggle()}>
            Light
          </span>
        </div>
      )}
    </div>
  );
};

export default Toggle;
