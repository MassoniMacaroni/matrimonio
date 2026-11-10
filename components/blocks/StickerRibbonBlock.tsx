"use client";
/* eslint-disable @next/next/no-img-element */

import React from "react";

export type StickerItem = {
  url: string;
  alt?: string;
  rotation?: "-6" | "-4" | "-2" | "0" | "2" | "4" | "6";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export type StickerRibbonBlockProps = {
  // Items
  stickers?: StickerItem[];

  // Layout & Spacing
  fullBleed?: boolean;
  distribution?: "space-evenly" | "space-between" | "space-around" | "center";
  gap?: "sm" | "md" | "lg" | "xl";
  paddingY?: "none" | "xs" | "sm" | "md" | "lg";
  maxWidth?: "full" | "6xl" | "7xl";

  // Sticker Effects & Appearance
  borderStyle?: "none" | "white-diecut" | "thin-white" | "red-outline";
  shadowStyle?: "none" | "sticker-depth" | "soft" | "flat";
  tiltStyle?: "none" | "subtle" | "playful" | "per-sticker";
  hoverEffect?: "none" | "scale" | "lift" | "wiggle";
  baseSize?: "xs" | "sm" | "md" | "lg" | "xl";

  // Optional Decorative Borders
  lineDivider?: "none" | "subtle-solid" | "dashed" | "dotted";
};

export const defaultStickers: StickerItem[] = [
  { url: "/images/fabricheart.png", alt: "Fabric Heart", rotation: "-4" },
  { url: "/images/redcocktail.png", alt: "Red Cocktail", rotation: "2" },
  { url: "/images/doxxie.png", alt: "Doxxie Pup", rotation: "-2" },
  { url: "/images/weddingcake.png", alt: "Wedding Cake", rotation: "4" },
  { url: "/images/vinosketch.png", alt: "Vino Glass", rotation: "-4" },
  { url: "/images/bordercollie.png", alt: "Border Collie", rotation: "2" },
  { url: "/images/martini.png", alt: "Martini", rotation: "-2" },
  { url: "/images/discoball.png", alt: "Disco Ball", rotation: "4" },
];

const sizeMap = {
  xs: "w-6 h-6 sm:w-12 sm:h-12",
  sm: "w-8 h-8 sm:w-16 sm:h-16",
  md: "w-10 h-10 sm:w-20 sm:h-20",
  lg: "w-12 h-12 sm:w-24 sm:h-24",
  xl: "w-14 h-14 sm:w-28 sm:h-28",
};

const paddingYMap = {
  none: "py-0",
  xs: "py-2 sm:py-3",
  sm: "py-4 sm:py-6",
  md: "py-6 sm:py-10",
  lg: "py-10 sm:py-16",
};

const gapMap = {
  sm: "gap-1.5 sm:gap-6",
  md: "gap-2 sm:gap-8",
  lg: "gap-3 sm:gap-12",
  xl: "gap-4 sm:gap-16",
};

const distributionMap = {
  "space-evenly": "justify-evenly",
  "space-between": "justify-between",
  "space-around": "justify-around",
  center: "justify-center",
};

const hoverEffectMap = {
  none: "transition-none",
  scale: "transition-transform duration-200 hover:scale-115 hover:z-20",
  lift: "transition-transform duration-200 hover:-translate-y-2 hover:scale-110 hover:z-20",
  wiggle: "transition-transform duration-200 hover:rotate-6 hover:scale-115 hover:z-20",
};

export const StickerRibbonBlock: React.FC<StickerRibbonBlockProps> = ({
  stickers = defaultStickers,
  fullBleed = true,
  distribution = "space-evenly",
  gap = "md",
  paddingY = "md",
  maxWidth = "full",
  borderStyle = "none",
  shadowStyle = "none",
  tiltStyle = "subtle",
  hoverEffect = "scale",
  baseSize = "md",
  lineDivider = "none",
}) => {
  const safeStickers = stickers && stickers.length > 0 ? stickers : defaultStickers;

  // Filter effect styling
  const getFilterStyle = (): React.CSSProperties => {
    const filters: string[] = [];

    if (borderStyle === "white-diecut") {
      // Multi-drop-shadow creates a crisp white sticker contour around transparent PNG doodles
      filters.push(
        "drop-shadow(2px 0 0 #ffffff)",
        "drop-shadow(-2px 0 0 #ffffff)",
        "drop-shadow(0 2px 0 #ffffff)",
        "drop-shadow(0 -2px 0 #ffffff)",
        "drop-shadow(1.5px 1.5px 0 #ffffff)",
        "drop-shadow(-1.5px -1.5px 0 #ffffff)"
      );
    } else if (borderStyle === "thin-white") {
      filters.push(
        "drop-shadow(1px 0 0 #ffffff)",
        "drop-shadow(-1px 0 0 #ffffff)",
        "drop-shadow(0 1px 0 #ffffff)",
        "drop-shadow(0 -1px 0 #ffffff)"
      );
    } else if (borderStyle === "red-outline") {
      filters.push(
        "drop-shadow(1.5px 0 0 rgba(179,57,45,0.75))",
        "drop-shadow(-1.5px 0 0 rgba(179,57,45,0.75))",
        "drop-shadow(0 1.5px 0 rgba(179,57,45,0.75))",
        "drop-shadow(0 -1.5px 0 rgba(179,57,45,0.75))"
      );
    }

    if (shadowStyle === "sticker-depth") {
      filters.push("drop-shadow(0 4px 8px rgba(74, 40, 36, 0.18))");
    } else if (shadowStyle === "soft") {
      filters.push("drop-shadow(0 2px 6px rgba(74, 40, 36, 0.10))");
    } else if (shadowStyle === "flat") {
      filters.push("drop-shadow(2px 2px 0 rgba(179, 57, 45, 0.25))");
    }

    return filters.length > 0 ? { filter: filters.join(" ") } : {};
  };

  // Rotation tilt per item
  const getRotationClass = (idx: number, explicitRotation?: string) => {
    if (tiltStyle === "none") return "rotate-0";

    if (tiltStyle === "per-sticker" && explicitRotation) {
      switch (explicitRotation) {
        case "-6":
          return "-rotate-6";
        case "-4":
          return "-rotate-4";
        case "-2":
          return "-rotate-2";
        case "2":
          return "rotate-2";
        case "4":
          return "rotate-4";
        case "6":
          return "rotate-6";
        default:
          return "rotate-0";
      }
    }

    if (tiltStyle === "subtle") {
      const tilts = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-3", "-rotate-3", "rotate-1"];
      return tilts[idx % tilts.length];
    }

    if (tiltStyle === "playful") {
      const tilts = ["-rotate-6", "rotate-4", "-rotate-4", "rotate-6", "-rotate-5", "rotate-3"];
      return tilts[idx % tilts.length];
    }

    return "rotate-0";
  };

  const lineDividerClasses = {
    none: "",
    "subtle-solid": "border-y border-[#b3392d]/15",
    dashed: "border-y border-dashed border-[#b3392d]/25",
    dotted: "border-y border-dotted border-[#b3392d]/30",
  };

  const maxWidthClass =
    maxWidth === "6xl" ? "max-w-6xl mx-auto" : maxWidth === "7xl" ? "max-w-7xl mx-auto" : "w-full";

  return (
    <section
      className={`w-full relative overflow-x-clip ${paddingYMap[paddingY]} ${lineDividerClasses[lineDivider]}`}
      aria-label="Sticker Ribbon Strip"
    >
      {/* Edge-to-Edge Container extending across the whole screen */}
      <div
        className={`${
          fullBleed
            ? "w-screen relative left-1/2 -translate-x-1/2 max-w-[100vw] px-2 sm:px-8"
            : `${maxWidthClass} px-2 sm:px-4`
        }`}
      >
        <div
          className={`flex items-center flex-nowrap ${distributionMap[distribution]} ${gapMap[gap]} w-full`}
        >
          {safeStickers.map((item, idx) => {
            const rotClass = getRotationClass(idx, item.rotation);
            const sizeClass = sizeMap[item.size || baseSize];
            const filterStyle = getFilterStyle();

            return (
              <div
                key={`${item.url}-${idx}`}
                className={`relative shrink min-w-0 flex items-center justify-center select-none cursor-default ${rotClass} ${hoverEffectMap[hoverEffect]}`}
              >
                <img
                  src={item.url}
                  alt={item.alt || `Sticker ${idx + 1}`}
                  draggable={false}
                  style={filterStyle}
                  className={`${sizeClass} max-w-full max-h-full object-contain pointer-events-none transition-all duration-200`}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
