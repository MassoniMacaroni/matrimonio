"use client";

import React from "react";
import { LeafFlourish } from "../decorations/Illustrations";

export type CalendarHeartBlockProps = {
  targetDay?: number;
  monthYearText?: string;
  showFlourish?: boolean;
};

export const CalendarHeartBlock: React.FC<CalendarHeartBlockProps> = ({
  targetDay = 18,
  monthYearText = "Saturday, September 2027",
  showFlourish = true,
}) => {
  const days = [targetDay - 2, targetDay - 1, targetDay, targetDay + 1, targetDay + 2];

  return (
    <div className="flex flex-col items-center justify-center my-3 select-none">
      {monthYearText && (
        <p className="text-xs sm:text-sm font-medium tracking-[0.18em] text-[#b3392d] uppercase mb-4">
          {monthYearText}
        </p>
      )}

      {/* Calendar days row with heart */}
      <div className="relative flex items-center justify-center gap-3 sm:gap-6 my-1">
        {showFlourish && (
          <div className="hidden xs:block sm:block text-[#b3392d]">
            <LeafFlourish flip />
          </div>
        )}

        <div className="flex items-center gap-3 sm:gap-5 text-xl sm:text-2xl font-serif font-bold text-[#b3392d]">
          {days.map((day) => {
            const isTarget = day === targetDay;
            if (isTarget) {
              return (
                <div
                  key={day}
                  className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 -my-2"
                >
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

        {showFlourish && (
          <div className="hidden xs:block sm:block text-[#b3392d]">
            <LeafFlourish />
          </div>
        )}
      </div>
    </div>
  );
};
