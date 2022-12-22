import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [timeRemaining, setTimeRemaining] = useState("00:00:00");

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();

    let intervalId;

    if (currentHour >= 21 || currentHour < 9) {
      // it's 9pm or later, or before 9am
      setTheme("dark");
      const hoursRemaining = (9 - currentHour + 24) % 24;
      const minutesRemaining = 60 - currentMinute;
      const secondsRemaining = 60 - currentSecond;
      setTimeRemaining(
        `${hoursRemaining < 10 ? "0" + hoursRemaining : hoursRemaining}:${
          minutesRemaining < 10 ? "0" + minutesRemaining : minutesRemaining
        }:${
          secondsRemaining < 10 ? "0" + secondsRemaining : secondsRemaining
        }`
      );
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          const [hours, minutes, seconds] = prevTime.split(":").map(Number);
          if (minutes === 0 && hours === 0 && seconds === 0) {
            clearInterval(intervalId);
            setTheme("light");
            return "00:00:00";
          }
          if (seconds === 0) {
            if (minutes === 0) {
              return `${
                hours === 1
                  ? "00"
                  : hours - 1 < 10
                  ? "0" + (hours - 1)
                  : hours - 1
              }:59:59`;
            }
            return `${hours}:${
              minutes === 1
                ? "00"
                : minutes - 1 < 10
                ? "0" + (minutes - 1)
                : minutes - 1
            }:59`;
          }
          return `${hours}:${minutes}:${
            seconds === 1
              ? "00"
              : seconds - 1 < 10
              ? "0" + (seconds - 1)
              : seconds - 1
          }`;
        });
      }, 1000);
    } else {
      // it's between 9am and 9pm
      setTheme("light");
      const hoursRemaining = (21 - currentHour + 24) % 24;
      const minutesRemaining = 60 - currentMinute;
      const secondsRemaining = 60 - currentSecond;
      setTimeRemaining(
        `${hoursRemaining < 10 ? "0" + hoursRemaining : hoursRemaining}:${
          minutesRemaining < 10 ? "0" + minutesRemaining : minutesRemaining
        }:${
          secondsRemaining < 10 ? "0" + secondsRemaining : secondsRemaining
        }`
      );
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          const [
hours, minutes, seconds] = prevTime.split(":").map(Number);
          if (minutes === 0 && hours === 0 && seconds === 0) {
            clearInterval(intervalId);
            setTheme("dark");
            return "00:00:00";
          }
          if (seconds === 0) {
            if (minutes === 0) {
              return `${
                hours === 1
                  ? "00"
                  : hours - 1 < 10
                  ? "0" + (hours - 1)
                  : hours - 1
              }:59:59`;
            }
            return `${hours}:${
              minutes === 1
                ? "00"
                : minutes - 1 < 10
                ? "0" + (minutes - 1)
                : minutes - 1
            }:59`;
          }
          return `${hours}:${minutes}:${
            seconds === 1
              ? "00"
              : seconds - 1 < 10
              ? "0" + (seconds - 1)
              : seconds - 1
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
