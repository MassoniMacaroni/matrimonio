import React from "react";

const STROKE_COLOR = "#b3392d";

// Hand-drawn wavy loop divider
export const RibbonDivider: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`w-full flex items-center justify-center my-6 select-none ${className}`}>
    <svg
      viewBox="0 0 600 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg h-auto overflow-visible"
    >
      <path
        d="M20 18 Q 80 8, 140 18 T 260 18 C 280 18, 290 8, 300 8 C 310 8, 320 28, 300 28 C 285 28, 295 18, 320 18 T 460 18 Q 520 28, 580 18"
        stroke={STROKE_COLOR}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Little loop curls at ends */}
      <path
        d="M22 18 C 10 18, 8 10, 16 8 C 24 6, 26 16, 18 20"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M578 18 C 590 18, 592 10, 584 8 C 576 6, 574 16, 582 20"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Cute little center heart or dot */}
      <circle cx="300" cy="18" r="2.5" fill={STROKE_COLOR} />
    </svg>
  </div>
);

// Botanical olive leaf flourish (for countdown & save the date)
export const LeafFlourish: React.FC<{ flip?: boolean; className?: string }> = ({
  flip = false,
  className = "",
}) => (
  <svg
    viewBox="0 0 48 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-7 h-8 sm:w-8 sm:h-9 ${flip ? "-scale-x-100" : ""} ${className}`}
  >
    <path
      d="M12 48 C 18 36, 24 22, 38 8"
      stroke={STROKE_COLOR}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Leaves */}
    <path
      d="M22 34 C 20 26, 12 28, 14 36 C 16 40, 22 38, 22 34 Z"
      stroke={STROKE_COLOR}
      strokeWidth="1.3"
      fill={STROKE_COLOR}
      fillOpacity="0.12"
    />
    <path
      d="M28 24 C 34 18, 42 22, 38 28 C 34 32, 28 28, 28 24 Z"
      stroke={STROKE_COLOR}
      strokeWidth="1.3"
      fill={STROKE_COLOR}
      fillOpacity="0.12"
    />
    <path
      d="M36 10 C 44 4, 46 12, 40 16 C 36 18, 34 14, 36 10 Z"
      stroke={STROKE_COLOR}
      strokeWidth="1.3"
      fill={STROKE_COLOR}
      fillOpacity="0.12"
    />
  </svg>
);

// Reaching Hands illustration
export const ReachingHandsIllustration: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div className={`flex justify-center items-center ${className}`}>
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-48 sm:w-56 h-auto"
    >
      {/* Left hand / sleeve */}
      <path
        d="M20 140 L 70 95 L 95 105 L 50 165 Z"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M70 95 C 85 82, 105 85, 125 100 L 148 112"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Left fingers */}
      <path
        d="M125 100 C 135 90, 150 92, 160 102 C 162 104, 158 108, 148 112"
        stroke={STROKE_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M120 105 C 130 98, 142 100, 152 108"
        stroke={STROKE_COLOR}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M115 110 C 122 105, 134 107, 142 114"
        stroke={STROKE_COLOR}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Right hand / sleeve */}
      <path
        d="M260 115 L 210 80 L 190 98 L 235 145 Z"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M210 80 C 190 75, 175 88, 162 102"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Right fingers reaching down to touch */}
      <path
        d="M175 88 C 168 95, 162 105, 155 114"
        stroke={STROKE_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M182 92 C 176 100, 170 108, 160 118"
        stroke={STROKE_COLOR}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M188 98 C 182 106, 176 112, 168 120"
        stroke={STROKE_COLOR}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Cuff line details */}
      <path
        d="M60 105 L 85 115"
        stroke={STROKE_COLOR}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M215 88 L 198 104"
        stroke={STROKE_COLOR}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Sparkle between hands */}
      <path
        d="M156 86 L 158 92 L 164 94 L 158 96 L 156 102 L 154 96 L 148 94 L 154 92 Z"
        fill={STROKE_COLOR}
        opacity="0.8"
      />
    </svg>
  </div>
);

