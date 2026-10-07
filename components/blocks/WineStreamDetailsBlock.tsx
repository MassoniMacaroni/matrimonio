"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RibbonDivider } from "../decorations/Illustrations";

export type DetailItem = {
  heading: string;
  body: string;
};

export type WineStreamDetailsBlockProps = {
  title?: string;
  subtitle?: string;
  item1Heading?: string;
  item1Body?: string;
  item2Heading?: string;
  item2Body?: string;
  item3Heading?: string;
  item3Body?: string;
  item4Heading?: string;
  item4Body?: string;
  showDivider?: boolean;
};

export const WineStreamDetailsBlock: React.FC<WineStreamDetailsBlockProps> = ({
  title = "the details",
  subtitle = "save the date for our celebration",
  item1Heading = "when",
  item1Body = "Saturday, September 18th, 2027",
  item2Heading = "where",
  item2Body = "The Rocks, Sydney · New South Wales, Australia",
  item3Heading = "what to expect",
  item3Body = "An unforgettable evening of great food, wine, and dancing. Formal invitations & RSVP will follow!",
  item4Heading = "who to contact",
  item4Body = "Have questions in the meantime? Reach us anytime at hello@julesnjon.com",
  showDivider = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const items = [
    { heading: item1Heading, body: item1Body },
    { heading: item2Heading, body: item2Body },
    { heading: item3Heading, body: item3Body },
    { heading: item4Heading, body: item4Body },
  ].filter((it) => it.heading && it.body);

  return (
    <section className="relative py-12 px-4 sm:px-6 max-w-xl mx-auto text-center overflow-hidden">
      {/* Hand holding tilted wine bottle pouring stream (styled like reference photo) */}
      <motion.div
        className="relative flex justify-center items-center mb-2"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <svg
          viewBox="0 0 320 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-64 sm:w-72 h-auto select-none"
        >
          {/* Hand arm from top right */}
          <path
            d="M310 8 L 260 22 L 250 44 L 305 34 Z"
            stroke="#b3392d"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Wrist & Fingers */}
          <path
            d="M260 22 C 245 25, 235 32, 225 42"
            stroke="#b3392d"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M225 42 C 220 38, 212 40, 210 47 C 208 54, 218 60, 226 58"
            stroke="#b3392d"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M232 45 C 228 40, 220 42, 218 49 C 216 56, 224 61, 232 59"
            stroke="#b3392d"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M240 47 C 236 42, 228 44, 226 51 C 224 58, 232 63, 240 61"
            stroke="#b3392d"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          {/* Thumb */}
          <path
            d="M245 29 C 240 35, 235 41, 235 45"
            stroke="#b3392d"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Wine Bottle tilted downwards */}
          <path
            d="M272 47 C 285 52, 282 70, 268 75"
            stroke="#b3392d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M268 75 L 195 53"
            stroke="#b3392d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M272 47 L 205 27"
            stroke="#b3392d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M195 53 C 180 48, 172 42, 155 37"
            stroke="#b3392d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M205 27 C 190 25, 178 29, 160 33"
            stroke="#b3392d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M155 37 L 132 31"
            stroke="#b3392d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M160 33 L 135 27"
            stroke="#b3392d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Lip */}
          <ellipse
            cx="133"
            cy="29"
            rx="3"
            ry="6"
            transform="rotate(-20 133 29)"
            stroke="#b3392d"
            strokeWidth="1.8"
            fill="#f6efe5"
          />
          {/* Label */}
          <path
            d="M215 34 L 250 45 L 246 60 L 210 49 Z"
            stroke="#b3392d"
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />

          {/* Liquid pouring out into the center */}
          <path
            d="M130 30 C 112 36, 96 52, 105 78 C 115 106, 155 125, 160 170"
            stroke="#b3392d"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M132 33 C 116 39, 102 54, 110 78 C 120 104, 158 123, 163 170"
            stroke="#b3392d"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          {/* Little wine droplets */}
          <circle cx="118" cy="45" r="2.2" fill="#b3392d" />
          <circle cx="104" cy="62" r="1.6" fill="#b3392d" />
          <circle cx="128" cy="74" r="2" fill="#b3392d" />
          <circle cx="150" cy="110" r="1.8" fill="#b3392d" />
          {/* Sparkles */}
          <path
            d="M145 56 L 147 61 L 152 63 L 147 65 L 145 70 L 143 65 L 138 63 L 143 61 Z"
            fill="#b3392d"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      {/* Main Title: "the details" (chunky lowercase retro display serif matching photo) */}
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#b3392d] lowercase tracking-normal leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-[#b3392d]/80">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Winding wine stream flowing through the items */}
      <div className="relative mt-8 mb-4">
        {/* Continuous SVG winding curvy ribbon in background */}
        <div className="absolute inset-0 flex justify-center pointer-events-none select-none z-0">
          <svg
            viewBox="0 0 200 680"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-48 sm:w-56 h-full opacity-35"
          >
            {/* Winding S-curve liquid stream path */}
            <path
              d="M100 0 C 145 60, 45 140, 100 220 C 155 300, 45 380, 100 460 C 155 540, 50 620, 100 680"
              stroke="#b3392d"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.25"
            />
            {/* Center flowing line */}
            <path
              d="M100 0 C 145 60, 45 140, 100 220 C 155 300, 45 380, 100 460 C 155 540, 50 620, 100 680"
              stroke="#b3392d"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Droplets along the path */}
            <circle cx="118" cy="110" r="3" fill="#b3392d" opacity="0.6" />
            <circle cx="75" cy="230" r="2.5" fill="#b3392d" opacity="0.6" />
            <circle cx="125" cy="350" r="3" fill="#b3392d" opacity="0.6" />
            <circle cx="78" cy="480" r="2.5" fill="#b3392d" opacity="0.6" />
            <circle cx="115" cy="590" r="2.8" fill="#b3392d" opacity="0.6" />
          </svg>
        </div>

        {/* Content Items overlaid cleanly on top */}
        <div className="relative z-10 space-y-12 py-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="max-w-md mx-auto px-4"
            >
              {/* Item heading in lowercase chunky retro font (just like reference image) */}
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#b3392d] lowercase tracking-normal mb-2">
                {item.heading}
              </h3>
              {/* Item body text in warm elegant font */}
              <p className="text-sm sm:text-base font-serif text-[#4a2824] leading-relaxed max-w-sm mx-auto">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {showDivider && (
        <div className="pt-6">
          <RibbonDivider />
        </div>
      )}
    </section>
  );
};
