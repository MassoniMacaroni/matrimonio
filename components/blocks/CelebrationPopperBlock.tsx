"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RibbonDivider } from "../decorations/Illustrations";
import { useConfetti, ConfettiCanvas } from "../decorations/ConfettiCannon";

export type CelebrationPopperBlockProps = {
  title?: string;
  subtitle?: string;
  showDivider?: boolean;
};

export const CelebrationPopperBlock: React.FC<CelebrationPopperBlockProps> = ({
  title = "celebrate with us",
  subtitle = "save the date & toast the happy couple!",
  showDivider = true,
}) => {
  const { canvasRef, fire } = useConfetti();
  const [popCount, setPopCount] = useState(0);
  const [isPopping, setIsPopping] = useState(false);

  // Trigger celebration popper animation automatically on refresh / page load
  useEffect(() => {
    const timer = setTimeout(() => {
      const width = typeof window !== "undefined" ? window.innerWidth : 600;
      const height = typeof window !== "undefined" ? window.innerHeight : 400;
      fire(width * 0.3, height * 0.4, 55);
      fire(width * 0.7, height * 0.4, 55);
      setIsPopping(true);
      setTimeout(() => setIsPopping(false), 500);
    }, 700);

    return () => clearTimeout(timer);
  }, [fire]);

  const cheersMessages = [
    "Cheers to Jules & Jon! 🥂",
    "Can't wait to dance the night away! 💃🕺",
    "Sydney here we come! 🌊",
    "Sending so much love! ❤️",
    "The countdown is on! ✨",
  ];

  const handlePop = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Fire confetti bursts from both sides
    fire(x - 60, y - 20, 50);
    fire(x + 60, y - 20, 50);

    setPopCount((prev) => prev + 1);
    setIsPopping(true);
    setTimeout(() => setIsPopping(false), 350);
  };

  const currentMessage =
    popCount > 0
      ? cheersMessages[(popCount - 1) % cheersMessages.length]
      : null;

  return (
    <section id="celebrate" className="relative py-10 px-4 text-center max-w-xl mx-auto overflow-hidden">
      <ConfettiCanvas canvasRef={canvasRef} />

      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center"
      >
        {/* Title in chunky lowercase Fraunces */}
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#b3392d] lowercase tracking-normal mb-2">
          {title}
        </h2>

        {subtitle && (
          <p className="text-xs sm:text-sm font-medium tracking-wide text-[#b3392d]/80 max-w-sm mb-4">
            {subtitle}
          </p>
        )}

        {/* Animated Hand-Drawn Party Poppers Pair (pops on refresh & can be clicked for extra cheer) */}
        <motion.div
          onClick={handlePop}
          animate={
            isPopping
              ? { scale: [1, 1.18, 0.94, 1], rotate: [0, -4, 4, 0] }
              : { scale: 1, rotate: 0 }
          }
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="cursor-pointer group relative my-2 select-none"
          title="Click to pop!"
        >
          <svg
            viewBox="0 0 280 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-56 sm:w-64 h-auto overflow-visible transition-transform duration-200 group-hover:scale-105"
          >
            {/* Left Party Popper */}
            <g transform="translate(30, 25) rotate(-10 60 70)">
              {/* Popper Cone */}
              <polygon
                points="30,85 75,50 86,64"
                stroke="#b3392d"
                strokeWidth="1.8"
                fill="#f6efe5"
                strokeLinejoin="round"
              />
              {/* Cone stripes */}
              <path d="M45,74 L 78,60" stroke="#b3392d" strokeWidth="1.4" />
              <path d="M58,64 L 82,53" stroke="#b3392d" strokeWidth="1.4" />
              {/* Rim */}
              <ellipse
                cx="80"
                cy="57"
                rx="6"
                ry="10"
                transform="rotate(32 80 57)"
                stroke="#b3392d"
                strokeWidth="1.8"
                fill="#b3392d"
                fillOpacity="0.15"
              />
              {/* Pull string */}
              <path
                d="M30 85 Q 22 93, 24 100 Q 26 104, 21 107"
                stroke="#b3392d"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <circle cx="21" cy="107" r="2" fill="#b3392d" />
            </g>

            {/* Right Party Popper */}
            <g transform="translate(130, 25) rotate(10 60 70)">
              {/* Popper Cone */}
              <polygon
                points="90,85 45,50 34,64"
                stroke="#b3392d"
                strokeWidth="1.8"
                fill="#f6efe5"
                strokeLinejoin="round"
              />
              {/* Cone stripes */}
              <path d="M75,74 L 42,60" stroke="#b3392d" strokeWidth="1.4" />
              <path d="M62,64 L 38,53" stroke="#b3392d" strokeWidth="1.4" />
              {/* Rim */}
              <ellipse
                cx="40"
                cy="57"
                rx="6"
                ry="10"
                transform="rotate(-32 40 57)"
                stroke="#b3392d"
                strokeWidth="1.8"
                fill="#b3392d"
                fillOpacity="0.15"
              />
              {/* Pull string */}
              <path
                d="M90 85 Q 98 93, 96 100 Q 94 104, 99 107"
                stroke="#b3392d"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <circle cx="99" cy="107" r="2" fill="#b3392d" />
            </g>

            {/* Center Confetti & Serpentine ribbons burst */}
            <path
              d="M110 50 Q 120 25, 130 35 T 140 12"
              stroke="#b3392d"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M130 55 Q 142 35, 150 42 T 160 25"
              stroke="#b3392d"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M100 45 Q 90 28, 98 22 T 105 5"
              stroke="#b3392d"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Sparkles / Twinkle Stars */}
            <path
              d="M125 15 L 127 21 L 133 23 L 127 25 L 125 31 L 123 25 L 117 23 L 123 21 Z"
              fill="#b3392d"
            />
            <path
              d="M92 14 L 93 18 L 97 19 L 93 20 L 92 24 L 91 20 L 87 19 L 91 18 Z"
              fill="#b3392d"
            />
            <path
              d="M158 18 L 159 22 L 163 23 L 159 24 L 158 28 L 157 24 L 153 23 L 157 22 Z"
              fill="#b3392d"
            />
            {/* Confetti dots & hearts */}
            <circle cx="112" cy="35" r="2.8" fill="#b3392d" />
            <circle cx="138" cy="32" r="2.4" fill="#b3392d" />
            <circle cx="95" cy="30" r="2" fill="#b3392d" />
            <circle cx="155" cy="32" r="2" fill="#b3392d" />
            <path
              d="M125 6 C 123 3, 120 4, 120 6 C 120 9, 125 11, 125 11 C 125 11, 130 9, 130 6 C 130 4, 127 3, 125 6 Z"
              fill="#b3392d"
            />
          </svg>
        </motion.div>

        {/* Cheers Message & Counter (shows if guest taps the popper) */}
        {popCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 space-y-1"
          >
            <p className="font-display font-bold text-base text-[#b3392d]">
              {currentMessage}
            </p>
            <p className="text-xs tracking-wider uppercase font-semibold text-[#b3392d]/70">
              {popCount} {popCount === 1 ? "toast popped" : "toasts popped"} 🎉
            </p>
          </motion.div>
        )}
      </motion.div>

      {showDivider && (
        <div className="pt-6">
          <RibbonDivider />
        </div>
      )}
    </section>
  );
};