// Cute cartoon Bride & Groom doodle
export const CoupleDoodleIllustration: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div className={`flex justify-center items-center ${className}`}>
    <svg
      viewBox="0 0 160 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-28 sm:w-32 h-auto"
    >
      {/* Groom (left) */}
      {/* Head */}
      <circle cx="60" cy="42" r="14" stroke={STROKE_COLOR} strokeWidth="1.6" fill="#f6efe5" />
      {/* Hair */}
      <path
        d="M48 40 C 48 30, 72 30, 72 40"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
        fill={STROKE_COLOR}
      />
      {/* Eyes & smile */}
      <circle cx="56" cy="42" r="1.2" fill={STROKE_COLOR} />
      <circle cx="64" cy="42" r="1.2" fill={STROKE_COLOR} />
      <path d="M57 47 Q 60 49, 63 47" stroke={STROKE_COLOR} strokeWidth="1.2" strokeLinecap="round" />
      {/* Bow tie */}
      <polygon points="56,58 64,58 60,61" stroke={STROKE_COLOR} strokeWidth="1.2" fill={STROKE_COLOR} />
      <polygon points="56,64 64,64 60,61" stroke={STROKE_COLOR} strokeWidth="1.2" fill={STROKE_COLOR} />
      {/* Suit jacket */}
      <path
        d="M48 64 L 46 112 L 74 112 L 72 64 Z"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Lapels */}
      <path d="M52 64 L 60 76 L 68 64" stroke={STROKE_COLOR} strokeWidth="1.4" />
      {/* Groom Legs */}
      <path d="M52 112 L 52 136" stroke={STROKE_COLOR} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M68 112 L 68 136" stroke={STROKE_COLOR} strokeWidth="1.6" strokeLinecap="round" />
      {/* Shoes */}
      <path d="M48 136 Q 54 136, 56 136" stroke={STROKE_COLOR} strokeWidth="2" strokeLinecap="round" />
      <path d="M66 136 Q 72 136, 74 136" stroke={STROKE_COLOR} strokeWidth="2" strokeLinecap="round" />

      {/* Bride (right) */}
      {/* Veil back */}
      <path
        d="M92 40 C 80 20, 126 20, 114 40 C 122 60, 126 95, 118 120"
        stroke={STROKE_COLOR}
        strokeWidth="1.3"
        strokeDasharray="2 3"
      />
      {/* Head */}
      <circle cx="102" cy="45" r="13" stroke={STROKE_COLOR} strokeWidth="1.6" fill="#f6efe5" />
      {/* Hair bun & flower */}
      <circle cx="102" cy="31" r="5" stroke={STROKE_COLOR} strokeWidth="1.4" fill={STROKE_COLOR} />
      <circle cx="95" cy="34" r="2" fill={STROKE_COLOR} />
      {/* Eyes & blush & smile */}
      <circle cx="98" cy="45" r="1.2" fill={STROKE_COLOR} />
      <circle cx="106" cy="45" r="1.2" fill={STROKE_COLOR} />
      <path d="M99 50 Q 102 52, 105 50" stroke={STROKE_COLOR} strokeWidth="1.2" strokeLinecap="round" />
      {/* Wedding Dress */}
      <path
        d="M94 62 Q 102 65, 110 62 L 126 125 C 114 128, 90 128, 78 125 Z"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="#ffffff"
        fillOpacity="0.4"
      />
      {/* Dress lace scalloping */}
      <path
        d="M78 125 Q 86 128, 94 125 Q 102 128, 110 125 Q 118 128, 126 125"
        stroke={STROKE_COLOR}
        strokeWidth="1.4"
      />
      {/* Flower bouquet */}
      <ellipse cx="86" cy="78" rx="7" ry="5" stroke={STROKE_COLOR} strokeWidth="1.4" fill="#f6efe5" />
      <circle cx="84" cy="77" r="2" fill={STROKE_COLOR} />
      <circle cx="88" cy="78" r="1.8" fill={STROKE_COLOR} />
      <circle cx="86" cy="80" r="1.5" fill={STROKE_COLOR} />
    </svg>
  </div>
);

