import React, { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [timeRemaining, setTimeRemaining] = useState("00:00:00");

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();

  let hoursUntilNextDay = 0;
  if (currentHour < 1) {
    hoursUntilNextDay = 1 - currentHour;
  } else {
    hoursUntilNextDay = 24 - currentHour;
  }

  useEffect(() => {
    let intervalId;
    setTimeRemaining(
      `${hoursUntilNextDay}:${60 - currentMinute}:${60 - currentSecond}`
    );
    intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        const [hours, minutes, seconds] = prevTime.split(":").map(Number);
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(intervalId);
          return "00:00:00";
        }
        if (seconds === 0) {
          if (minutes === 0) {
            return `${hours - 1 < 10 ? "0" + (hours - 1) : hours - 1}:59:59`;
          }
          return `${hours}:${
            minutes - 1 < 10 ? "0" + (minutes - 1) : minutes - 1
          }:59`;
        }
        return `${hours}:${minutes}:${
          seconds - 1 < 10 ? "0" + (seconds - 1) : seconds - 1
        }`;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div className>Offline Mode in {timeRemaining}</div>;
};
export default ThemeToggler;
