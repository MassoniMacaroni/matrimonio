"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type StoryCardBlockProps = {
  tag: string;
  emoji: string;
  title: string;
  body: string;
  accentColor?: "rose" | "butter" | "sage" | "lavender";
};

export const StoryCardBlock: React.FC<StoryCardBlockProps> = ({
  tag = "OUR STORY",
  emoji = "🥂",
  title = "How It All Began",
  body = "From late-night pasta dinners to long road trips, our favorite adventures have always been the ones spent together. We can't wait to begin our next chapter with our favorite people by our side.",
  accentColor = "butter",
}) => {
  const shouldReduceMotion = useReducedMotion();

  const colorStyles = {
    rose: "bg-rose-50/80 border-rose-200 text-rose-950",
    butter: "bg-amber-50/80 border-amber-200 text-amber-950",
    sage: "bg-emerald-50/80 border-emerald-200 text-emerald-950",
    lavender: "bg-purple-50/80 border-purple-200 text-purple-950",
  }[accentColor] || "bg-amber-50/80 border-amber-200 text-amber-950";

  return (
    <section className="py-8 px-4 sm:px-6">
      <motion.div
        className={`max-w-xl mx-auto rounded-3xl p-6 sm:p-8 border-2 shadow-sm ${colorStyles}`}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl" role="img" aria-label="Decorative emoji">
            {emoji}
          </span>
          <span className="text-xs uppercase tracking-wider font-semibold opacity-75">
            {tag}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
          {title}
        </h2>

        <p className="text-sm sm:text-base leading-relaxed opacity-90">
          {body}
        </p>
      </motion.div>
    </section>
  );
};
