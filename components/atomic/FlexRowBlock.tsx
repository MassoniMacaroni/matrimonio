"use client";

import React from "react";
import type { Slot, SlotComponent } from "@puckeditor/core";

export type FlexRowBlockProps = {
  items?: Slot | SlotComponent;
  justify?: "center" | "start" | "end" | "between";
  gap?: "sm" | "md" | "lg";
  wrap?: boolean;
};

const justifyClasses = {
  center: "justify-center",
  start: "justify-start",
  end: "justify-end",
  between: "justify-between",
};

const gapClasses = {
  sm: "gap-2",
  md: "gap-3 sm:gap-4",
  lg: "gap-6",
};

export const FlexRowBlock: React.FC<FlexRowBlockProps> = ({
  items,
  justify = "center",
  gap = "md",
  wrap = true,
}) => {
  const Items = items as SlotComponent | undefined;

  return (
    <div
      className={`relative w-full flex items-center ${justifyClasses[justify] || "justify-center"} ${
        gapClasses[gap] || "gap-3 sm:gap-4"
      } ${wrap ? "flex-wrap" : "flex-nowrap"} my-2`}
    >
      {Items && <Items />}
    </div>
  );
};
