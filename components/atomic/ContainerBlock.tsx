"use client";

import React from "react";
import type { Slot, SlotComponent } from "@puckeditor/core";
import { motion } from "framer-motion";
import { WashiTape, RibbonDivider } from "../decorations/Illustrations";

export type ContainerBlockProps = {
  content?: Slot | SlotComponent;
  variant?: "standard" | "card" | "washi-card";
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

export const ContainerBlock: React.FC<ContainerBlockProps> = ({
  content,
  variant = "standard",
  maxWidth = "xl",
  paddingY = "md",
  align = "center",
  showDivider = false,
  animate = true,
}) => {
  const Content = content as SlotComponent | undefined;

  const isCard = variant === "card" || variant === "washi-card";

  const containerContent = (
    <div
      className={`relative w-full flex flex-col ${alignClasses[align] || alignClasses.center} ${
        isCard
          ? `bg-white/70 border border-[#b3392d]/25 rounded-sm shadow-2xs px-6 ${
              variant === "washi-card" ? "pt-8 pb-6" : "py-6"
            }`
          : ""
      }`}
    >
      {variant === "washi-card" && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 select-none pointer-events-none">
          <WashiTape />
        </div>
      )}
      {Content && <Content />}
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
        {containerContent}
      </motion.div>

      {showDivider && (
        <div className="pt-6">
          <RibbonDivider />
        </div>
      )}
    </section>
  );
};
