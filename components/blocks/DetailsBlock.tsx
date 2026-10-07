"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RibbonDivider } from "../decorations/Illustrations";

export type DetailsBlockProps = {
  title?: string;
  accommodationTitle?: string;
  accommodationText?: string;
  transportationTitle?: string;
  transportationText?: string;
  showDivider?: boolean;
};

export const DetailsBlock: React.FC<DetailsBlockProps> = ({
  title = "Wedding Details",
  accommodationTitle = "Accommodation",
  accommodationText = "For your convenience, hotel suggestions and room blocks around The Rocks and Sydney CBD will be shared soon to help plan your stay.",
  transportationTitle = "Transportation",
  transportationText = "The Garrison Church and The Oriana are centrally located in The Rocks, Sydney. Circular Quay station (trains, ferries, and light rail) is within a brief walking distance.",
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
        className="max-w-md mx-auto"
      >
        {/* Script title: Wedding Details */}
        <h3 className="font-script text-4xl sm:text-5xl text-[#b3392d] tracking-wide mb-6">
          {title}
        </h3>

        {/* Accommodation */}
        <div className="mb-6 space-y-1.5 text-center">
          <h4 className="text-sm font-semibold tracking-widest uppercase text-[#b3392d]">
            {accommodationTitle}
          </h4>
          <p className="text-xs sm:text-sm text-[#b3392d]/85 font-medium leading-relaxed max-w-sm mx-auto">
            {accommodationText}
          </p>
        </div>

        {/* Transportation */}
        <div className="space-y-1.5 text-center">
          <h4 className="text-sm font-semibold tracking-widest uppercase text-[#b3392d]">
            {transportationTitle}
          </h4>
          <p className="text-xs sm:text-sm text-[#b3392d]/85 font-medium leading-relaxed max-w-sm mx-auto">
            {transportationText}
          </p>
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
