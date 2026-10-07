"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AttireIllustration, RibbonDivider } from "../decorations/Illustrations";

export type AttireGuideBlockProps = {
  title?: string;
  attireType?: string;
  description?: string;
  showDivider?: boolean;
};

export const AttireGuideBlock: React.FC<AttireGuideBlockProps> = ({
  title = "Attire Guide",
  attireType = "Black Tie",
  description = "We invite our guests to dress in formal black-tie attire—tuxedos or formal dark suits for gentlemen, and floor-length gowns or elegant formal dresses for ladies.",
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
        className="flex flex-col items-center justify-center"
      >
        {/* Script title: Attire Guide */}
        <h3 className="font-script text-4xl sm:text-5xl text-[#b3392d] tracking-wide mb-2">
          {title}
        </h3>

        {/* Hand-drawn Suit & Gown Illustration */}
        <div className="my-2">
          <AttireIllustration />
        </div>

        {/* Attire Headline */}
        <h4 className="text-base sm:text-lg font-serif font-bold text-[#b3392d] tracking-wide mt-2 mb-2">
          {attireType}
        </h4>

        {/* Description */}
        <p className="max-w-md mx-auto text-xs sm:text-sm text-[#b3392d]/85 font-medium leading-relaxed px-2">
          {description}
        </p>
      </motion.div>

      {showDivider && (
        <div className="pt-8">
          <RibbonDivider />
        </div>
      )}
    </section>
  );
};
