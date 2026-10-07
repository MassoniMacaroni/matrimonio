"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ReachingHandsIllustration,
  CoupleDoodleIllustration,
  RibbonDivider,
} from "../decorations/Illustrations";

export type HeroBlockProps = {
  headline?: string;
  names?: string;
  dateText?: string;
  buttonText?: string;
  buttonLink?: string;
  welcomeMessage?: string;
  showDivider?: boolean;
};

export const HeroBlock: React.FC<HeroBlockProps> = ({
  headline = "WE'RE GETTING MARRIED!",
  names = "Jules & Jon",
  dateText = "Saturday, September 18th 2027",
  buttonText = "Open Invitation",
  buttonLink = "#countdown",
  welcomeMessage = "No happiness is complete without the presence of our dearest ones. With great joy, we invite you to witness and celebrate our wedding day.",
  showDivider = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (buttonLink?.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(buttonLink);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative pt-12 pb-6 px-4 sm:px-6 text-center max-w-xl mx-auto">
      {/* Top Headline: WE'RE GETTING MARRIED! */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-wide text-[#b3392d] uppercase leading-tight">
          {headline}
        </h1>
      </motion.div>

      {/* Reaching Hands Illustration */}
      <motion.div
        className="my-5"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <ReachingHandsIllustration />
      </motion.div>

      {/* Couple Names */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <h2 className="text-2xl sm:text-3xl font-medium tracking-[0.25em] text-[#b3392d] uppercase">
          {names}
        </h2>
        <p className="mt-2 text-sm sm:text-base font-medium tracking-wide text-[#b3392d]/90">
          {dateText}
        </p>
      </motion.div>

      {/* Open Invitation Pill Button */}
      {buttonText && (
        <motion.div
          className="mt-6 mb-8"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <a
            href={buttonLink}
            onClick={handleScroll}
            className="btn-wedding-pill cursor-pointer"
          >
            {buttonText}
          </a>
        </motion.div>
      )}

      {/* Welcome Invitation Blurb */}
      {welcomeMessage && (
        <motion.div
          className="max-w-md mx-auto text-xs sm:text-sm leading-relaxed text-[#b3392d]/85 font-medium px-2"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <p>{welcomeMessage}</p>
        </motion.div>
      )}

      {/* Cute Bride & Groom Doodle */}
      <motion.div
        className="mt-8 mb-2"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
      >
        <CoupleDoodleIllustration />
        <p className="mt-3 text-xs tracking-[0.25em] uppercase text-[#b3392d]/80 font-medium">
          {names}
        </p>
      </motion.div>

      {/* Ribbon Divider */}
      {showDivider && (
        <div className="pt-4">
          <RibbonDivider />
        </div>
      )}
    </section>
  );
};
