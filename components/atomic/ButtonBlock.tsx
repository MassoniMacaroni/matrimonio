"use client";

import React from "react";

export type ButtonBlockProps = {
  label?: string;
  url?: string;
  variant?: "pill-filled" | "pill-outline" | "link";
  icon?: "none" | "calendar" | "ical" | "external" | "heart";
  download?: string;
  align?: "center" | "left" | "right";
  newTab?: boolean;
  fontStyle?:
    | "sans"
    | "serif"
    | "script"
    | "retro"
    | "harmera"
    | "primate"
    | "pillar"
    | "craze"
    | "chunko";
};

const fontStyleClasses: Record<string, string> = {
  sans: "font-sans",
  serif: "font-serif",
  script: "font-script text-base sm:text-lg",
  retro: "font-display font-extrabold",
  harmera: "font-harmera tracking-wide uppercase",
  primate: "font-primate tracking-wider uppercase",
  pillar: "font-pillar tracking-wide uppercase",
  craze: "font-craze tracking-wider uppercase",
  chunko: "font-chunko tracking-normal",
};

const alignClasses = {
  center: "justify-center",
  left: "justify-start",
  right: "justify-end",
};

export const ButtonBlock: React.FC<ButtonBlockProps> = ({
  label = "Click Here",
  url = "#",
  variant = "pill-filled",
  icon = "none",
  download,
  align = "center",
  newTab = false,
  fontStyle = "sans",
}) => {
  const renderIcon = () => {
    switch (icon) {
      case "calendar":
        return (
          <svg
            className="w-4 h-4 mr-1.5 fill-current shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
          </svg>
        );
      case "ical":
        return (
          <svg
            className="w-4 h-4 mr-1 stroke-current fill-none shrink-0"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      case "external":
        return (
          <svg
            className="w-3.5 h-3.5 ml-1.5 stroke-current fill-none shrink-0"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        );
      case "heart":
        return (
          <svg
            className="w-3.5 h-3.5 mr-1.5 fill-current shrink-0"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getStyleClass = () => {
    switch (variant) {
      case "pill-outline":
        return "inline-flex items-center justify-center border border-[#b3392d] text-[#b3392d] bg-transparent hover:bg-[#b3392d]/10 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-xs";
      case "link":
        return "inline-flex items-center text-xs sm:text-sm font-serif font-medium text-[#b3392d] hover:underline underline-offset-4";
      case "pill-filled":
      default:
        return "btn-wedding-pill text-xs sm:text-sm px-5 py-2.5 inline-flex items-center justify-center shadow-xs hover:shadow-md";
    }
  };

  return (
    <div className={`flex w-full ${alignClasses[align] || "justify-center"} my-2`}>
      <a
        href={url}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        download={download}
        className={`${getStyleClass()} ${fontStyleClasses[fontStyle] || ""}`}
      >
        {renderIcon()}
        <span>{label}</span>
      </a>
    </div>
  );
};