// Location banquet table doodle
export const BanquetTableIllustration: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div className={`flex justify-center items-center ${className}`}>
    <svg
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 sm:w-36 h-auto"
    >
      {/* Wine glasses / Champagne flutes */}
      <path d="M42 34 L 46 44 L 44 54 M40 54 L 48 54 M44 44 L 44 54" stroke={STROKE_COLOR} strokeWidth="1.3" />
      <path d="M52 32 L 56 42 L 54 52 M50 52 L 58 52 M54 42 L 54 52" stroke={STROKE_COLOR} strokeWidth="1.3" />

      {/* Flower vase / centerpiece */}
      <path d="M74 54 L 76 42 Q 80 40, 84 42 L 86 54 Z" stroke={STROKE_COLOR} strokeWidth="1.4" />
      {/* Flowers */}
      <circle cx="80" cy="30" r="4" stroke={STROKE_COLOR} strokeWidth="1.3" />
      <circle cx="73" cy="34" r="3.5" stroke={STROKE_COLOR} strokeWidth="1.3" />
      <circle cx="87" cy="34" r="3.5" stroke={STROKE_COLOR} strokeWidth="1.3" />
      <path d="M80 34 L 80 42" stroke={STROKE_COLOR} strokeWidth="1.3" />

      {/* Candlestick / Cake */}
      <rect x="104" y="44" width="16" height="10" rx="2" stroke={STROKE_COLOR} strokeWidth="1.3" />
      <rect x="107" y="37" width="10" height="7" rx="1.5" stroke={STROKE_COLOR} strokeWidth="1.3" />
      <path d="M112 37 L 112 33" stroke={STROKE_COLOR} strokeWidth="1.3" />

      {/* Tabletop */}
      <ellipse cx="80" cy="56" rx="60" ry="12" stroke={STROKE_COLOR} strokeWidth="1.6" fill="#f6efe5" />

      {/* Tablecloth flowing down */}
      <path
        d="M20 56 C 22 75, 26 95, 30 102 C 50 105, 110 105, 130 102 C 134 95, 138 75, 140 56"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
      />
      {/* Tablecloth folds */}
      <path d="M46 64 C 48 80, 50 94, 52 102" stroke={STROKE_COLOR} strokeWidth="1.3" strokeDasharray="3 3" />
      <path d="M80 68 C 80 84, 80 96, 80 103" stroke={STROKE_COLOR} strokeWidth="1.3" strokeDasharray="3 3" />
      <path d="M114 64 C 112 80, 110 94, 108 102" stroke={STROKE_COLOR} strokeWidth="1.3" strokeDasharray="3 3" />
    </svg>
  </div>
);

// Attire Guide illustration (Tuxedo & Gown)
export const AttireIllustration: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div className={`flex justify-center items-center ${className}`}>
    <svg
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 sm:w-36 h-auto"
    >
      {/* Floating hearts */}
      <path
        d="M78 18 C 76 14, 72 15, 72 18 C 72 22, 78 25, 78 25 C 78 25, 84 22, 84 18 C 84 15, 80 14, 78 18 Z"
        stroke={STROKE_COLOR}
        strokeWidth="1.3"
        fill={STROKE_COLOR}
      />
      <path
        d="M86 28 C 84 25, 81 26, 81 28 C 81 31, 86 33, 86 33 C 86 33, 91 31, 91 28 C 91 26, 88 25, 86 28 Z"
        stroke={STROKE_COLOR}
        strokeWidth="1.1"
        fill={STROKE_COLOR}
      />

      {/* Tuxedo jacket on hanger (left) */}
      {/* Hanger */}
      <path d="M50 32 L 35 42 L 65 42 Z" stroke={STROKE_COLOR} strokeWidth="1.3" />
      <path d="M50 28 C 50 24, 46 24, 46 27 C 46 30, 50 32, 50 32" stroke={STROKE_COLOR} strokeWidth="1.3" />
      {/* Bow tie */}
      <polygon points="46,44 54,44 50,47" stroke={STROKE_COLOR} strokeWidth="1.2" fill={STROKE_COLOR} />
      <polygon points="46,50 54,50 50,47" stroke={STROKE_COLOR} strokeWidth="1.2" fill={STROKE_COLOR} />
      {/* Jacket */}
      <path
        d="M35 42 L 30 84 L 70 84 L 65 42 Z"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M40 42 L 48 58 L 50 84" stroke={STROKE_COLOR} strokeWidth="1.3" />
      <path d="M60 42 L 52 58 L 50 84" stroke={STROKE_COLOR} strokeWidth="1.3" />
      {/* Men's dress shoes */}
      <ellipse cx="42" cy="98" rx="8" ry="4" stroke={STROKE_COLOR} strokeWidth="1.4" />
      <ellipse cx="58" cy="98" rx="8" ry="4" stroke={STROKE_COLOR} strokeWidth="1.4" />

      {/* Evening Gown on hanger (right) */}
      <path d="M110 32 L 98 42 L 122 42 Z" stroke={STROKE_COLOR} strokeWidth="1.3" />
      <path d="M110 28 C 110 24, 106 24, 106 27 C 106 30, 110 32, 110 32" stroke={STROKE_COLOR} strokeWidth="1.3" />
      {/* Dress bodice */}
      <path
        d="M102 42 Q 110 46, 118 42 L 122 62 Q 110 65, 98 62 Z"
        stroke={STROKE_COLOR}
        strokeWidth="1.5"
      />
      {/* Flowing skirt */}
      <path
        d="M98 62 L 86 102 C 102 106, 120 106, 134 102 L 122 62"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
      />
      {/* Women's high heels */}
      <path d="M102 108 L 106 114 L 110 114 M103 114 L 103 111" stroke={STROKE_COLOR} strokeWidth="1.3" />
      <path d="M118 108 L 122 114 L 126 114 M119 114 L 119 111" stroke={STROKE_COLOR} strokeWidth="1.3" />
    </svg>
  </div>
);

