"use client";

import React from "react";
import type { Slot, SlotComponent } from "@puckeditor/core";

export type FlexRowBlockProps = {
  items?: Slot | SlotComponent;
  justify?: "center" | "start" | "end" | "between" | "evenly" | "around" | "center-split";
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  wrap?: boolean;
};

const justifyClasses: Record<string, string> = {
  center: "justify-center",
  start: "justify-start",
  end: "justify-end",
  between: "justify-between",
  evenly: "justify-evenly",
  around: "justify-around",
  "center-split": "center-split-row",
};

const gapClasses: Record<string, string> = {
  none: "gap-0",
  sm: "gap-2",
  md: "gap-3 sm:gap-4 md:gap-6",
  lg: "gap-6 sm:gap-8 md:gap-10",
  xl: "gap-8 sm:gap-12 md:gap-16",
};

export const FlexRowBlock: React.FC<FlexRowBlockProps> = ({
  items,
  justify = "center",
  gap = "md",
  wrap = false,
}) => {
  const Items = items as SlotComponent | undefined;

  const isCenterSplit = justify === "center-split";

  const layoutClasses = isCenterSplit
    ? `relative w-full center-split-row ${gapClasses[gap] || "gap-3 sm:gap-4 md:gap-6"} my-2`
    : `relative w-full flex items-center ${
        justifyClasses[justify] || "justify-center"
      } ${gapClasses[gap] || "gap-3 sm:gap-4 md:gap-6"} ${
        wrap ? "flex-wrap" : "flex-nowrap"
      } my-2`;

  if (!Items) return null;

  return (
    <div className="relative w-full">
      <Items className={layoutClasses} />
    </div>
  );
};
