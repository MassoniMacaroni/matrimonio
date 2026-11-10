"use client";

import React from "react";
import { SparkleCluster } from "../decorations/Illustrations";

export type HeadingBlockProps = {
  text?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  fontStyle?:
    | "retro"
    | "script"
    | "serif"
    | "sans"
    | "mono"
    | "harmera"
    | "primate"
    | "pillar"
    | "craze"
    | "chunko";
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  color?: "primary" | "body" | "muted";
  align?: "center" | "left" | "right";
  uppercase?: boolean;
  tracking?: "tight" | "normal" | "wide" | "widest";
  withSparkles?: boolean;
  marginBottom?: "none" | "sm" | "md" | "lg";
};

const fontStyleClasses: Record<string, string> = {
  retro: "font-display font-extrabold",
  script: "font-script font-normal",
  serif: "font-serif font-bold",
  sans: "font-sans font-bold",
  mono: "font-mono font-medium",
  harmera: "font-harmera tracking-wide",
  primate: "font-primate tracking-wider",
  pillar: "font-pillar tracking-wide",
  craze: "font-craze tracking-wider",
  chunko: "font-chunko tracking-normal",
};

const sizeClasses = {
  sm: "text-sm",
  base: "text-base sm:text-lg",
  lg: "text-lg sm:text-xl",
  xl: "text-xl sm:text-2xl",
  "2xl": "text-2xl sm:text-3xl",
  "3xl": "text-3xl sm:text-4xl",
  "4xl": "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  "5xl": "text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
  "6xl": "text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
};

const colorClasses = {
  primary: "text-[#b3392d]",
  body: "text-[#4a2824]",
  muted: "text-[#b3392d]/75",
};

const alignClasses = {
  center: "text-center",
  left: "text-left",
  right: "text-right",
};

const trackingClasses = {
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  widest: "tracking-[0.2em]",
};

const mbClasses = {
  none: "mb-0",
  sm: "mb-2",
  md: "mb-4",
  lg: "mb-6",
};

export const HeadingBlock: React.FC<HeadingBlockProps> = ({
  text = "Heading",
  as: Tag = "h2",
  fontStyle = "retro",
  size = "3xl",
  color = "primary",
  align = "center",
  uppercase = false,
  tracking = "normal",
  withSparkles = false,
  marginBottom = "sm",
}) => {
  const headingElement = (
    <Tag
      className={`${fontStyleClasses[fontStyle] || fontStyleClasses.retro} ${
        sizeClasses[size] || sizeClasses["3xl"]
      } ${colorClasses[color] || colorClasses.primary} ${
        alignClasses[align] || alignClasses.center
      } ${trackingClasses[tracking] || trackingClasses.normal} ${
        uppercase ? "uppercase" : ""
      } ${mbClasses[marginBottom] || mbClasses.sm} leading-tight whitespace-nowrap`}
    >
      {text}
    </Tag>
  );

  if (withSparkles) {
    return (
      <div className={`flex items-center justify-center gap-2 ${mbClasses[marginBottom] || mbClasses.sm}`}>
        <SparkleCluster />
        {React.cloneElement(headingElement, { className: headingElement.props.className.replace(/mb-\d+/, "mb-0") })}
        <SparkleCluster />
      </div>
    );
  }

  return headingElement;
};
