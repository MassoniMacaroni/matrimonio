"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RibbonDivider } from "../decorations/Illustrations";

const STROKE_COLOR = "#b3392d";

export type TimelineEvent = {
  time: string;
  title: string;
  description?: string;
  iconType: "ceremony" | "photos" | "dinner" | "toast" | "party";
};

export type TimelineBlockProps = {
  title?: string;
  subtitle?: string;
  events?: TimelineEvent[];
  showDivider?: boolean;
};

const TimelineIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case "ceremony":
      // Wedding rings
      return (
        <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
          <circle cx="16" cy="22" r="9" stroke={STROKE_COLOR} strokeWidth="1.6" />
          <circle cx="24" cy="22" r="9" stroke={STROKE_COLOR} strokeWidth="1.6" />
          <path d="M16 13 L 14 10 L 18 10 Z" fill={STROKE_COLOR} />
        </svg>
      );
    case "photos":
      // Camera
      return (
        <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
          <rect x="8" y="14" width="24" height="18" rx="3" stroke={STROKE_COLOR} strokeWidth="1.6" />
          <path d="M15 14 L 17 10 L 23 10 L 25 14" stroke={STROKE_COLOR} strokeWidth="1.5" />
          <circle cx="20" cy="23" r="5" stroke={STROKE_COLOR} strokeWidth="1.5" />
          <circle cx="27" cy="18" r="1.2" fill={STROKE_COLOR} />
        </svg>
      );
    case "dinner":
      // Plate & cutlery
      return (
        <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
          <circle cx="20" cy="20" r="11" stroke={STROKE_COLOR} strokeWidth="1.6" />
          <circle cx="20" cy="20" r="7" stroke={STROKE_COLOR} strokeWidth="1.3" />
          <path d="M6 12 L 6 28 M4 12 L 8 12" stroke={STROKE_COLOR} strokeWidth="1.4" strokeLinecap="round" />
          <path d="M34 12 L 34 28 M32 12 Q 34 18, 34 22" stroke={STROKE_COLOR} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "toast":
      // Clinking wine glasses
      return (
        <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
          <path d="M12 10 L 16 20 L 14 28 M11 28 L 17 28 M14 20 L 14 28" stroke={STROKE_COLOR} strokeWidth="1.4" />
          <path d="M28 10 L 24 20 L 26 28 M23 28 L 29 28 M26 20 L 26 28" stroke={STROKE_COLOR} strokeWidth="1.4" />
          <circle cx="20" cy="12" r="1" fill={STROKE_COLOR} />
          <circle cx="20" cy="8" r="1" fill={STROKE_COLOR} />
        </svg>
      );
    case "party":
    default:
      // Disco ball
      return (
        <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
          <line x1="20" y1="4" x2="20" y2="12" stroke={STROKE_COLOR} strokeWidth="1.4" />
          <circle cx="20" cy="24" r="12" stroke={STROKE_COLOR} strokeWidth="1.6" />
          <path d="M10 20 Q 20 23, 30 20" stroke={STROKE_COLOR} strokeWidth="1.1" />
          <path d="M10 28 Q 20 31, 30 28" stroke={STROKE_COLOR} strokeWidth="1.1" />
          <path d="M17 12 Q 20 24, 17 36" stroke={STROKE_COLOR} strokeWidth="1.1" />
          <path d="M23 12 Q 20 24, 23 36" stroke={STROKE_COLOR} strokeWidth="1.1" />
        </svg>
      );
  }
};

const defaultEvents: TimelineEvent[] = [
  {
    time: "Ceremony",
    title: "The Garrison Church",
    description: "The Rocks, Sydney",
    iconType: "ceremony",
  },
  {
    time: "Cocktails & Photos",
    title: "Historic Rocks Stroll",
    description: "Drinks & light bites",
    iconType: "photos",
  },
  {
    time: "Reception",
    title: "The Oriana",
    description: "Dinner celebration begins",
    iconType: "dinner",
  },
  {
    time: "Evening",
    title: "Toast & Speeches",
    description: "Celebrating together",
    iconType: "toast",
  },
  {
    time: "Party",
    title: "Dancing & Celebration",
    description: "Until late",
    iconType: "party",
  },
];

export const TimelineBlock: React.FC<TimelineBlockProps> = ({
  title = "Wedding Timeline",
  subtitle = "Schedule & timings will be updated closer to our wedding day",
  events = defaultEvents,
  showDivider = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-6 px-4 text-center max-w-xl mx-auto">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-script text-4xl sm:text-5xl text-[#b3392d] tracking-wide mb-2">
          {title}
        </h3>

        {subtitle && (
          <p className="text-xs sm:text-sm text-[#b3392d]/75 font-medium max-w-sm mx-auto mb-8">
            {subtitle}
          </p>
        )}

        {/* Wavy Timeline layout */}
        <div className="relative max-w-sm mx-auto py-2">
          {/* Vertical squiggly thread */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-[#b3392d]/25 border-l border-dashed border-[#b3392d]/40 pointer-events-none" />

          <div className="space-y-6">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex items-start gap-4 text-left pl-2"
              >
                {/* Icon bubble */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#f6efe5] border-1.5 border-[#b3392d] text-[#b3392d] shrink-0 shadow-2xs">
                  <TimelineIcon type={event.iconType} />
                </div>

                <div className="pt-0.5">
                  <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#b3392d]">
                    {event.time}
                  </span>
                  <h4 className="text-sm sm:text-base font-serif font-bold text-[#b3392d]">
                    {event.title}
                  </h4>
                  {event.description && (
                    <p className="text-xs text-[#b3392d]/80 font-medium">
                      {event.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {showDivider && (
        <div className="pt-8">
          <RibbonDivider />
        </div>
      )}
    </section>
  );
};
