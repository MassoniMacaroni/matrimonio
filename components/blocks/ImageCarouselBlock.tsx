"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useRef, useState, useEffect, useCallback } from "react";
import { useReducedMotion } from "framer-motion";
import { RibbonDivider } from "../decorations/Illustrations";

export type CarouselImageItem = {
  url: string;
  alt?: string;
  caption?: string;
  subcaption?: string;
  rotation?: "-2" | "-1" | "0" | "1" | "2";
};

export type ImageCarouselBlockProps = {
  // Content & Headers
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
  images?: CarouselImageItem[];

  // Behavior
  speed?: "slow" | "medium" | "fast" | "paused";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  showControls?: boolean;
  showPauseButton?: boolean;
  showScrollHint?: boolean;
  showEdgeFades?: boolean;
  fullBleed?: boolean;

  // Styling
  cardStyle?: "polaroid" | "vintage-card" | "modern" | "minimal" | "flush";
  cardHeight?: "xs" | "sm" | "md" | "lg" | "xl";
  aspectRatio?: "portrait" | "square" | "landscape" | "auto";
  gap?: "none" | "sm" | "md" | "lg";
  subtleTilt?: boolean;
  showDivider?: boolean;
};

export const defaultCarouselImages: CarouselImageItem[] = [
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    alt: "Wedding toast celebration",
    caption: "The Toast",
    subcaption: "Cheers to forever",
    rotation: "-1",
  },
  {
    url: "/images/harbourbridge.png",
    alt: "Sydney Harbour Bridge sketch",
    caption: "The Rocks, Sydney",
    subcaption: "Where our story unfolds",
    rotation: "1",
  },
  {
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    alt: "Couple walking in the sunset",
    caption: "Golden Hour",
    subcaption: "Walking into tomorrow",
    rotation: "-2",
  },
  {
    url: "/images/redflowers.png",
    alt: "Red floral bouquet doodle",
    caption: "Wildflowers & Roses",
    subcaption: "Handpicked for the day",
    rotation: "0",
  },
  {
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    alt: "Wedding rings close up",
    caption: "The Vows",
    subcaption: "Promises sealed with love",
    rotation: "1",
  },
  {
    url: "/images/weddingcake.png",
    alt: "Wedding cake sketch",
    caption: "Sweetest Moments",
    subcaption: "Three tiers of joy",
    rotation: "-1",
  },
  {
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    alt: "Fairy light dinner table",
    caption: "Feast Under Stars",
    subcaption: "Laughter, wine & dinner",
    rotation: "2",
  },
  {
    url: "/images/bordercollie.png",
    alt: "Beloved furry family member",
    caption: "Ring Bearer",
    subcaption: "Dressed to impress",
    rotation: "-1",
  },
  {
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    alt: "First dance in candle light",
    caption: "First Dance",
    subcaption: "Spinning all night long",
    rotation: "1",
  },
];

const speedMap = {
  paused: 0,
  slow: 25,
  medium: 50,
  fast: 85,
};

const heightClasses = {
  xs: "h-36 sm:h-44",
  sm: "h-56 sm:h-64",
  md: "h-72 sm:h-80",
  lg: "h-88 sm:h-96",
  xl: "h-[420px] sm:h-[480px]",
};

const aspectRatioClasses = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  auto: "aspect-auto",
};

const gapClasses = {
  none: "gap-0",
  sm: "gap-4 sm:gap-6",
  md: "gap-6 sm:gap-8",
  lg: "gap-8 sm:gap-12",
};