// Wedding Gift ornate frame & ribbon bow
export const GiftBowFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div className={`relative px-6 py-8 sm:px-10 sm:py-10 ${className}`}>
    {/* Ornate border with SVG */}
    <div className="absolute inset-0 pointer-events-none">
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Curled frame path */}
        <path
          d="M 40 30 Q 200 15, 360 30 C 385 45, 385 100, 375 150 C 385 200, 385 255, 360 270 Q 200 285, 40 270 C 15 255, 15 200, 25 150 C 15 100, 15 45, 40 30 Z"
          stroke={STROKE_COLOR}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Corner loops */}
        <path d="M 40 30 C 30 20, 25 35, 38 42" stroke={STROKE_COLOR} strokeWidth="1.4" />
        <path d="M 360 30 C 370 20, 375 35, 362 42" stroke={STROKE_COLOR} strokeWidth="1.4" />
        <path d="M 40 270 C 30 280, 25 265, 38 258" stroke={STROKE_COLOR} strokeWidth="1.4" />
        <path d="M 360 270 C 370 280, 375 265, 362 258" stroke={STROKE_COLOR} strokeWidth="1.4" />
      </svg>
    </div>

    {/* Ribbon bow at top */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
      <svg
        viewBox="0 0 60 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-8"
      >
        {/* Left loop */}
        <path
          d="M30 18 C 22 8, 8 10, 12 20 C 15 26, 26 22, 30 18 Z"
          stroke={STROKE_COLOR}
          strokeWidth="1.5"
          fill="#f6efe5"
        />
        {/* Right loop */}
        <path
          d="M30 18 C 38 8, 52 10, 48 20 C 45 26, 34 22, 30 18 Z"
          stroke={STROKE_COLOR}
          strokeWidth="1.5"
          fill="#f6efe5"
        />
        {/* Center knot */}
        <circle cx="30" cy="18" r="3.5" stroke={STROKE_COLOR} strokeWidth="1.5" fill={STROKE_COLOR} />
        {/* Tails */}
        <path d="M28 21 Q 22 28, 16 34" stroke={STROKE_COLOR} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M32 21 Q 38 28, 44 34" stroke={STROKE_COLOR} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>

    {children}
  </div>
);

// RSVP side doodles: Wedding cake, Bouquet, and Heels
export const RsvpDoodles: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center justify-between w-full max-w-sm mx-auto px-4 ${className}`}>
    {/* Wedding Cake Doodle (Left) */}
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 h-14"
    >
      {/* Tier 1 */}
      <rect x="12" y="42" width="40" height="14" rx="2" stroke={STROKE_COLOR} strokeWidth="1.4" />
      <path d="M12 47 Q 22 50, 32 47 Q 42 50, 52 47" stroke={STROKE_COLOR} strokeWidth="1.1" />
      {/* Tier 2 */}
      <rect x="18" y="28" width="28" height="14" rx="2" stroke={STROKE_COLOR} strokeWidth="1.4" />
      <path d="M18 33 Q 25 36, 32 33 Q 39 36, 46 33" stroke={STROKE_COLOR} strokeWidth="1.1" />
      {/* Tier 3 */}
      <rect x="24" y="16" width="16" height="12" rx="2" stroke={STROKE_COLOR} strokeWidth="1.4" />
      {/* Cake topper hearts */}
      <path
        d="M32 8 C 30 6, 27 7, 28 10 C 29 12, 32 14, 32 14 C 32 14, 35 12, 36 10 C 37 7, 34 6, 32 8 Z"
        stroke={STROKE_COLOR}
        strokeWidth="1.2"
        fill={STROKE_COLOR}
      />
    </svg>

    {/* Bouquet Doodle (Right) */}
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 h-14"
    >
      {/* Stems & Ribbon */}
      <path d="M30 42 L 26 56" stroke={STROKE_COLOR} strokeWidth="1.4" />
      <path d="M34 42 L 38 56" stroke={STROKE_COLOR} strokeWidth="1.4" />
      <path d="M32 42 L 32 58" stroke={STROKE_COLOR} strokeWidth="1.4" />
      {/* Bow */}
      <circle cx="32" cy="42" r="2.5" fill={STROKE_COLOR} />
      <path d="M28 42 C 24 38, 22 46, 32 42" stroke={STROKE_COLOR} strokeWidth="1.2" />
      <path d="M36 42 C 40 38, 42 46, 32 42" stroke={STROKE_COLOR} strokeWidth="1.2" />
      {/* Floral cluster */}
      <circle cx="26" cy="28" r="6" stroke={STROKE_COLOR} strokeWidth="1.3" />
      <circle cx="38" cy="28" r="6" stroke={STROKE_COLOR} strokeWidth="1.3" />
      <circle cx="32" cy="20" r="6" stroke={STROKE_COLOR} strokeWidth="1.3" />
      <circle cx="32" cy="30" r="5" stroke={STROKE_COLOR} strokeWidth="1.3" />
      {/* Flower centers */}
      <circle cx="26" cy="28" r="1.5" fill={STROKE_COLOR} />
      <circle cx="38" cy="28" r="1.5" fill={STROKE_COLOR} />
      <circle cx="32" cy="20" r="1.5" fill={STROKE_COLOR} />
    </svg>
  </div>
);

// Washi Tape banner overlay
export const WashiTape: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`h-6 w-24 bg-[#ebd9c1]/90 shadow-xs border-y border-[#d8be9c]/40 rotate-[-2deg] select-none pointer-events-none ${className}`}
    style={{
      clipPath: "polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)",
      backgroundImage:
        "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(180, 150, 110, 0.08) 5px, rgba(180, 150, 110, 0.08) 10px)",
    }}
  />
);

