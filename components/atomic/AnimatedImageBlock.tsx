"use client";
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { motion } from "framer-motion";
import type { TargetAndTransition, Transition } from "framer-motion";
import {
  ReachingHandsIllustration,
  CoupleDoodleIllustration,
  ToastingGlassesIllustration,
  TwinCherriesIllustration,
  VintageSaveTheDateStamp,
  LeafFlourish,
  SparkleCluster,
  WashiTape,
  WineBottlePourIllustration,
  PartyPoppersIllustration,
  BanquetTableIllustration,
  AttireIllustration,
  DoodleHeartIllustration,
  EntwinedRingsIllustration,
} from "../decorations/Illustrations";

export type AnimatedImageBlockProps = {
  // Source
  imageType?: "illustration" | "url";
  illustration?:
    | "cherries"
    | "stamp"
    | "leaf-left"
    | "leaf-right"
    | "heart"
    | "rings"
    | "champagne"
    | "couple"
    | "hands"
    | "sparkles"
    | "washi"
    | "wine-bottle"
    | "poppers"
    | "banquet"
    | "attire";
  src?: string;
  alt?: string;

  // Frame & Presentation
  frameStyle?: "none" | "polaroid" | "stamp" | "card" | "circle" | "washi";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "auto";
  aspectRatio?: "square" | "portrait" | "landscape" | "auto";
  caption?: string;
  rotation?: "-12" | "-8" | "-4" | "-2" | "0" | "2" | "4" | "8" | "12";

  // Animation
  animation?:
    | "float"
    | "sway"
    | "float-sway"
    | "pulse"
    | "spin-slow"
    | "bounce"
    | "wiggle"
    | "scroll-reveal"
    | "none";
  speed?: "slow" | "normal" | "fast";
  delay?: "0" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3";
  hoverEffect?: "none" | "lift" | "tilt" | "scale" | "wiggle";

  // Positioning & Placement
  placement?:
    | "inline"
    | "container-center-left"
    | "container-center-right"
    | "corner-top-left"
    | "corner-top-right"
    | "corner-bottom-left"
    | "corner-bottom-right"
    | "border-left"
    | "border-right"
    | "fixed-top-left"
    | "fixed-top-right"
    | "fixed-bottom-left"
    | "fixed-bottom-right"
    | "fixed-left"
    | "fixed-right";
  align?: "center" | "left" | "right";
  hideOnMobile?: boolean;
  zIndex?: "behind" | "normal" | "above";

  // Interaction
  linkUrl?: string;
  newTab?: boolean;
};

const sizeClasses = {
  xs: "w-10 sm:w-12",
  sm: "w-16 sm:w-20",
  md: "w-24 sm:w-32",
  lg: "w-36 sm:w-44",
  xl: "w-48 sm:w-60",
  "2xl": "w-64 sm:w-80",
  auto: "w-auto max-w-full",
};

const aspectClasses = {
  square: "aspect-square object-cover",
  portrait: "aspect-[3/4] object-cover",
  landscape: "aspect-[4/3] object-cover",
  auto: "object-contain",
};

const alignClasses = {
  center: "justify-center",
  left: "justify-start",
  right: "justify-end",
};

const zIndexClasses = {
  behind: "z-0",
  normal: "z-10",
  above: "z-30",
};

