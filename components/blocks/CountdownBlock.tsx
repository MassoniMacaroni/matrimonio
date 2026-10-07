"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LeafFlourish } from "../decorations/Illustrations";

export type CountdownBlockProps = {
  title?: string;
  targetDate?: string; // ISO date format, e.g. "2027-09-18T15:00:00"
};

export const CountdownBlock: React.FC<CountdownBlockProps> = ({
  title = "Counting Days",
  targetDate = "2027-09-18T15:00:00",
}) => {
  const shouldReduceMotion = useReducedMotion();
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
    <section id="countdown" className="py-6 px-4 text-center max-w-xl mx-auto">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center"
      >
        {/* Script Title: Counting Days */}
        <h3 className="font-script text-4xl sm:text-5xl text-[#b3392d] tracking-wide mb-3">
          {title}
        </h3>

        {/* Countdown timer with colons and botanical flanks */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-6 mt-1 mb-2 px-6">
          {/* Left Leaf Flourish */}
          <div className="hidden xs:block sm:block text-[#b3392d]">
            <LeafFlourish flip />
          </div>

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

          {/* Right Leaf Flourish */}
          <div className="hidden xs:block sm:block text-[#b3392d]">
            <LeafFlourish />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