// Hand holding wine / champagne bottle pouring stream (inspired directly by reference image)
export const WineBottlePourIllustration: React.FC<{
  className?: string;
  variant?: "bottle-only" | "with-short-stream" | "hand-only";
}> = ({ className = "", variant = "with-short-stream" }) => (
  <div className={`flex justify-center items-center select-none ${className}`}>
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-56 sm:w-64 h-auto overflow-visible"
    >
      {/* Hand arm sleeve coming from top right */}
      <path
        d="M310 10 L 260 25 L 250 48 L 305 38 Z"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Wrist / hand holding the bottle */}
      <path
        d="M260 25 C 245 28, 235 34, 225 45"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Fingers wrapped over the bottle */}
      <path
        d="M225 45 C 220 40, 212 42, 210 50 C 208 58, 218 64, 226 62"
        stroke={STROKE_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M232 48 C 228 42, 220 44, 218 52 C 216 60, 224 65, 232 63"
        stroke={STROKE_COLOR}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M240 50 C 236 44, 228 46, 226 54 C 224 62, 232 67, 240 65"
        stroke={STROKE_COLOR}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Thumb wrapped around bottom */}
      <path
        d="M245 32 C 240 38, 235 44, 235 48"
        stroke={STROKE_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Wine / Champagne Bottle tilted diagonally (neck pointing down-left) */}
      {/* Bottle base / punt */}
      <path
        d="M272 50 C 285 55, 282 75, 268 80"
        stroke={STROKE_COLOR}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Bottle body */}
      <path
        d="M268 80 L 195 56"
        stroke={STROKE_COLOR}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M272 50 L 205 28"
        stroke={STROKE_COLOR}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Bottle shoulder tapering to neck */}
      <path
        d="M195 56 C 180 50, 172 44, 155 38"
        stroke={STROKE_COLOR}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M205 28 C 190 26, 178 30, 160 34"
        stroke={STROKE_COLOR}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Bottle neck */}
      <path
        d="M155 38 L 132 32"
        stroke={STROKE_COLOR}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M160 34 L 135 28"
        stroke={STROKE_COLOR}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Bottle lip / mouth opening */}
      <ellipse
        cx="133"
        cy="30"
        rx="3"
        ry="6"
        transform="rotate(-20 133 30)"
        stroke={STROKE_COLOR}
        strokeWidth="1.8"
        fill="#f6efe5"
      />
      {/* Bottle label */}
      <path
        d="M215 36 L 250 48 L 246 64 L 210 52 Z"
        stroke={STROKE_COLOR}
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />
      <path
        d="M228 46 Q 235 48, 238 52"
        stroke={STROKE_COLOR}
        strokeWidth="1"
      />

      {/* Wine stream pouring from bottle opening */}
      {variant !== "bottle-only" && (
        <>
          {/* Main smooth stream */}
          <path
            d="M130 31 C 110 38, 90 60, 95 85 C 100 115, 140 135, 150 160 C 160 185, 145 205, 140 220"
            stroke={STROKE_COLOR}
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Parallel wavy stream highlight */}
          <path
            d="M132 34 C 114 42, 98 62, 102 85 C 107 112, 144 133, 154 158 C 164 182, 150 205, 145 220"
            stroke={STROKE_COLOR}
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />
          {/* Splash droplets */}
          <circle cx="118" cy="48" r="2" fill={STROKE_COLOR} />
          <circle cx="106" cy="68" r="1.5" fill={STROKE_COLOR} />
          <circle cx="125" cy="80" r="1.8" fill={STROKE_COLOR} />
          <circle cx="152" cy="115" r="2" fill={STROKE_COLOR} />
          {/* Cute sparkle stars near the pour */}
          <path
            d="M148 60 L 150 65 L 155 67 L 150 69 L 148 74 L 146 69 L 141 67 L 146 65 Z"
            fill={STROKE_COLOR}
            opacity="0.8"
          />
          <path
            d="M80 95 L 81 99 L 85 100 L 81 101 L 80 105 L 79 101 L 75 100 L 79 99 Z"
            fill={STROKE_COLOR}
            opacity="0.7"
          />
        </>
      )}
    </svg>
  </div>
);

