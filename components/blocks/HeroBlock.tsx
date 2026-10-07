"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type HeroBlockProps = {
  names: string;
  badgeText: string;
  dateText: string;
  locationText: string;
  subheading: string;
};

export const HeroBlock: React.FC<HeroBlockProps> = ({
  names = "Jules & Jon",
  badgeText = "SAVE THE DATE",
  dateText = "Saturday, October 10, 2026",
  locationText = "Melbourne, Australia",
  subheading = "We're getting married! Formal invitation to follow.",
}) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        ease: "easeOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-16 px-4 sm:py-24 sm:px-6 text-center">
      {/* Decorative kitschy background sparkles */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-40">
        <div className="w-80 h-80 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="w-72 h-72 rounded-full bg-amber-100/50 blur-3xl -ml-20" />
      </div>

      <motion.div
        className="max-w-xl mx-auto flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Retro kitschy badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs font-semibold tracking-widest uppercase shadow-sm mb-6"
        >
          <span>💌</span>
          <span>{badgeText}</span>
          <span>💌</span>
        </motion.div>

        {/* Couple Names */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-rose-950 mb-4"
        >
          {names}
        </motion.h1>

        {/* Date and Location Pills */}
        <motion.div
          variants={itemVariants}
          className="my-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base font-medium text-stone-700"
        >
          <span className="px-3.5 py-1.5 rounded-xl bg-white/80 border border-stone-200 shadow-xs">
            📅 {dateText}
          </span>
          <span className="px-3.5 py-1.5 rounded-xl bg-white/80 border border-stone-200 shadow-xs">
            📍 {locationText}
          </span>
        </motion.div>

        {/* Subtitle / note */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-stone-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed"
        >
          {subheading}
        </motion.p>

        {/* Interactive kitsch heart button */}
        <motion.div
          variants={itemVariants}
          className="mt-8"
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
        >
          <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-rose-600 text-white font-medium text-sm shadow-md hover:bg-rose-700 transition-colors cursor-pointer select-none">
            <span>✨</span>
            <span>Can&apos;t wait to celebrate!</span>
            <span>✨</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
