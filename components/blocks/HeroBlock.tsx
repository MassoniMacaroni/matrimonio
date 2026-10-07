"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ReachingHandsIllustration,
  CoupleDoodleIllustration,
  ToastingGlassesIllustration,
  TwinCherriesIllustration,
  SparkleCluster,
  RibbonDivider,
} from "../decorations/Illustrations";

export type HeroBlockProps = {
  headline?: string;
  names?: string;
  dateText?: string;
  locationText?: string;
  buttonText?: string;
  buttonLink?: string;
  welcomeMessage?: string;
  illustrationType?: "hands" | "couple" | "champagne" | "cherries";
  showBottomDoodle?: boolean;
  showDivider?: boolean;
};

export const HeroBlock: React.FC<HeroBlockProps> = ({
  headline = "SAVE THE DATE",
  names = "Jules & Jon",
  dateText = "Saturday, September 18th 2027",
  locationText = "The Rocks, Sydney · Australia",
  buttonText = "",
  buttonLink = "",
  welcomeMessage = "We're tying the knot! Save our date on your calendar. Formal invitations, travel details & RSVP to follow.",
  illustrationType = "hands",
  showBottomDoodle = false,
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

  const renderIllustration = () => {
    switch (illustrationType) {
      case "champagne":
        return <ToastingGlassesIllustration />;
      case "couple":
        return <CoupleDoodleIllustration />;
      case "cherries":
        return <TwinCherriesIllustration />;
      case "hands":
      default:
        return <ReachingHandsIllustration />;
    }
  };

  return (
    <section className="relative pt-12 pb-6 px-4 sm:px-6 text-center max-w-xl mx-auto">
      {/* Top Headline in chunky retro Fraunces font */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <SparkleCluster />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#b3392d] uppercase leading-tight">
            {headline}
          </h1>
          <SparkleCluster />
        </div>
      </motion.div>

      {/* Selected Hand-Drawn Illustration */}
      <motion.div
        className="my-5"
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        {renderIllustration()}
      </motion.div>

      {/* Couple Names */}
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <h2 className="text-3xl sm:text-4xl font-display font-black tracking-normal text-[#b3392d]">
          {names}
        </h2>
        <p className="mt-2 text-base sm:text-lg font-serif font-medium tracking-wide text-[#b3392d]/90">
          {dateText}
        </p>
        {locationText && (
          <p className="mt-1 text-xs sm:text-sm font-sans tracking-[0.2em] uppercase font-semibold text-[#b3392d]/75">
            {locationText}
          </p>
        )}
      </motion.div>

      {/* Action Button (only if buttonText is provided) */}
      {buttonText && (
        <motion.div
          className="mt-6 mb-8"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <a
            href={buttonLink}
            onClick={handleScroll}
            className="btn-wedding-pill cursor-pointer shadow-sm hover:shadow-md"
          >
            {buttonText}
          </a>
        </motion.div>
      )}

      {/* Welcome Message Blurb */}
      {welcomeMessage && (
        <motion.div
          className="max-w-md mx-auto text-xs sm:text-sm leading-relaxed text-[#4a2824]/90 font-serif px-2 mt-4"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <p>{welcomeMessage}</p>
        </motion.div>
      )}

      {/* Optional bottom doodle */}
      {showBottomDoodle && (
        <motion.div
          className="mt-8 mb-2"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <CoupleDoodleIllustration />
          <p className="mt-3 text-xs tracking-[0.25em] uppercase text-[#b3392d]/80 font-medium">
            {names}
          </p>
        </motion.div>
      )}

      {/* Ribbon Divider */}
      {showDivider && (
        <div className="pt-4">
          <RibbonDivider />
        </div>
      )}
    </section>
  );
};