// Party poppers / celebration crackers bursting with stars & ribbons
export const PartyPoppersIllustration: React.FC<{
  className?: string;
  count?: "single" | "pair";
}> = ({ className = "", count = "pair" }) => (
  <div className={`flex justify-center items-center select-none ${className}`}>
    <svg
      viewBox="0 0 240 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-44 sm:w-52 h-auto overflow-visible"
    >
      {/* Left Popper Cone */}
      <g transform="translate(10, 20)">
        {/* Cone body */}
        <polygon
          points="40,85 75,55 85,68"
          stroke={STROKE_COLOR}
          strokeWidth="1.6"
          fill="#f6efe5"
          strokeLinejoin="round"
        />
        {/* Striped pattern on cone */}
        <path d="M52 75 L 80 62" stroke={STROKE_COLOR} strokeWidth="1.2" />
        <path d="M62 67 L 82 58" stroke={STROKE_COLOR} strokeWidth="1.2" />
        {/* Popper rim oval */}
        <ellipse
          cx="80"
          cy="61.5"
          rx="5"
          ry="9"
          transform="rotate(30 80 61.5)"
          stroke={STROKE_COLOR}
          strokeWidth="1.6"
          fill={STROKE_COLOR}
          fillOpacity="0.15"
        />
        {/* Little pull string with loop */}
        <path
          d="M40 85 Q 32 92, 34 98 Q 36 102, 32 104"
          stroke={STROKE_COLOR}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="31" cy="104" r="1.8" fill={STROKE_COLOR} />
      </g>

      {/* Right Popper Cone (if pair) */}
      {count === "pair" && (
        <g transform="translate(90, 20)">
          {/* Cone body */}
          <polygon
            points="100,85 65,55 55,68"
            stroke={STROKE_COLOR}
            strokeWidth="1.6"
            fill="#f6efe5"
            strokeLinejoin="round"
          />
          {/* Striped pattern */}
          <path d="M88 75 L 60 62" stroke={STROKE_COLOR} strokeWidth="1.2" />
          <path d="M78 67 L 58 58" stroke={STROKE_COLOR} strokeWidth="1.2" />
          {/* Rim */}
          <ellipse
            cx="60"
            cy="61.5"
            rx="5"
            ry="9"
            transform="rotate(-30 60 61.5)"
            stroke={STROKE_COLOR}
            strokeWidth="1.6"
            fill={STROKE_COLOR}
            fillOpacity="0.15"
          />
          {/* String */}
          <path
            d="M100 85 Q 108 92, 106 98 Q 104 102, 108 104"
            stroke={STROKE_COLOR}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <circle cx="109" cy="104" r="1.8" fill={STROKE_COLOR} />
        </g>
      )}

      {/* Exploding celebration confetti & serpentine ribbons in the center */}
      {/* Streamers */}
      <path
        d="M100 50 Q 110 30, 120 40 T 130 18"
        stroke={STROKE_COLOR}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M85 45 Q 92 25, 105 28 T 112 10"
        stroke={STROKE_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M140 45 Q 132 25, 125 28 T 120 8"
        stroke={STROKE_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M115 55 Q 128 45, 138 52 T 150 40"
        stroke={STROKE_COLOR}
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Sparkles / Twinkle Stars */}
      {/* Center big star */}
      <path
        d="M120 22 L 122 28 L 128 30 L 122 32 L 120 38 L 118 32 L 112 30 L 118 28 Z"
        fill={STROKE_COLOR}
      />
      {/* Left medium star */}
      <path
        d="M95 18 L 96 22 L 100 23 L 96 24 L 95 28 L 94 24 L 90 23 L 94 22 Z"
        fill={STROKE_COLOR}
      />
      {/* Right medium star */}
      <path
        d="M145 22 L 146 26 L 150 27 L 146 28 L 145 32 L 144 28 L 140 27 L 144 26 Z"
        fill={STROKE_COLOR}
      />

      {/* Confetti Dots & Hearts */}
      <circle cx="106" cy="40" r="2.5" fill={STROKE_COLOR} />
      <circle cx="132" cy="38" r="2" fill={STROKE_COLOR} />
      <circle cx="82" cy="32" r="1.8" fill={STROKE_COLOR} />
      <circle cx="155" cy="32" r="2" fill={STROKE_COLOR} />
      <circle cx="118" cy="48" r="1.8" fill={STROKE_COLOR} />
      <circle cx="128" cy="14" r="2.2" fill={STROKE_COLOR} />
      {/* Mini heart popping out */}
      <path
        d="M120 10 C 118 7, 115 8, 115 10 C 115 13, 120 15, 120 15 C 120 15, 125 13, 125 10 C 125 8, 122 7, 120 10 Z"
        fill={STROKE_COLOR}
      />
    </svg>
  </div>
);

// Toasting Champagne Coupe glasses ("Clink!")
export const ToastingGlassesIllustration: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div className={`flex justify-center items-center select-none ${className}`}>
    <svg
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 sm:w-36 h-auto overflow-visible"
    >
      {/* Left Coupe Glass (tilted right) */}
      <g transform="translate(48, 55) rotate(14)">
        {/* Bowl */}
        <path
          d="M-22 -22 C -22 0, 22 0, 22 -22 Z"
          stroke={STROKE_COLOR}
          strokeWidth="1.6"
          fill="#f6efe5"
        />
        {/* Liquid line */}
        <path d="M-19 -16 Q 0 -13, 19 -16" stroke={STROKE_COLOR} strokeWidth="1.2" />
        {/* Stem */}
        <line x1="0" y1="0" x2="0" y2="28" stroke={STROKE_COLOR} strokeWidth="1.6" />
        {/* Base */}
        <ellipse cx="0" cy="28" rx="14" ry="3" stroke={STROKE_COLOR} strokeWidth="1.5" />
      </g>

      {/* Right Coupe Glass (tilted left) */}
      <g transform="translate(112, 55) rotate(-14)">
        {/* Bowl */}
        <path
          d="M-22 -22 C -22 0, 22 0, 22 -22 Z"
          stroke={STROKE_COLOR}
          strokeWidth="1.6"
          fill="#f6efe5"
        />
        {/* Liquid line */}
        <path d="M-19 -16 Q 0 -13, 19 -16" stroke={STROKE_COLOR} strokeWidth="1.2" />
        {/* Stem */}
        <line x1="0" y1="0" x2="0" y2="28" stroke={STROKE_COLOR} strokeWidth="1.6" />
        {/* Base */}
        <ellipse cx="0" cy="28" rx="14" ry="3" stroke={STROKE_COLOR} strokeWidth="1.5" />
      </g>

      {/* Clinking Sparkles in center */}
      <path
        d="M80 18 L 81.5 24 L 88 26 L 81.5 28 L 80 34 L 78.5 28 L 72 26 L 78.5 24 Z"
        fill={STROKE_COLOR}
      />
      {/* Clink sound lines */}
      <path d="M72 16 Q 66 12, 60 14" stroke={STROKE_COLOR} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M88 16 Q 94 12, 100 14" stroke={STROKE_COLOR} strokeWidth="1.3" strokeLinecap="round" />
      {/* Tiny bubbles */}
      <circle cx="75" cy="38" r="1.5" fill={STROKE_COLOR} />
      <circle cx="85" cy="40" r="1.5" fill={STROKE_COLOR} />
      <circle cx="80" cy="46" r="1.2" fill={STROKE_COLOR} />
    </svg>
  </div>
);