export const AnimatedImageBlock: React.FC<AnimatedImageBlockProps> = ({
  imageType = "illustration",
  illustration = "cherries",
  src = "",
  alt = "Wedding decorative illustration",
  frameStyle = "none",
  size = "md",
  aspectRatio = "auto",
  caption = "",
  rotation = "0",
  animation = "float-sway",
  speed = "normal",
  delay = "0",
  hoverEffect = "lift",
  placement = "inline",
  align = "center",
  hideOnMobile = false,
  zIndex = "normal",
  linkUrl = "",
  newTab = false,
}) => {
  const baseRot = parseFloat(rotation) || 0;
  const numDelay = parseFloat(delay) || 0;

  // Speed durations
  const speedDurations = {
    slow: 5.5,
    normal: 3.6,
    fast: 2.2,
  };
  const dur = speedDurations[speed] || 3.6;

  // Render internal media (illustration or custom image)
  const renderMedia = () => {
    if (imageType === "url" && src) {
      return (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full rounded-xs select-none pointer-events-none ${
            aspectClasses[aspectRatio] || "object-contain"
          }`}
          loading="lazy"
        />
      );
    }

    switch (illustration) {
      case "stamp":
        return <VintageSaveTheDateStamp />;
      case "leaf-left":
        return <LeafFlourish flip className="w-full h-full scale-125" />;
      case "leaf-right":
        return <LeafFlourish className="w-full h-full scale-125" />;
      case "heart":
        return <DoodleHeartIllustration className="w-full h-full" />;
      case "rings":
        return <EntwinedRingsIllustration className="w-full h-full" />;
      case "champagne":
        return <ToastingGlassesIllustration />;
      case "couple":
        return <CoupleDoodleIllustration />;
      case "hands":
        return <ReachingHandsIllustration />;
      case "sparkles":
        return <SparkleCluster className="scale-150" />;
      case "washi":
        return <WashiTape />;
      case "wine-bottle":
        return <WineBottlePourIllustration />;
      case "poppers":
        return <PartyPoppersIllustration />;
      case "banquet":
        return <BanquetTableIllustration />;
      case "attire":
        return <AttireIllustration />;
      case "cherries":
      default:
        return <TwinCherriesIllustration className="w-full h-full" />;
    }
  };

  // Build framed content based on frameStyle
  const framedContent = (
    <div className="relative flex flex-col items-center">
      {frameStyle === "washi" && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 select-none pointer-events-none z-10">
          <WashiTape />
        </div>
      )}

      <div
        className={`relative ${
          frameStyle === "polaroid"
            ? "bg-white p-2.5 sm:p-3 pb-6 sm:pb-7 rounded-2xs shadow-md border border-[#4a2824]/10 text-center"
            : frameStyle === "stamp"
            ? "bg-[#fdfaf5] p-3 rounded-xs border-2 border-dashed border-[#b3392d]/45 shadow-2xs text-center"
            : frameStyle === "card"
            ? "bg-white/85 p-3 rounded-sm border border-[#b3392d]/25 shadow-2xs text-center"
            : frameStyle === "circle"
            ? "rounded-full p-2 bg-white/70 border-2 border-[#b3392d]/30 shadow-2xs overflow-hidden flex items-center justify-center aspect-square"
            : frameStyle === "washi"
            ? "bg-white/90 p-2.5 pt-4 rounded-xs border border-[#b3392d]/20 shadow-2xs"
            : ""
        }`}
      >
        <div
          className={`${sizeClasses[size] || sizeClasses.md} flex items-center justify-center overflow-hidden`}
        >
          {renderMedia()}
        </div>

        {caption && (frameStyle === "polaroid" || frameStyle === "card" || frameStyle === "stamp") && (
          <p className="mt-2 text-xs font-serif text-[#4a2824]/90 tracking-tight select-none">
            {caption}
          </p>
        )}
      </div>

      {caption && frameStyle !== "polaroid" && frameStyle !== "card" && frameStyle !== "stamp" && (
        <p className="mt-1.5 text-xs font-sans text-[#4a2824]/80 tracking-wide text-center select-none">
          {caption}
        </p>
      )}
    </div>
  );

  // Configure continuous motion animation
  let motionAnimate: TargetAndTransition = {
    rotate: baseRot,
  };
  let motionTransition: Transition = {
    delay: numDelay,
  };

  if (animation !== "none") {
    switch (animation) {
      case "float":
        motionAnimate = {
          y: [-5, 5, -5],
          rotate: baseRot,
        };
        motionTransition = {
          y: { duration: dur, repeat: Infinity, ease: "easeInOut", delay: numDelay },
        };
        break;

      case "sway":
        motionAnimate = {
          rotate: [baseRot - 3.5, baseRot + 3.5, baseRot - 3.5],
        };
        motionTransition = {
          rotate: { duration: dur, repeat: Infinity, ease: "easeInOut", delay: numDelay },
        };
        break;

      case "float-sway":
        motionAnimate = {
          y: [-6, 6, -6],
          rotate: [baseRot - 3, baseRot + 3, baseRot - 3],
        };
        motionTransition = {
          y: { duration: dur, repeat: Infinity, ease: "easeInOut", delay: numDelay },
          rotate: { duration: dur * 1.25, repeat: Infinity, ease: "easeInOut", delay: numDelay },
        };
        break;

      case "pulse":
        motionAnimate = {
          scale: [1, 1.06, 1],
          rotate: baseRot,
        };
        motionTransition = {
          scale: { duration: dur, repeat: Infinity, ease: "easeInOut", delay: numDelay },
        };
        break;

      case "spin-slow":
        motionAnimate = {
          rotate: [baseRot, baseRot + 360],
        };
        motionTransition = {
          rotate: { duration: dur * 4, repeat: Infinity, ease: "linear", delay: numDelay },
        };
        break;

      case "bounce":
        motionAnimate = {
          y: [0, -9, 0],
          rotate: baseRot,
        };
        motionTransition = {
          y: { duration: dur * 0.75, repeat: Infinity, ease: [0.22, 1, 0.36, 1], delay: numDelay },
        };
        break;

      case "wiggle":
        motionAnimate = {
          rotate: [baseRot, baseRot - 5, baseRot + 5, baseRot - 3, baseRot + 3, baseRot],
        };
        motionTransition = {
          rotate: {
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: dur,
            ease: "easeInOut",
            delay: numDelay,
          },
        };
        break;

      case "scroll-reveal":
        motionAnimate = {
          opacity: 1,
          y: 0,
          rotate: baseRot,
        };
        motionTransition = {
          duration: 0.6,
          delay: numDelay,
        };
        break;
    }
  }

  // Configure hover effects
  const hoverVariants = {
    lift: { y: -6, scale: 1.03 },
    tilt: { rotate: baseRot + 6, scale: 1.04 },
    scale: { scale: 1.08 },
    wiggle: { rotate: [baseRot, baseRot - 4, baseRot + 4, baseRot] },
    none: {},
  };

  const animatedElement = (
    <motion.div
      initial={
        animation === "scroll-reveal"
          ? { opacity: 0, y: 16, rotate: baseRot }
          : { rotate: baseRot }
      }
      animate={motionAnimate}
      transition={motionTransition}
      whileHover={hoverEffect !== "none" ? hoverVariants[hoverEffect] : undefined}
      className="inline-block select-none"
    >
      {linkUrl ? (
        <a
          href={linkUrl}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
          className="cursor-pointer block focus:outline-none focus:ring-2 focus:ring-[#b3392d]/50 rounded-xs"
        >
          {framedContent}
        </a>
      ) : (
        framedContent
      )}
    </motion.div>
  );

  // Placement class map
  const isInline = placement === "inline";
  const mobileClass = hideOnMobile ? "hidden sm:block" : "block";
  const zClass = zIndexClasses[zIndex] || "z-10";

  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    if (placement !== "inline") {
      parent.style.setProperty("position", "static", "important");
      return () => {
        parent.style.removeProperty("position");
      };
    } else {
      parent.style.removeProperty("position");
    }
  }, [placement]);

  if (isInline) {
    return (
      <div
        ref={rootRef}
        className={`flex ${alignClasses[align] || alignClasses.center} shrink-0 my-2 ${zClass} ${mobileClass}`}
      >
        {animatedElement}
      </div>
    );
  }

  // Outside Border / Frame / Corner / Fixed placements
  const placementClassMap: Record<string, string> = {
    // Container edges (middle, top, bottom)
    "container-center-left":
      "absolute top-1/2 -translate-y-1/2 bottom-auto -left-4 sm:-left-10 md:-left-16 lg:-left-20",
    "container-center-right":
      "absolute top-1/2 -translate-y-1/2 bottom-auto -right-4 sm:-right-10 md:-right-16 lg:-right-20",
    "corner-top-left":
      "absolute -top-6 bottom-auto -left-4 sm:-left-10 md:-left-16 lg:-left-20",
    "corner-top-right":
      "absolute -top-6 bottom-auto -right-4 sm:-right-10 md:-right-16 lg:-right-20",
    "corner-bottom-left":
      "absolute -bottom-6 top-auto -left-4 sm:-left-10 md:-left-16 lg:-left-20",
    "corner-bottom-right":
      "absolute -bottom-6 top-auto -right-4 sm:-right-10 md:-right-16 lg:-right-20",

    // Wide page gutter borders
    "border-left":
      "absolute top-1/2 -translate-y-1/2 bottom-auto -left-8 sm:-left-16 md:-left-24 lg:-left-36",
    "border-right":
      "absolute top-1/2 -translate-y-1/2 bottom-auto -right-8 sm:-right-16 md:-right-24 lg:-right-36",

    // Viewport-fixed page frame borders
    "fixed-top-left": "fixed top-4 left-4 sm:top-6 sm:left-6",
    "fixed-top-right": "fixed top-4 right-4 sm:top-6 sm:right-6",
    "fixed-bottom-left": "fixed bottom-4 left-4 sm:bottom-6 sm:left-6",
    "fixed-bottom-right": "fixed bottom-4 right-4 sm:bottom-6 sm:right-6",
    "fixed-left": "fixed top-1/2 -translate-y-1/2 left-3 sm:left-6",
    "fixed-right": "fixed top-1/2 -translate-y-1/2 right-3 sm:right-6",
  };

  const placementClasses = placementClassMap[placement] || placementClassMap["border-left"];

  return (
    <>
      <style>{`
        [data-puck-component]:has([data-placement-border]),
        div:has(> [data-placement-border]),
        [class*="_DropZone-item"]:has([data-placement-border]) {
          position: static !important;
        }
      `}</style>
      <div
        ref={rootRef}
        data-placement-border={placement}
        className={`${placementClasses} ${zClass} ${mobileClass} pointer-events-auto select-none`}
      >
        {animatedElement}
      </div>
    </>
  );
};
