"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type DetailsBlockProps = {
  heading: string;
  ceremonyTime: string;
  venueHint: string;
  attireHint: string;
  note: string;
};

export const DetailsBlock: React.FC<DetailsBlockProps> = ({
  heading = "At A Glance",
  ceremonyTime = "3:30 PM",
  venueHint = "Yarra Valley, Victoria",
  attireHint = "Festive & Colorful Cocktail",
  note = "Travel, accommodation suggestions, and RSVP will be shared with the formal invitation.",
}) => {
  const shouldReduceMotion = useReducedMotion();

  const details = [
    { label: "When", val: ceremonyTime, icon: "🕒" },
    { label: "Where", val: venueHint, icon: "🌿" },
    { label: "Attire", val: attireHint, icon: "👗" },
  ];

  return (
    <section className="py-8 px-4 sm:px-6">
      <motion.div
        className="max-w-xl mx-auto rounded-3xl bg-amber-50/50 border border-amber-200/70 p-6 sm:p-8"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-6 text-center">
          {heading}
        </h3>

        <div className="space-y-3">
          {details.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-stone-200/60 shadow-2xs"
            >
              <span className="text-xl shrink-0">{item.icon}</span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between w-full">
                <span className="text-xs uppercase font-semibold text-stone-500 tracking-wider">
                  {item.label}
                </span>
                <span className="text-sm sm:text-base font-medium text-stone-900">
                  {item.val}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs sm:text-sm text-stone-600 text-center leading-relaxed italic">
          {note}
        </p>
      </motion.div>
    </section>
  );
};
