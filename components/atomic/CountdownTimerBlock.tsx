"use client";

import React, { useState, useEffect } from "react";
import { LeafFlourish } from "../decorations/Illustrations";

export type CountdownTimerBlockProps = {
  targetDate?: string;
  showFlourish?: boolean;
};

export const CountdownTimerBlock: React.FC<CountdownTimerBlockProps> = ({
  targetDate = "2027-09-18T15:00:00",
  showFlourish = true,
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      suppressHydrationWarning
      className="relative flex items-center justify-center gap-3 sm:gap-6 my-2 px-4 select-none"
    >
      {showFlourish && (
        <div className="hidden xs:block sm:block text-[#b3392d]">
          <LeafFlourish flip />
        </div>
      )}

      <div className="flex flex-col items-center">
        {/* Digits with colons: 136 : 05 : 51 : 31 */}
        <div className="flex items-center text-3xl sm:text-4xl md:text-5xl font-mono font-medium tracking-wider text-[#b3392d]">
          <span>{String(timeLeft.days).padStart(2, "0")}</span>
          <span className="mx-1 text-[#b3392d]/60 font-sans">:</span>
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="mx-1 text-[#b3392d]/60 font-sans">:</span>
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="mx-1 text-[#b3392d]/60 font-sans">:</span>
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div>

        {/* Sub labels */}
        <div className="grid grid-cols-4 w-full text-[10px] sm:text-xs tracking-[0.2em] font-semibold text-[#b3392d]/75 uppercase mt-2">
          <span className="text-center">Days</span>
          <span className="text-center">Hours</span>
          <span className="text-center">Mins</span>
          <span className="text-center">Secs</span>
        </div>
      </div>

      {showFlourish && (
        <div className="hidden xs:block sm:block text-[#b3392d]">
          <LeafFlourish />
        </div>
      )}
    </div>
  );
};
