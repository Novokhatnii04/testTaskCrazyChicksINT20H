import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

function Timer({ days, startDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(startDate).getTime() + days * 24 * 60 * 60 * 1000 - new Date().getTime();

    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [days, startDate]);

  return (
    <React.Fragment>
      <div className={styles.timer}>
        Auction ends in: {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes
      </div>
    </React.Fragment>
  );
}

export default Timer;
