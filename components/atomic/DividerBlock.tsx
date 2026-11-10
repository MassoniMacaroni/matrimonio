"use client";

import React from "react";
import { RibbonDivider, LeafFlourish } from "../decorations/Illustrations";

export type DividerBlockProps = {
  variant?: "ribbon" | "leaves" | "line" | "spacer-sm" | "spacer-md" | "spacer-lg";
};

export const DividerBlock: React.FC<DividerBlockProps> = ({ variant = "ribbon" }) => {
  switch (variant) {
    case "leaves":
      return (
        <div className="flex items-center justify-center gap-3 my-4 select-none">
          <LeafFlourish flip />
          <span className="w-1.5 h-1.5 rounded-full bg-[#b3392d]" />
          <LeafFlourish />
        </div>
      );
    case "line":
      return (
        <div className="w-full max-w-xs mx-auto my-4 border-t border-[#b3392d]/25" />
      );
    case "spacer-sm":
      return <div className="h-4 w-full" />;
    case "spacer-md":
      return <div className="h-8 w-full" />;
    case "spacer-lg":
      return <div className="h-14 w-full" />;
    case "ribbon":
    default:
      return <RibbonDivider />;
  }
};
