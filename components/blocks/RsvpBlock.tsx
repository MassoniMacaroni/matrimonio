"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RsvpDoodles, RibbonDivider } from "../decorations/Illustrations";

export type RsvpBlockProps = {
  deadlineText?: string;
  buttonText?: string;
  buttonLink?: string;
  note?: string;
  showDivider?: boolean;
};

export const RsvpBlock: React.FC<RsvpBlockProps> = ({
  deadlineText = "Kindly RSVP by July 18th, 2027",
  buttonText = "RSVP",
  buttonLink = "mailto:rsvp@julesnjon.com?subject=Wedding%20RSVP",
  note = "to help us with final arrangements for our special day.",
  showDivider = false,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="rsvp" className="py-8 px-4 text-center max-w-xl mx-auto">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center"
      >
        {/* Cake and Bouquet Doodles flanking top of RSVP */}
        <div className="w-full mb-1">
          <RsvpDoodles />
        </div>

        {/* Big Bold Stacked RSVP Typography */}
        <div className="my-1 select-none">
          <h2 className="text-6xl sm:text-7xl font-serif font-black text-[#b3392d] tracking-widest leading-none flex flex-col items-center">
            <span>RS</span>
            <span>VP</span>
          </h2>
        </div>

        {/* RSVP Deadline Text */}
        <div className="mt-4 mb-6 max-w-xs mx-auto text-xs sm:text-sm text-[#b3392d] font-medium leading-relaxed">
          <p className="font-semibold">{deadlineText}</p>
          {note && <p className="opacity-90 mt-0.5">{note}</p>}
        </div>

        {/* RSVP Pill Button */}
        {buttonText && (
          <div>
            <a
              href={buttonLink}
              className="btn-wedding-pill px-8 py-2.5 text-xs font-semibold tracking-widest uppercase"
            >
              {buttonText}
            </a>
          </div>
        )}
      </motion.div>

      {showDivider && (
        <div className="pt-8">
          <RibbonDivider />
        </div>
      )}
    </section>
  );
};
