"use client";

import React from "react";
import type { Slot, SlotComponent } from "@puckeditor/core";
import { motion } from "framer-motion";
import { RibbonDivider } from "../decorations/Illustrations";

export type BorderFrameBlockProps = {
  content?: Slot | SlotComponent;
  topLeft?: Slot | SlotComponent;
  topRight?: Slot | SlotComponent;
  bottomLeft?: Slot | SlotComponent;
  bottomRight?: Slot | SlotComponent;
  borderStyle?: "none" | "retro-double" | "dashed" | "card" | "delicate-line";
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  paddingY?: "none" | "sm" | "md" | "lg" | "xl";
  align?: "center" | "left" | "right";
  showDivider?: boolean;
  animate?: boolean;
};

const maxWidthClasses = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full",
};

const paddingYClasses = {
  none: "py-0",
  sm: "py-4",
  md: "py-8",
  lg: "pt-12 pb-6",
  xl: "pt-8 pb-16",
};

const alignClasses = {
  center: "text-center items-center",
  left: "text-left items-start",
  right: "text-right items-end",
};

export const BorderFrameBlock: React.FC<BorderFrameBlockProps> = ({
  content,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  borderStyle = "retro-double",
  maxWidth = "xl",
  paddingY = "md",
  align = "center",
  showDivider = false,
  animate = true,
}) => {
  const Content = content as SlotComponent | undefined;
  const TopLeft = topLeft as SlotComponent | undefined;
  const TopRight = topRight as SlotComponent | undefined;
  const BottomLeft = bottomLeft as SlotComponent | undefined;
  const BottomRight = bottomRight as SlotComponent | undefined;

  const getBorderClasses = () => {
    switch (borderStyle) {
      case "retro-double":
        return "border-4 border-double border-[#b3392d]/40 p-6 sm:p-8 rounded-sm bg-white/40";
      case "dashed":
        return "border-2 border-dashed border-[#b3392d]/35 p-6 sm:p-8 rounded-sm bg-white/35";
      case "card":
        return "border border-[#b3392d]/25 p-6 sm:p-8 rounded-md bg-white/75 shadow-xs";
      case "delicate-line":
        return "border border-[#b3392d]/20 p-6 sm:p-8 rounded-xs bg-transparent";
      case "none":
      default:
        return "p-4 sm:p-6";
    }
  };

  const frameInner = (
    <div className={`relative w-full ${getBorderClasses()}`}>
      {/* Corner Slots (positioned on the outer frame corners) */}
      {TopLeft && (
        <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 z-20 pointer-events-auto">
          <TopLeft />
        </div>
      )}

      {TopRight && (
        <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 z-20 pointer-events-auto">
          <TopRight />
        </div>
      )}

      {BottomLeft && (
        <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 z-20 pointer-events-auto">
          <BottomLeft />
        </div>
      )}

      {BottomRight && (
        <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 z-20 pointer-events-auto">
          <BottomRight />
        </div>
      )}

      {/* Main Content inside the frame */}
      <div className={`w-full flex flex-col ${alignClasses[align] || alignClasses.center}`}>
        {Content && <Content />}
      </div>
    </div>
  );

  return (
    <section
      className={`relative px-4 sm:px-6 mx-auto w-full ${maxWidthClasses[maxWidth] || maxWidthClasses.xl} ${
        paddingYClasses[paddingY] || paddingYClasses.md
      }`}
    >
      <motion.div
        initial={animate ? { opacity: 0, y: 14 } : false}
        whileInView={animate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {frameInner}
      </motion.div>

      {showDivider && (
        <div className="pt-6">
          <RibbonDivider />
        </div>
      )}
    </section>
  );
};
