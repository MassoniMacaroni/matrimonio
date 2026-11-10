"use client";

import React from "react";

export type TextBlockProps = {
  content?: string;
  fontStyle?: "serif" | "sans" | "mono" | "script";
  size?: "xs" | "sm" | "base" | "lg";
  color?: "body" | "primary" | "muted";
  align?: "center" | "left" | "right";
  uppercase?: boolean;
  tracking?: "normal" | "wide" | "widest";
  maxWidth?: "none" | "xs" | "sm" | "md";
  marginBottom?: "none" | "sm" | "md" | "lg";
};

const fontStyleClasses = {
  serif: "font-serif font-medium",
  sans: "font-sans font-medium",
  mono: "font-mono font-medium",
  script: "font-script font-normal",
};

const sizeClasses = {
  xs: "text-xs sm:text-sm",
  sm: "text-sm sm:text-base",
  base: "text-base sm:text-lg",
  lg: "text-lg sm:text-xl",
};

const colorClasses = {
  body: "text-[#4a2824]/90",
  primary: "text-[#b3392d]",
  muted: "text-[#b3392d]/75",
};

const alignClasses = {
  center: "text-center mx-auto",
  left: "text-left mr-auto",
  right: "text-right ml-auto",
};

const trackingClasses = {
  normal: "tracking-normal",
  wide: "tracking-wide",
  widest: "tracking-[0.2em]",
};

const maxWidthClasses = {
  none: "max-w-none",
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
};

const mbClasses = {
  none: "mb-0",
  sm: "mb-2",
  md: "mb-4",
  lg: "mb-6",
};

export const TextBlock: React.FC<TextBlockProps> = ({
  content = "Your text here...",
  fontStyle = "serif",
  size = "sm",
  color = "body",
  align = "center",
  uppercase = false,
  tracking = "normal",
  maxWidth = "sm",
  marginBottom = "sm",
}) => {
  if (!content) return null;

  return (
    <p
      className={`leading-relaxed ${fontStyleClasses[fontStyle] || fontStyleClasses.serif} ${
        sizeClasses[size] || sizeClasses.sm
      } ${colorClasses[color] || colorClasses.body} ${
        alignClasses[align] || alignClasses.center
      } ${trackingClasses[tracking] || trackingClasses.normal} ${
        maxWidthClasses[maxWidth] || maxWidthClasses.sm
      } ${mbClasses[marginBottom] || mbClasses.sm} ${
        uppercase ? "uppercase" : ""
      }`}
    >
      {content}
    </p>
  );
};
