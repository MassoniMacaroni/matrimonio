"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type FooterBlockProps = {
  signOff: string;
  signature: string;
  domain: string;
};

export const FooterBlock: React.FC<FooterBlockProps> = ({
  signOff = "Can't wait to see you on our big day!",
  signature = "With love, Jules & Jon",
  domain = "julesnjon.com",
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="mt-auto py-12 px-4 text-center border-t border-stone-200/60 bg-white/40">
      <motion.div
        className="max-w-md mx-auto flex flex-col items-center gap-2"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-sm font-medium text-stone-700">{signOff}</p>
        <p className="text-lg font-serif italic font-bold text-rose-900">
          {signature}
        </p>
        <span className="text-xs text-stone-500 font-mono tracking-wider mt-2">
          {domain}
        </span>
      </motion.div>
    </footer>
  );
};
