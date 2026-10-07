"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LeafFlourish, RibbonDivider } from "../decorations/Illustrations";

export type SaveTheDateBlockProps = {
  title?: string;
  monthYearText?: string;
  targetDay?: number;
  timeNote?: string;
  fontStyle?: "retro" | "script";
  showDivider?: boolean;
};

export const SaveTheDateBlock: React.FC<SaveTheDateBlockProps> = ({
  title = "save the date",
  monthYearText = "Saturday, September 2027",
  targetDay = 18,
  timeNote = "Formal invitation & details to follow",
  fontStyle = "retro",
  showDivider = false,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Create a 5-day span around the target day, e.g. [16, 17, 18, 19, 20]
  const days = [targetDay - 2, targetDay - 1, targetDay, targetDay + 1, targetDay + 2];

  return (
    <section className="py-8 px-4 text-center max-w-xl mx-auto">
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center"
      >
        {/* Title in chunky retro Fraunces font or script */}
        <h3
          className={`${
            fontStyle === "script"
              ? "font-script text-4xl sm:text-5xl"
              : "font-display font-extrabold text-4xl sm:text-5xl lowercase tracking-normal"
          } text-[#b3392d] mb-2`}
        >
          {title}
        </h3>

        {/* Month & Year */}
        <p className="text-sm sm:text-base font-medium tracking-[0.15em] text-[#b3392d] uppercase mb-4">
          {monthYearText}
        </p>

        {/* Calendar days row with heart */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-6 my-2">
          {/* Left Leaf */}
          <div className="hidden xs:block sm:block text-[#b3392d]">
            <LeafFlourish flip />
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-xl sm:text-2xl font-serif font-bold text-[#b3392d]">
            {days.map((day) => {
              const isTarget = day === targetDay;
              if (isTarget) {
                return (
                  <div
                    key={day}
                    className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 -my-2"
                  >
                    {/* Solid red heart shape */}
                    <svg
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-full h-full drop-shadow-xs"
                    >
                      <path
                        d="M20 35 C 10 27, 2 20, 2 12 C 2 6, 7 2, 13 2 C 16.5 2, 19 4, 20 6 C 21 4, 23.5 2, 27 2 C 33 2, 38 6, 38 12 C 38 20, 30 27, 20 35 Z"
                        fill="#b3392d"
                      />
                    </svg>
                    <span className="relative z-10 text-white font-sans font-bold text-lg sm:text-xl pb-1">
                      {day}
                    </span>
                  </div>
                );
              }
              return (
                <span key={day} className="w-8 text-center opacity-85">
                  {day}
                </span>
              );
            })}
          </div>

          {/* Right Leaf */}
          <div className="hidden xs:block sm:block text-[#b3392d]">
            <LeafFlourish />
          </div>
        </div>

        {/* Time or Note */}
        {timeNote && (
          <p className="mt-3 text-xs sm:text-sm font-medium text-[#b3392d]/80 tracking-wider">
            {timeNote}
          </p>
        )}
      </motion.div>

      {showDivider && (
        <div className="pt-6">
          <RibbonDivider />
        </div>
      )}
    </section>
  );
};
