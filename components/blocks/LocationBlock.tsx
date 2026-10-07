"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BanquetTableIllustration, RibbonDivider } from "../decorations/Illustrations";

export type LocationBlockProps = {
  title?: string;
  areaText?: string;
  ceremonyVenue?: string;
  receptionVenue?: string;
  mapsUrl?: string;
  buttonText?: string;
  showDivider?: boolean;
};

export const LocationBlock: React.FC<LocationBlockProps> = ({
  title = "Location",
  areaText = "The Rocks, Sydney",
  ceremonyVenue = "Ceremony · The Garrison Church",
  receptionVenue = "Reception · The Oriana",
  mapsUrl = "https://maps.google.com/?q=The+Rocks+Sydney",
  buttonText = "Google Maps",
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
        {/* Script title: Location */}
        <h3 className="font-script text-4xl sm:text-5xl text-[#b3392d] tracking-wide mb-3">
          {title}
        </h3>

        {/* Banquet Table Illustration */}
        <div className="my-2">
          <BanquetTableIllustration />
        </div>

        {/* Venues & Area */}
        <div className="mt-4 mb-5 space-y-1 text-[#b3392d]">
          <p className="text-base sm:text-lg font-serif font-bold tracking-wide">
            {areaText}
          </p>
          {ceremonyVenue && (
            <p className="text-xs sm:text-sm font-medium tracking-wider opacity-90">
              {ceremonyVenue}
            </p>
          )}
          {receptionVenue && (
            <p className="text-xs sm:text-sm font-medium tracking-wider opacity-90">
              {receptionVenue}
            </p>
          )}
        </div>

        {/* Google Maps Button */}
        {buttonText && mapsUrl && (
          <div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wedding-pill text-xs uppercase tracking-wider"
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
