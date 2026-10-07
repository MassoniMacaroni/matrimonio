"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GiftBowFrame, RibbonDivider } from "../decorations/Illustrations";

export type GiftBlockProps = {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonLink?: string;
  showDivider?: boolean;
};

export const GiftBlock: React.FC<GiftBlockProps> = ({
  title = "Wedding Gift",
  message = "Your presence at our wedding is the greatest gift of all. If you would like to bless us further, a contribution to our wishing well would mean the world to us as we embark on this exciting chapter together.",
  buttonText = "Wishing Well",
  buttonLink = "#wishing-well",
  showDivider = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="wishing-well" className="py-6 px-4 text-center max-w-xl mx-auto">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto"
      >
        <GiftBowFrame>
          <div className="pt-2 pb-1">
            {/* Script title: Wedding Gift */}
            <h3 className="font-script text-4xl sm:text-5xl text-[#b3392d] tracking-wide mb-3">
              {title}
            </h3>

            {/* Message */}
            <p className="text-xs sm:text-sm text-[#b3392d]/85 font-medium leading-relaxed max-w-xs mx-auto mb-6">
              {message}
            </p>

            {/* Pill button */}
            {buttonText && (
              <div>
                <a href={buttonLink} className="btn-wedding-pill text-xs tracking-wider uppercase">
                  {buttonText}
                </a>
              </div>
            )}
          </div>
        </GiftBowFrame>
      </motion.div>

      {showDivider && (
        <div className="pt-8">
          <RibbonDivider />
        </div>
      )}
    </section>
  );
};