export const ImageCarouselBlock: React.FC<ImageCarouselBlockProps> = ({
  title = "Moments Together",
  subtitle = "A glimpse into our story and favorite memories",
  showTitle = true,
  images = defaultCarouselImages,
  speed = "slow",
  direction = "left",
  pauseOnHover = true,
  showControls = true,
  showPauseButton = true,
  showScrollHint = true,
  showEdgeFades = false,
  fullBleed = true,
  cardStyle = "polaroid",
  cardHeight = "md",
  aspectRatio = "portrait",
  gap = "md",
  subtleTilt = true,
  showDivider = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [singleSetWidth, setSingleSetWidth] = useState(0);

  // Drag interaction state
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const isInteractingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isInteractingRef = useRef(false);

  const safeImages = images && images.length > 0 ? images : defaultCarouselImages;

  // We repeat the images 3 times to allow infinite continuous looping in both directions
  const repeatedImages = [...safeImages, ...safeImages, ...safeImages];

  // Measure the width of one complete set of images
  const measureSetWidth = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollW = scrollRef.current.scrollWidth;
    if (scrollW > 0) {
      const oneSet = scrollW / 3;
      setSingleSetWidth(oneSet);
      // Initialize to the middle set if currently at 0
      if (scrollRef.current.scrollLeft === 0 && oneSet > 0) {
        scrollRef.current.scrollLeft = oneSet;
      }
    }
  }, []);

  useEffect(() => {
    measureSetWidth();

    const handleResize = () => {
      measureSetWidth();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measureSetWidth, safeImages.length]);

  // When images load, re-measure to ensure accurate width
  const handleImageLoad = () => {
    measureSetWidth();
  };

  // Continuous auto-sliding animation frame loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    let lastTime: number | null = null;

    const baseSpeed = speedMap[speed] || speedMap.slow;

    const tick = (currentTime: number) => {
      if (lastTime === null) {
        lastTime = currentTime;
      }
      const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      const canAutoScroll =
        !shouldReduceMotion &&
        !isPausedByUser &&
        baseSpeed > 0 &&
        !isDragging &&
        !(pauseOnHover && isHovered) &&
        !isInteractingRef.current;

      if (canAutoScroll && singleSetWidth > 0) {
        const movePixels = baseSpeed * deltaTime * (direction === "right" ? -1 : 1);
        el.scrollLeft += movePixels;
      }

      // Seamless infinite looping wrap
      if (singleSetWidth > 0) {
        if (el.scrollLeft >= singleSetWidth * 2) {
          el.scrollLeft -= singleSetWidth;
        } else if (el.scrollLeft <= singleSetWidth * 0.1) {
          el.scrollLeft += singleSetWidth;
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    speed,
    direction,
    pauseOnHover,
    isHovered,
    isDragging,
    isPausedByUser,
    shouldReduceMotion,
    singleSetWidth,
  ]);

  // Handle native user wheel/trackpad scrolling and touch interactions
  const handleScroll = () => {
    isInteractingRef.current = true;
    if (isInteractingTimeoutRef.current) {
      clearTimeout(isInteractingTimeoutRef.current);
    }
    // Resume auto-sliding 900ms after user finishes scrolling
    isInteractingTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 900);

    // Also enforce wrapping bounds during manual scroll
    const el = scrollRef.current;
    if (el && singleSetWidth > 0) {
      if (el.scrollLeft >= singleSetWidth * 2) {
        el.scrollLeft -= singleSetWidth;
      } else if (el.scrollLeft <= singleSetWidth * 0.1) {
        el.scrollLeft += singleSetWidth;
      }
    }
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    hasDraggedRef.current = false;
    dragStartXRef.current = e.pageX - scrollRef.current.offsetLeft;
    dragStartScrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - dragStartXRef.current;
    if (Math.abs(walk) > 4) {
      hasDraggedRef.current = true;
    }
    scrollRef.current.scrollLeft = dragStartScrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  // Step scroll buttons (Previous / Next)
  const handleScrollStep = (directionStep: "prev" | "next") => {
    if (!scrollRef.current) return;
    isInteractingRef.current = true;
    if (isInteractingTimeoutRef.current) {
      clearTimeout(isInteractingTimeoutRef.current);
    }
    isInteractingTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 1500);

    const stepAmount = 340;
    scrollRef.current.scrollBy({
      left: directionStep === "next" ? stepAmount : -stepAmount,
      behavior: "smooth",
    });
  };

  // Get rotation styling for polaroid cards
  const getCardRotationClass = (idx: number, explicitRotation?: string) => {
    if (!subtleTilt || cardStyle === "flush") return "";
    if (explicitRotation) {
      switch (explicitRotation) {
        case "-2":
          return "-rotate-2";
        case "-1":
          return "-rotate-1";
        case "1":
          return "rotate-1";
        case "2":
          return "rotate-2";
        default:
          return "rotate-0";
      }
    }
    // Default alternating tilts
    const mod = idx % 4;
    if (mod === 0) return "-rotate-1 sm:-rotate-1.5";
    if (mod === 1) return "rotate-1 sm:rotate-1.5";
    if (mod === 2) return "-rotate-0.5 sm:-rotate-1";
    return "rotate-1 sm:rotate-2";
  };

  return (
    <section
      ref={containerRef}
      className="w-full relative py-8 sm:py-12 overflow-x-clip select-none"
      aria-label="Image Carousel"
    >
      {/* Optional Title & Subtitle */}
      {showTitle && (
        <div className="max-w-xl mx-auto text-center px-4 mb-6 sm:mb-8">
          {title && (
            <h3 className="font-script text-4xl sm:text-5xl text-[#b3392d] tracking-wide mb-2 drop-shadow-xs">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="font-serif italic text-sm sm:text-base text-[#4a2824]/80">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Edge-to-Edge Carousel Viewport Container */}
      <div
        className={`relative ${
          fullBleed
            ? "w-screen relative left-1/2 -translate-x-1/2 max-w-[100vw]"
            : "w-full max-w-7xl mx-auto px-4"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseUpOrLeave();
        }}
      >
        {/* Subtle Edge Vignette Overlays for smooth entry/exit */}
        {showEdgeFades && (
          <>
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#f6efe5] via-[#f6efe5]/60 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#f6efe5] via-[#f6efe5]/60 to-transparent z-10" />
          </>
        )}

        {/* Scrollable & Draggable Image Track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          className={`flex items-center ${gapClasses[gap] || gapClasses.md} overflow-x-auto ${
            cardStyle === "flush" ? "py-0" : "py-4"
          } ${gap === "none" ? "px-0" : "px-6 sm:px-12"} scrollbar-none cursor-grab active:cursor-grabbing`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {repeatedImages.map((img, idx) => {
            const rotClass = getCardRotationClass(idx, img.rotation);

            return (
              <div
                key={`${img.url}-${idx}`}
                className={`shrink-0 transition-all duration-300 ease-out ${
                  cardStyle === "flush"
                    ? "hover:brightness-105 hover:z-10"
                    : "hover:scale-[1.03] hover:z-20"
                } ${rotClass}`}
              >
                {/* Seamless Flush Style (Edge-to-edge, no padding, sharp corners) */}
                {cardStyle === "flush" && (
                  <div
                    className={`relative overflow-hidden ${heightClasses[cardHeight]} ${aspectRatioClasses[aspectRatio]}`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt || img.caption || `Carousel photo ${idx + 1}`}
                      onLoad={handleImageLoad}
                      draggable={false}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      loading="lazy"
                    />
                    {(img.caption || img.subcaption) && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-2.5 pt-6 text-white text-left pointer-events-none">
                        {img.caption && (
                          <div className="font-sans font-medium text-xs sm:text-sm text-white truncate">
                            {img.caption}
                          </div>
                        )}
                        {img.subcaption && (
                          <div className="text-2xs text-white/80 font-sans truncate">
                            {img.subcaption}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {/* Polaroid Frame */}
                {cardStyle === "polaroid" && (
                  <div className="bg-white p-3 pb-4 rounded-xs shadow-[0_4px_16px_rgba(74,40,36,0.12)] border border-[#b3392d]/10 flex flex-col items-center max-w-[280px] sm:max-w-[320px]">
                    <div
                      className={`relative overflow-hidden rounded-xs bg-[#f6efe5] ${heightClasses[cardHeight]} ${aspectRatioClasses[aspectRatio]}`}
                    >
                      <img
                        src={img.url}
                        alt={img.alt || img.caption || `Carousel photo ${idx + 1}`}
                        onLoad={handleImageLoad}
                        draggable={false}
                        className="w-full h-full object-cover select-none pointer-events-none"
                        loading="lazy"
                      />
                    </div>
                    {(img.caption || img.subcaption) && (
                      <div className="pt-3 text-center w-full px-1">
                        {img.caption && (
                          <div className="font-script text-xl sm:text-2xl text-[#b3392d] leading-none mb-0.5">
                            {img.caption}
                          </div>
                        )}
                        {img.subcaption && (
                          <div className="font-serif italic text-2xs sm:text-xs text-[#4a2824]/70">
                            {img.subcaption}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Vintage Card Style */}
                {cardStyle === "vintage-card" && (
                  <div className="bg-[#fcfaf7] border border-[#b3392d]/25 p-2 sm:p-2.5 rounded-lg shadow-[0_3px_12px_rgba(179,57,45,0.08)] flex flex-col max-w-[280px] sm:max-w-[320px]">
                    <div
                      className={`relative overflow-hidden rounded-md border border-[#b3392d]/15 bg-white ${heightClasses[cardHeight]} ${aspectRatioClasses[aspectRatio]}`}
                    >
                      <img
                        src={img.url}
                        alt={img.alt || img.caption || `Carousel photo ${idx + 1}`}
                        onLoad={handleImageLoad}
                        draggable={false}
                        className="w-full h-full object-cover select-none pointer-events-none"
                        loading="lazy"
                      />
                    </div>
                    {img.caption && (
                      <div className="pt-2 px-1 text-center">
                        <span className="font-serif font-medium text-xs sm:text-sm text-[#b3392d]">
                          {img.caption}
                        </span>
                        {img.subcaption && (
                          <p className="text-2xs text-[#4a2824]/60 font-sans">
                            {img.subcaption}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Modern Style with Floating Gradient */}
                {cardStyle === "modern" && (
                  <div
                    className={`relative overflow-hidden rounded-2xl shadow-md border border-white/40 group ${heightClasses[cardHeight]} ${aspectRatioClasses[aspectRatio]} min-w-[120px] sm:min-w-[140px]`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt || img.caption || `Carousel photo ${idx + 1}`}
                      onLoad={handleImageLoad}
                      draggable={false}
                      className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {(img.caption || img.subcaption) && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-3 pt-6 text-white text-left">
                        {img.caption && (
                          <div className="font-sans font-semibold text-xs sm:text-sm text-white">
                            {img.caption}
                          </div>
                        )}
                        {img.subcaption && (
                          <div className="text-2xs text-white/80 font-sans">
                            {img.subcaption}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Minimal Style */}
                {cardStyle === "minimal" && (
                  <div
                    className={`relative overflow-hidden rounded-xl shadow-xs border border-[#b3392d]/10 ${heightClasses[cardHeight]} ${aspectRatioClasses[aspectRatio]} min-w-[100px] sm:min-w-[120px]`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt || img.caption || `Carousel photo ${idx + 1}`}
                      onLoad={handleImageLoad}
                      draggable={false}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Floating Manual Navigation Chevrons */}
        {showControls && (
          <>
            <button
              type="button"
              onClick={() => handleScrollStep("prev")}
              aria-label="Scroll left"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-[#b3392d] border border-[#b3392d]/25 shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#b3392d]/40 backdrop-blur-xs cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleScrollStep("next")}
              aria-label="Scroll right"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-[#b3392d] border border-[#b3392d]/25 shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#b3392d]/40 backdrop-blur-xs cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Carousel Footer / Interaction Status Bar */}
      {(showScrollHint || showPauseButton) && (
        <div className="flex items-center justify-center gap-4 mt-3 sm:mt-4 text-2xs text-[#4a2824]/60 font-sans">
          {showScrollHint && (
            <span className="inline-flex items-center gap-1.5 bg-white/50 px-2.5 py-1 rounded-full border border-[#b3392d]/15">
              <svg
                className="w-3 h-3 text-[#b3392d]/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
              Scroll or drag horizontally
            </span>
          )}

          {/* Pause / Play Toggle for Accessibility */}
          {showPauseButton && (
            <button
              type="button"
              onClick={() => setIsPausedByUser(!isPausedByUser)}
              aria-label={isPausedByUser ? "Resume carousel" : "Pause carousel"}
              className="inline-flex items-center gap-1 bg-white/50 hover:bg-white/80 px-2.5 py-1 rounded-full border border-[#b3392d]/15 text-[#b3392d] transition-colors cursor-pointer"
            >
              {isPausedByUser ? (
                <>
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>Play</span>
                </>
              ) : (
                <>
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                  <span>Pause</span>
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* Decorative Ribbon Divider */}
      {showDivider && (
        <div className="mt-4 sm:mt-6">
          <RibbonDivider />
        </div>
      )}
    </section>
  );
};
