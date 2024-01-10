"use client";

import { useEffect, useState } from "react";

export default function Home() {
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
    <main className="px-4">
      <div className="mx-auto max-w-2xl text-center pt-14 md:pt-20">
        <h1 className="text-3xl font-semibold md:text-6xl">
          Join our <span className="gradient-text">wait list</span>
        </h1>
        <p className="mt-8 mb-10 font-medium text-gray md:text-lg">
          Be the first to know when exciting new challenges are announced! Join
          our waiting list and stay ahead in the world of thrilling predictions
          and great rewards
        </p>
        {/*Large screen form*/}
        <div className="hidden w-full rounded-full gradient-bg p-[2px] md:block">
          <form className="flex w-full gap-4 rounded-full bg-black p-4">
            <input
              required={true}
              type="email"
              placeholder="Enter your email here..."
              className="bg-[#303030] rounded-full px-6 py-5 outline-0 placeholder:text-gray flex-1"
            />
            <button
              type="submit"
              className="rounded-full px-12 py-5 transition gradient-bg hover:opacity-80"
            >
              Submit
            </button>
          </form>
        </div>
        {/*Timer*/}
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
      </div>
      {/*Dashboard image on big screen*/}
      <div className="hidden justify-center pt-20 md:flex">
        <div className="relative max-w-5xl">
          <img
            className="relative z-20"
            src="/images/dashboard.webp"
            alt="dashboard image"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 z-50 h-full w-full image-overlay"></div>
          <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-10 blob"></div>
        </div>
      </div>
      {/*Form on mobile*/}
      <form className="mt-12">
        <div className="block w-full rounded-full gradient-bg p-[2px] md:hidden">
          <div className="flex w-full gap-4 rounded-full bg-black p-4">
            <input
              required={true}
              type="email"
              placeholder="Enter your email here..."
              className="bg-[#303030] rounded-full px-6 py-5 outline-0 placeholder:text-gray flex-1"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full rounded-full py-5 transition gradient-bg hover:opacity-80 md:hidden"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
