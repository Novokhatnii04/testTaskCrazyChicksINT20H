import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

function Timer({ endTime }) {
  const calculateTimeLeft = () => {
    const difference = endTime - Date.now();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <React.Fragment>
      <div className={styles.timer}>
        Auction ends in: {timeLeft.days} days {timeLeft.hours} hours{" "}
        {timeLeft.minutes} minutes
      </div>
    </React.Fragment>
  );
}

export default Timer;