// Vintage Postage Stamp ("SAVE THE DATE · SEP 18 2027")
export const VintageSaveTheDateStamp: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div className={`flex justify-center items-center select-none ${className}`}>
    <div className="relative p-2">
      {/* Stamp container with scalloped edges */}
      <svg
        viewBox="0 0 160 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 sm:w-36 h-auto drop-shadow-xs rotate-[-3deg]"
      >
        {/* Scalloped outer border */}
        <rect
          x="10"
          y="10"
          width="140"
          height="160"
          rx="4"
          fill="#fbf6ee"
          stroke={STROKE_COLOR}
          strokeWidth="1.5"
        />
        {/* Inner dashed frame */}
        <rect
          x="18"
          y="18"
          width="124"
          height="144"
          stroke={STROKE_COLOR}
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        {/* Stamp text */}
        <text
          x="80"
          y="38"
          textAnchor="middle"
          fill={STROKE_COLOR}
          fontFamily="var(--font-sans)"
          fontSize="9"
          fontWeight="bold"
          letterSpacing="0.25em"
        >
          POSTE D&apos;AMOUR
        </text>
        {/* Center Heart inside circle */}
        <circle cx="80" cy="82" r="30" stroke={STROKE_COLOR} strokeWidth="1.4" fill="none" />
        <path
          d="M80 94 C 70 85, 62 76, 62 68 C 62 62, 67 58, 73 58 C 76.5 58, 79 60, 80 62 C 81 60, 83.5 58, 87 58 C 93 58, 98 62, 98 68 C 98 76, 90 85, 80 94 Z"
          fill={STROKE_COLOR}
        />
        {/* Date on stamp */}
        <text
          x="80"
          y="130"
          textAnchor="middle"
          fill={STROKE_COLOR}
          fontFamily="var(--font-fraunces), serif"
          fontSize="14"
          fontWeight="bold"
        >
          18 · 09 · 27
        </text>
        <text
          x="80"
          y="148"
          textAnchor="middle"
          fill={STROKE_COLOR}
          fontFamily="var(--font-sans)"
          fontSize="8"
          fontWeight="600"
          letterSpacing="0.2em"
        >
          SYDNEY · NSW
        </text>

        {/* Wavy postmark cancellation lines across corner */}
        <path
          d="M2 130 Q 30 125, 60 130 T 120 130"
          stroke={STROKE_COLOR}
          strokeWidth="1.2"
          strokeOpacity="0.7"
        />
        <path
          d="M2 136 Q 30 131, 60 136 T 120 136"
          stroke={STROKE_COLOR}
          strokeWidth="1.2"
          strokeOpacity="0.7"
        />
      </svg>
    </div>
  </div>
);

