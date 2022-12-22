import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [timeRemaining, setTimeRemaining] = useState("00:00");

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    let intervalId;

    if (currentHour >= 21 || currentHour < 9) {
      // it's 9pm or later, or before 9am
      setTheme("dark");
      const hoursRemaining = (9 - currentHour + 24) % 24;
      const minutesRemaining = 60 - currentMinute;
      setTimeRemaining(
        `${hoursRemaining < 10 ? "0" + hoursRemaining : hoursRemaining}:${
          minutesRemaining < 10 ? "0" + minutesRemaining : minutesRemaining
        }`
      );
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          const [hours, minutes] = prevTime.split(":").map(Number);
          if (minutes === 0 && hours === 0) {
            clearInterval(intervalId);
            setTheme("light");
            return "00:00";
          }
          if (minutes === 0) {
            return `${
              hours === 1
                ? "00"
                : hours - 1 < 10
                ? "0" + (hours - 1)
                : hours - 1
            }:59`;
          }
          return `${hours}:${
            minutes === 1
              ? "00"
              : minutes - 1 < 10
              ? "0" + (minutes - 1)
              : minutes - 1
          }`;
        });
      }, 1000);
    } else {
      // it's between 9am and 9pm
      setTheme("light");
      const hoursRemaining = (21 - currentHour + 24) % 24;
      const minutesRemaining = 60 - currentMinute;
      setTimeRemaining(
        `${hoursRemaining < 10 ? "0" + hoursRemaining : hoursRemaining}:${
          minutesRemaining < 10 ? "0" + minutesRemaining : minutesRemaining
        }`
      );
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          const [hours, minutes] = prevTime.split(":").map(Number);
          if (minutes === 0 && hours === 0) {
            clearInterval(intervalId);
            setTheme("dark");
            return "00:00";
          }
          if (minutes === 0) {
            return `${
              hours === 1
                ? "00"
                : hours - 1 < 10
                ? "0" + (hours - 1)
                : hours - 1
            }:59`;
          }
          return `${hours}:${
            minutes === 1
              ? "00"
              : minutes - 1 < 10
              ? "0" + (minutes - 1)
              : minutes - 1
          }`;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={theme}>
      {theme === "light" ? "Dark" : "Light"} Mode in {timeRemaining}
    </div>
  );
};
export default ThemeToggler;
