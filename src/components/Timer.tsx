"use client";

import React, { useEffect, useState } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTimestamp = 1712059200;
      const difference = targetTimestamp - Math.floor(Date.now() / 1000);

      if (difference > 0) {
        const hours = Math.floor(difference / 3600);
        const minutes = Math.floor((difference % 3600) / 60);
        const seconds = Math.floor(difference % 60);

        setTimeLeft({
          hours,
          minutes,
          seconds,
        });
      }
    };

    const countdownInterval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const { hours, minutes, seconds } = timeLeft;

  return (
    <div className="mx-auto mt-12 grid max-w-xs grid-cols-3 gap-0 md:mt-20 md:max-w-sm md:gap-12">
      <div>
        <h2 className="text-3xl font-semibold md:text-5xl">
          {hours < 10 ? `0${hours}` : hours}
        </h2>
        <span className="text-gray">HRS</span>
      </div>
      <div>
        <h2 className="text-3xl font-semibold md:text-5xl">
          {minutes < 10 ? `0${minutes}` : minutes}
        </h2>
        <span className="text-gray">MIN</span>
      </div>
      <div>
        <h2 className="text-3xl font-semibold md:text-5xl">
          {seconds < 10 ? `0${seconds}` : seconds}
        </h2>
        <span className="text-gray">SEC</span>
      </div>
    </div>
  );
}

export default Timer;
