import React, { useEffect, useState, useContext } from "react";

const ThemeToggler = () => {
  const [state, setState] = useState("normal");
  const [timeRemaining, setTimeRemaining] = useState("00:00:00");

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();
  const oppState = currentHour >= 8 && currentHour < 1 ? "ONLINE" : "OFFLINE";

  useEffect(() => {
    let intervalId;

    if (currentHour >= 1 && currentHour < 8) {
      // it's between 1am and 8am
      setState("offline");
      const hoursRemaining = (8 - currentHour + 24) % 24;
      const minutesRemaining = 60 - currentMinute;
      const secondsRemaining = 60 - currentSecond;
      setTimeRemaining(
        `${hoursRemaining < 10 ? "0" + hoursRemaining : hoursRemaining}:${
          minutesRemaining < 10 ? "0" + minutesRemaining : minutesRemaining
        }:${secondsRemaining < 10 ? "0" + secondsRemaining : secondsRemaining}`
      );
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          const [hours, minutes, seconds] = prevTime.split(":").map(Number);
          if (minutes === 0 && hours === 0 && seconds === 0) {
            clearInterval(intervalId);
            setState("normal");
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
      // it's between 8am and 1am
      setState("normal");
      const hoursRemaining = (1 - currentHour + 24) % 24;
      const minutesRemaining = 60 - currentMinute;
      const secondsRemaining = 60 - currentSecond;
      setTimeRemaining(
        `${hoursRemaining < 10 ? "0" + hoursRemaining : hoursRemaining}:${
          minutesRemaining < 10 ? "0" + minutesRemaining : minutesRemaining
        }:${secondsRemaining < 10 ? "0" + secondsRemaining : secondsRemaining}`
      );
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          const [hours, minutes, seconds] = prevTime.split(":").map(Number);
          if (minutes === 0 && hours === 0 && seconds === 0) {
            clearInterval(intervalId);
            setState("offline");
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
    <div className>
      {oppState} Mode in {timeRemaining}
    </div>
  );
};
export default ThemeToggler;