// Cheeky Sweet Cherries Doodle with Ribbon Bow
export const TwinCherriesIllustration: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div className={`flex justify-center items-center select-none ${className}`}>
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 sm:w-20 h-auto overflow-visible"
    >
      {/* Left Cherry */}
      <circle cx="34" cy="68" r="16" fill={STROKE_COLOR} />
      <ellipse cx="30" cy="64" rx="4" ry="2" fill="#ffffff" fillOpacity="0.4" transform="rotate(-30 30 64)" />
      {/* Right Cherry */}
      <circle cx="68" cy="64" r="16" fill={STROKE_COLOR} />
      <ellipse cx="64" cy="60" rx="4" ry="2" fill="#ffffff" fillOpacity="0.4" transform="rotate(-30 64 60)" />
      {/* Stems meeting at top */}
      <path
        d="M34 54 C 34 32, 45 22, 52 16"
        stroke={STROKE_COLOR}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M68 50 C 66 30, 56 22, 52 16"
        stroke={STROKE_COLOR}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Cute little bow on stem junction */}
      <path
        d="M52 16 C 46 10, 38 12, 42 18 C 45 22, 50 18, 52 16 Z"
        stroke={STROKE_COLOR}
        strokeWidth="1.4"
        fill="#f6efe5"
      />
      <path
        d="M52 16 C 58 10, 66 12, 62 18 C 59 22, 54 18, 52 16 Z"
        stroke={STROKE_COLOR}
        strokeWidth="1.4"
        fill="#f6efe5"
      />
      <circle cx="52" cy="16" r="2.5" fill={STROKE_COLOR} />
      {/* Bow tails */}
      <path d="M50 18 Q 46 24, 42 28" stroke={STROKE_COLOR} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M54 18 Q 58 24, 62 28" stroke={STROKE_COLOR} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  </div>
);

// Sparkle Burst / Twinkle star cluster
export const SparkleCluster: React.FC<{ className?: string }> = ({ className = "" }) => (
  <span className={`inline-flex items-center gap-1 text-[#b3392d] select-none ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 fill-current">
      <path d="M12 2 L 13.5 9 L 20 12 L 13.5 15 L 12 22 L 10.5 15 L 4 12 L 10.5 9 Z" />
    </svg>
    <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5 fill-current opacity-70">
      <path d="M12 2 L 13.5 9 L 20 12 L 13.5 15 L 12 22 L 10.5 15 L 4 12 L 10.5 9 Z" />
    </svg>
  </span>
);

