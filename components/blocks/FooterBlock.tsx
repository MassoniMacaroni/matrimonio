"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { WashiTape, CoupleDoodleIllustration } from "../decorations/Illustrations";

export type FooterBlockProps = {
  message?: string;
  signature?: string;
  domain?: string;
};

export const FooterBlock: React.FC<FooterBlockProps> = ({
  message = "We can't wait to celebrate our special day with all of our dearest family and friends. Formal invitations and RSVP details to follow!",
  signature = "Jules & Jon",
  domain = "julesnjon.com",
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="mt-8 pt-8 pb-16 px-4 text-center max-w-xl mx-auto">
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        {/* Washi-taped card */}
        <div className="relative bg-white/70 border border-[#b3392d]/25 p-5 pt-8 pb-4 rounded-sm shadow-2xs max-w-xs mx-auto mb-6">
          {/* Centered Washi Tape strip */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <WashiTape />
          </div>

          <div className="py-2">
            <CoupleDoodleIllustration />
          </div>
        </div>

        {/* Closing heartfelt text */}
        <p className="max-w-md mx-auto text-xs sm:text-sm text-[#4a2824]/90 font-serif leading-relaxed mb-6 px-2">
          {message}
        </p>

        {/* Signature in chunky Fraunces font */}
        <h4 className="text-2xl sm:text-3xl font-display font-extrabold tracking-normal text-[#b3392d]">
          {signature}
        </h4>

        {domain && (
          <span className="text-[11px] font-mono tracking-widest text-[#b3392d]/60 mt-3">
            {domain}
          </span>
        )}
      </motion.div>
    </footer>
  );
};
