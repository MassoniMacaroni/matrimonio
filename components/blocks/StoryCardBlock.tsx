"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { WashiTape, RibbonDivider } from "../decorations/Illustrations";

export type StoryItem = {
  year: string;
  text: string;
};

export type StoryCardBlockProps = {
  title?: string;
  tagline?: string;
  items?: StoryItem[];
  showDivider?: boolean;
};

const defaultItems: StoryItem[] = [
  {
    year: "Chapter One",
    text: "From our first date to countless shared moments, our journey together began with laughter and endless conversation.",
  },
  {
    year: "The Proposal",
    text: "The easiest yes of our lives. We decided on forever and can't wait to make it official surrounded by everyone we love.",
  },
  {
    year: "September 2027",
    text: "The day we celebrate with you in The Rocks, Sydney!",
  },
];

export const StoryCardBlock: React.FC<StoryCardBlockProps> = ({
  title = "Love Story",
  tagline = "A glimpse into our journey together",
  items = defaultItems,
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
        {/* Script title: Love Story */}
        <h3 className="font-script text-4xl sm:text-5xl text-[#b3392d] tracking-wide mb-2">
          {title}
        </h3>

        {tagline && (
          <p className="text-xs sm:text-sm text-[#b3392d]/75 font-medium max-w-sm mx-auto mb-8">
            {tagline}
          </p>
        )}

        {/* Washi-taped story card stack */}
        <div className="space-y-8 max-w-sm mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-white/70 border border-[#b3392d]/25 p-5 pt-7 rounded-sm shadow-2xs text-left"
            >
              {/* Centered Washi Tape strip */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <WashiTape />
              </div>

              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#b3392d] mb-1">
                {item.year}
              </span>
              <p className="text-xs sm:text-sm text-[#b3392d]/90 font-medium leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
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
