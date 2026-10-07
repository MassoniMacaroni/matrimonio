"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type CountdownBlockProps = {
  title: string;
  targetDate: string; // ISO date format, e.g. "2026-10-10"
};

export const CountdownBlock: React.FC<CountdownBlockProps> = ({
  title = "Counting down the days!",
  targetDate = "2026-10-10T15:00:00",
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

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 text-center">
      <motion.div
        className="max-w-xl mx-auto rounded-3xl bg-white/70 border border-rose-200/80 p-6 sm:p-8 shadow-sm backdrop-blur-xs"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl sm:text-2xl font-serif font-semibold text-rose-950 mb-6">
          {title}
        </h3>

        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {units.map((unit) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-rose-50/70 border border-rose-100 min-h-[64px]"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              <span className="text-2xl sm:text-3xl font-bold font-mono text-rose-900">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-rose-600 mt-1">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
