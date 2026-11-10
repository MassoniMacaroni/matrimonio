import type { Config } from "@puckeditor/core";

// Atomic Building Blocks
import { ContainerBlock, ContainerBlockProps } from "./components/atomic/ContainerBlock";
import { FlexRowBlock, FlexRowBlockProps } from "./components/atomic/FlexRowBlock";
import { BorderFrameBlock, BorderFrameBlockProps } from "./components/atomic/BorderFrameBlock";
import { AnimatedImageBlock, AnimatedImageBlockProps } from "./components/atomic/AnimatedImageBlock";
import { HeadingBlock, HeadingBlockProps } from "./components/atomic/HeadingBlock";
import { TextBlock, TextBlockProps } from "./components/atomic/TextBlock";
import { IllustrationBlock, IllustrationBlockProps } from "./components/atomic/IllustrationBlock";
import { ButtonBlock, ButtonBlockProps } from "./components/atomic/ButtonBlock";
import { DividerBlock, DividerBlockProps } from "./components/atomic/DividerBlock";
import { CalendarHeartBlock, CalendarHeartBlockProps } from "./components/atomic/CalendarHeartBlock";
import { AddToCalendarBlock, AddToCalendarBlockProps } from "./components/atomic/AddToCalendarBlock";
import { CountdownTimerBlock, CountdownTimerBlockProps } from "./components/atomic/CountdownTimerBlock";

// Classic Composite Blocks
import { HeroBlock, HeroBlockProps } from "./components/blocks/HeroBlock";
import { CountdownBlock, CountdownBlockProps } from "./components/blocks/CountdownBlock";
import { SaveTheDateBlock, SaveTheDateBlockProps } from "./components/blocks/SaveTheDateBlock";
import { WineStreamDetailsBlock, WineStreamDetailsBlockProps } from "./components/blocks/WineStreamDetailsBlock";
import { CelebrationPopperBlock, CelebrationPopperBlockProps } from "./components/blocks/CelebrationPopperBlock";
import { CalendarReminderBlock, CalendarReminderBlockProps } from "./components/blocks/CalendarReminderBlock";
import { LocationBlock, LocationBlockProps } from "./components/blocks/LocationBlock";
import { TimelineBlock, TimelineBlockProps } from "./components/blocks/TimelineBlock";
import { DetailsBlock, DetailsBlockProps } from "./components/blocks/DetailsBlock";
import { AttireGuideBlock, AttireGuideBlockProps } from "./components/blocks/AttireGuideBlock";
import { GiftBlock, GiftBlockProps } from "./components/blocks/GiftBlock";
import { StoryCardBlock, StoryCardBlockProps } from "./components/blocks/StoryCardBlock";
import { RsvpBlock, RsvpBlockProps } from "./components/blocks/RsvpBlock";
import { FooterBlock, FooterBlockProps } from "./components/blocks/FooterBlock";
import {
  ImageCarouselBlock,
  ImageCarouselBlockProps,
  defaultCarouselImages,
} from "./components/blocks/ImageCarouselBlock";
import {
  StickerRibbonBlock,
  StickerRibbonBlockProps,
  defaultStickers,
} from "./components/blocks/StickerRibbonBlock";

export type Props = {
  // Atomic Layout & Containers
  ContainerBlock: ContainerBlockProps;
  FlexRowBlock: FlexRowBlockProps;
  BorderFrameBlock: BorderFrameBlockProps;

  // Atomic Media & Animated Elements
  AnimatedImageBlock: AnimatedImageBlockProps;

  // Atomic Typography & Visuals
  HeadingBlock: HeadingBlockProps;
  TextBlock: TextBlockProps;
  IllustrationBlock: IllustrationBlockProps;
  ButtonBlock: ButtonBlockProps;
  DividerBlock: DividerBlockProps;

  // Atomic Widgets
  CalendarHeartBlock: CalendarHeartBlockProps;
  AddToCalendarBlock: AddToCalendarBlockProps;
  CountdownTimerBlock: CountdownTimerBlockProps;

  // Pre-assembled Composite Blocks
  HeroBlock: HeroBlockProps;
  CountdownBlock: CountdownBlockProps;
  SaveTheDateBlock: SaveTheDateBlockProps;
  WineStreamDetailsBlock: WineStreamDetailsBlockProps;
  CelebrationPopperBlock: CelebrationPopperBlockProps;
  CalendarReminderBlock: CalendarReminderBlockProps;
  LocationBlock: LocationBlockProps;
  TimelineBlock: TimelineBlockProps;
  DetailsBlock: DetailsBlockProps;
  AttireGuideBlock: AttireGuideBlockProps;
  GiftBlock: GiftBlockProps;
  StoryCardBlock: StoryCardBlockProps;
  RsvpBlock: RsvpBlockProps;
  FooterBlock: FooterBlockProps;
  ImageCarouselBlock: ImageCarouselBlockProps;
  StickerRibbonBlock: StickerRibbonBlockProps;
};

export const fontStyleOptions = [
  { label: "Retro Chunky Serif (Fraunces)", value: "retro" },
  { label: "Calligraphy Script (Alex Brush)", value: "script" },
  { label: "Classic Serif (Playfair)", value: "serif" },
  { label: "Clean Sans-Serif", value: "sans" },
  { label: "Monospace", value: "mono" },
  { label: "HarmerA", value: "harmera" },
  { label: "Primate Regular", value: "primate" },
  { label: "Pillar Regular", value: "pillar" },
  { label: "Craze", value: "craze" },
  { label: "Chunko Bold", value: "chunko" },
];

export const config: Config<Props> = {
  categories: {
    layout: {
      title: "Atomic Layout & Containers",
      components: ["ContainerBlock", "FlexRowBlock", "BorderFrameBlock"],
    },
    media: {
      title: "Atomic Animated Media & Images",
      components: [
        "AnimatedImageBlock",
        "IllustrationBlock",
        "ImageCarouselBlock",
        "StickerRibbonBlock",
      ],
    },
    typography: {
      title: "Atomic Content & Typography",
      components: [
        "HeadingBlock",
        "TextBlock",
        "ButtonBlock",
        "DividerBlock",
      ],
    },
    widgets: {
      title: "Atomic Wedding Widgets",
      components: [
        "CalendarHeartBlock",
        "AddToCalendarBlock",
        "CountdownTimerBlock",
      ],
    },
    composite: {
      title: "Pre-assembled Templates (Classic)",
      components: [
        "HeroBlock",
        "SaveTheDateBlock",
        "CalendarReminderBlock",
        "CountdownBlock",
        "WineStreamDetailsBlock",
        "CelebrationPopperBlock",
        "FooterBlock",
        "LocationBlock",
        "TimelineBlock",
        "DetailsBlock",
        "AttireGuideBlock",
        "GiftBlock",
        "StoryCardBlock",
        "RsvpBlock",
        "ImageCarouselBlock",
        "StickerRibbonBlock",
      ],
    },
  },
  components: {
    // ----------------------------------------------------
    // ATOMIC LAYOUT & CONTAINERS
    // ----------------------------------------------------
    ContainerBlock: {
      fields: {
        content: { type: "slot" },
        variant: {
          type: "select",
          label: "Card / Background Variant",
          options: [
            { label: "Standard (Transparent)", value: "standard" },
            { label: "White Card with Border", value: "card" },
            { label: "Washi Taped Card", value: "washi-card" },
          ],
        },
        maxWidth: {
          type: "select",
          label: "Max Width",
          options: [
            { label: "Extra Small (xs - 320px)", value: "xs" },
            { label: "Small (sm - 384px)", value: "sm" },
            { label: "Medium (md - 448px)", value: "md" },
            { label: "Large (lg - 512px)", value: "lg" },
            { label: "Extra Large (xl - 576px)", value: "xl" },
            { label: "2XL (672px)", value: "2xl" },
            { label: "3XL (768px)", value: "3xl" },
            { label: "4XL (896px)", value: "4xl" },
            { label: "5XL (1024px)", value: "5xl" },
            { label: "6XL (1152px)", value: "6xl" },
            { label: "Full Width", value: "full" },
          ],
        },
        paddingY: {
          type: "select",
          label: "Vertical Padding",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
            { label: "Extra Large", value: "xl" },
          ],
        },
        align: {
          type: "select",
          label: "Content Alignment",
          options: [
            { label: "Center", value: "center" },
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
        },
        showDivider: {
          type: "radio",
          label: "Bottom Ribbon Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        animate: {
          type: "radio",
          label: "Scroll Entrance Animation",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        content: [],
        variant: "standard",
        maxWidth: "xl",
        paddingY: "md",
        align: "center",
        showDivider: false,
        animate: true,
      },
      render: (props) => <ContainerBlock {...props} />,
    },

    FlexRowBlock: {
      fields: {
        items: { type: "slot" },
        justify: {
          type: "select",
          label: "Justify",
          options: [
            { label: "Center", value: "center" },
            { label: "Space Evenly", value: "evenly" },
            { label: "Space Between", value: "between" },
            { label: "Space Around", value: "around" },
            { label: "Symmetrical Center (Lock Middle to 50%)", value: "center-split" },
            { label: "Start / Left", value: "start" },
            { label: "End / Right", value: "end" },
          ],
        },
        gap: {
          type: "select",
          label: "Item Spacing",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
            { label: "Extra Large", value: "xl" },
          ],
        },
        wrap: {
          type: "radio",
          label: "Wrap onto New Lines",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        items: [],
        justify: "center",
        gap: "md",
        wrap: false,
      },
      render: (props) => <FlexRowBlock {...props} />,
    },

    BorderFrameBlock: {
      fields: {
        content: { type: "slot" },
        topLeft: { type: "slot" },
        topRight: { type: "slot" },
        bottomLeft: { type: "slot" },
        bottomRight: { type: "slot" },
        borderStyle: {
          type: "select",
          label: "Frame Border Style",
          options: [
            { label: "Retro Double Line Border", value: "retro-double" },
            { label: "Dashed Perforated Border", value: "dashed" },
            { label: "Warm Wedding Card", value: "card" },
            { label: "Delicate Single Line", value: "delicate-line" },
            { label: "None (Slot Corner Layout Only)", value: "none" },
          ],
        },
        maxWidth: {
          type: "select",
          label: "Max Width",
          options: [
            { label: "Extra Small (xs - 320px)", value: "xs" },
            { label: "Small (sm - 384px)", value: "sm" },
            { label: "Medium (md - 448px)", value: "md" },
            { label: "Large (lg - 512px)", value: "lg" },
            { label: "Extra Large (xl - 576px)", value: "xl" },
            { label: "2XL (672px)", value: "2xl" },
            { label: "3XL (768px)", value: "3xl" },
            { label: "4XL (896px)", value: "4xl" },
            { label: "5XL (1024px)", value: "5xl" },
            { label: "6XL (1152px)", value: "6xl" },
            { label: "Full Width", value: "full" },
          ],
        },
        paddingY: {
          type: "select",
          label: "Vertical Padding",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
            { label: "Extra Large", value: "xl" },
          ],
        },
        align: {
          type: "select",
          label: "Content Alignment",
          options: [
            { label: "Center", value: "center" },
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
        },
        showDivider: {
          type: "radio",
          label: "Bottom Ribbon Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        animate: {
          type: "radio",
          label: "Scroll Entrance Animation",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        content: [],
        topLeft: [],
        topRight: [],
        bottomLeft: [],
        bottomRight: [],
        borderStyle: "retro-double",
        maxWidth: "xl",
        paddingY: "md",
        align: "center",
        showDivider: false,
        animate: true,
      },
      render: (props) => <BorderFrameBlock {...props} />,
    },

    // ----------------------------------------------------
    // ATOMIC CONTENT & TYPOGRAPHY
    // ----------------------------------------------------
    HeadingBlock: {
      fields: {
        text: { type: "text", label: "Heading Text" },
        as: {
          type: "select",
          label: "HTML Tag",
          options: [
            { label: "H1", value: "h1" },
            { label: "H2", value: "h2" },
            { label: "H3", value: "h3" },
            { label: "H4", value: "h4" },
            { label: "Paragraph (p)", value: "p" },
          ],
        },
        fontStyle: {
          type: "select",
          label: "Font Style",
          options: fontStyleOptions,
        },
        size: {
          type: "select",
          label: "Font Size",
          options: [
            { label: "Small", value: "sm" },
            { label: "Base", value: "base" },
            { label: "Large", value: "lg" },
            { label: "XL", value: "xl" },
            { label: "2XL", value: "2xl" },
            { label: "3XL", value: "3xl" },
            { label: "4XL (Display)", value: "4xl" },
            { label: "5XL (Huge)", value: "5xl" },
            { label: "6XL (Gigantic)", value: "6xl" },
          ],
        },
        color: {
          type: "select",
          label: "Color",
          options: [
            { label: "Terracotta Red (#b3392d)", value: "primary" },
            { label: "Dark Chocolate (#4a2824)", value: "body" },
            { label: "Muted Terracotta", value: "muted" },
          ],
        },
        align: {
          type: "select",
          label: "Alignment",
          options: [
            { label: "Center", value: "center" },
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
        },
        uppercase: {
          type: "radio",
          label: "Uppercase",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        tracking: {
          type: "select",
          label: "Letter Spacing",
          options: [
            { label: "Tight", value: "tight" },
            { label: "Normal", value: "normal" },
            { label: "Wide", value: "wide" },
            { label: "Widest (Spaced)", value: "widest" },
          ],
        },
        withSparkles: {
          type: "radio",
          label: "Flank with Sparkle Stars",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        marginBottom: {
          type: "select",
          label: "Bottom Margin",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
      },
      defaultProps: {
        text: "SAVE THE DATE",
        as: "h2",
        fontStyle: "retro",
        size: "3xl",
        color: "primary",
        align: "center",
        uppercase: false,
        tracking: "normal",
        withSparkles: false,
        marginBottom: "sm",
      },
      render: (props) => <HeadingBlock {...props} />,
    },

    TextBlock: {
      fields: {
        content: { type: "textarea", label: "Text Content" },
        fontStyle: {
          type: "select",
          label: "Font Style",
          options: fontStyleOptions,
        },
        size: {
          type: "select",
          label: "Font Size",
          options: [
            { label: "Extra Small (12-14px)", value: "xs" },
            { label: "Small (14-16px)", value: "sm" },
            { label: "Base (16-18px)", value: "base" },
            { label: "Large (18-20px)", value: "lg" },
            { label: "XL (20-24px)", value: "xl" },
            { label: "2XL (24-30px)", value: "2xl" },
            { label: "3XL (30-36px)", value: "3xl" },
            { label: "4XL (Display)", value: "4xl" },
            { label: "5XL (Huge)", value: "5xl" },
          ],
        },
        color: {
          type: "select",
          label: "Color",
          options: [
            { label: "Dark Chocolate (#4a2824)", value: "body" },
            { label: "Terracotta Red (#b3392d)", value: "primary" },
            { label: "Muted Terracotta", value: "muted" },
          ],
        },
        align: {
          type: "select",
          label: "Alignment",
          options: [
            { label: "Center", value: "center" },
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
        },
        uppercase: {
          type: "radio",
          label: "Uppercase",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        tracking: {
          type: "select",
          label: "Letter Spacing",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Wide", value: "wide" },
            { label: "Widest (Tracking)", value: "widest" },
          ],
        },
        maxWidth: {
          type: "select",
          label: "Max Width Container",
          options: [
            { label: "None", value: "none" },
            { label: "Extra Small", value: "xs" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
          ],
        },
        marginBottom: {
          type: "select",
          label: "Bottom Margin",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
      },
      defaultProps: {
        content: "Save our date on your calendar. Formal invitations & RSVP to follow.",
        fontStyle: "serif",
        size: "sm",
        color: "body",
        align: "center",
        uppercase: false,
        tracking: "normal",
        maxWidth: "sm",
        marginBottom: "sm",
      },
      render: (props) => <TextBlock {...props} />,
    },

    IllustrationBlock: {
      fields: {
        illustration: {
          type: "select",
          label: "Illustration",
          options: [
            { label: "Reaching Hands", value: "hands" },
            { label: "Bride & Groom Doodle", value: "couple" },
            { label: "Toasting Champagne Glasses", value: "champagne" },
            { label: "Cheeky Twin Cherries", value: "cherries" },
            { label: "Vintage Save The Date Stamp", value: "stamp" },
            { label: "Botanical Leaf (Left)", value: "leaf-left" },
            { label: "Botanical Leaf (Right)", value: "leaf-right" },
            { label: "Sparkle Stars Cluster", value: "sparkles" },
            { label: "Washi Tape Strip", value: "washi" },
          ],
        },
        align: {
          type: "select",
          label: "Alignment",
          options: [
            { label: "Center", value: "center" },
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
        },
        marginY: {
          type: "select",
          label: "Vertical Margin",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
      },
      defaultProps: {
        illustration: "hands",
        align: "center",
        marginY: "md",
      },
      render: (props) => <IllustrationBlock {...props} />,
    },

    AnimatedImageBlock: {
      fields: {
        imageType: {
          type: "select",
          label: "Source Type",
          options: [
            { label: "Illustration / Doodle Preset", value: "illustration" },
            { label: "Custom Image URL", value: "url" },
          ],
        },
        illustration: {
          type: "select",
          label: "Illustration Preset",
          options: [
            { label: "Cheeky Twin Cherries", value: "cherries" },
            { label: "Vintage Save The Date Stamp", value: "stamp" },
            { label: "Botanical Olive Leaf (Left)", value: "leaf-left" },
            { label: "Botanical Olive Leaf (Right)", value: "leaf-right" },
            { label: "Hand-Drawn Heart", value: "heart" },
            { label: "Entwined Wedding Rings", value: "rings" },
            { label: "Toasting Champagne Glasses", value: "champagne" },
            { label: "Bride & Groom Doodle", value: "couple" },
            { label: "Reaching Hands", value: "hands" },
            { label: "Sparkle Stars Cluster", value: "sparkles" },
            { label: "Washi Tape Strip", value: "washi" },
            { label: "Wine Bottle Pouring", value: "wine-bottle" },
            { label: "Party Poppers Blast", value: "poppers" },
            { label: "Banquet Feast Table", value: "banquet" },
            { label: "Cocktail Attire", value: "attire" },
          ],
        },
        src: { type: "text", label: "Custom Image URL (if Source Type = URL)" },
        alt: { type: "text", label: "Image Alt Text" },

        frameStyle: {
          type: "select",
          label: "Frame / Presentation Style",
          options: [
            { label: "None (Clean Transparent)", value: "none" },
            { label: "Vintage Polaroid Photo", value: "polaroid" },
            { label: "Postage Stamp Perforated Frame", value: "stamp" },
            { label: "Warm Wedding Card", value: "card" },
            { label: "Circular Badge Cameo", value: "circle" },
            { label: "Washi Taped Top", value: "washi" },
          ],
        },
        size: {
          type: "select",
          label: "Size",
          options: [
            { label: "Extra Small (44px)", value: "xs" },
            { label: "Small (72px)", value: "sm" },
            { label: "Medium (112px)", value: "md" },
            { label: "Large (160px)", value: "lg" },
            { label: "Extra Large (224px)", value: "xl" },
            { label: "2X Large (288px)", value: "2xl" },
            { label: "Auto / Natural", value: "auto" },
          ],
        },
        aspectRatio: {
          type: "select",
          label: "Aspect Ratio",
          options: [
            { label: "Auto / Natural", value: "auto" },
            { label: "Square (1:1)", value: "square" },
            { label: "Portrait (3:4)", value: "portrait" },
            { label: "Landscape (4:3)", value: "landscape" },
          ],
        },
        caption: { type: "text", label: "Caption Text (Optional)" },
        rotation: {
          type: "select",
          label: "Base Tilt Angle",
          options: [
            { label: "-12° Tilt", value: "-12" },
            { label: "-8° Tilt", value: "-8" },
            { label: "-4° Tilt", value: "-4" },
            { label: "-2° Tilt", value: "-2" },
            { label: "0° (Straight)", value: "0" },
            { label: "+2° Tilt", value: "2" },
            { label: "+4° Tilt", value: "4" },
            { label: "+8° Tilt", value: "8" },
            { label: "+12° Tilt", value: "12" },
          ],
        },

        animation: {
          type: "select",
          label: "Animation Effect",
          options: [
            { label: "Gentle Floating & Swaying (Combined)", value: "float-sway" },
            { label: "Gentle Vertical Float (Bobbing)", value: "float" },
            { label: "Pendulum Sway (Tilting)", value: "sway" },
            { label: "Breathing Heartbeat Pulse", value: "pulse" },
            { label: "Slow Continuous Spin", value: "spin-slow" },
            { label: "Soft Rhythmic Bounce", value: "bounce" },
            { label: "Playful Wiggle / Shake", value: "wiggle" },
            { label: "Scroll Reveal (Fade & Rise)", value: "scroll-reveal" },
            { label: "None (Static)", value: "none" },
          ],
        },
        speed: {
          type: "select",
          label: "Animation Speed",
          options: [
            { label: "Slow (Gentle & Lingering)", value: "slow" },
            { label: "Normal (Balanced)", value: "normal" },
            { label: "Fast (Lively)", value: "fast" },
          ],
        },
        delay: {
          type: "select",
          label: "Animation Delay (Desync)",
          options: [
            { label: "0s (Immediate)", value: "0" },
            { label: "0.5s Delay", value: "0.5" },
            { label: "1.0s Delay", value: "1" },
            { label: "1.5s Delay", value: "1.5" },
            { label: "2.0s Delay", value: "2" },
            { label: "2.5s Delay", value: "2.5" },
            { label: "3.0s Delay", value: "3" },
          ],
        },
        hoverEffect: {
          type: "select",
          label: "Hover Reaction",
          options: [
            { label: "Float Up (Lift)", value: "lift" },
            { label: "Tilt", value: "tilt" },
            { label: "Scale Up", value: "scale" },
            { label: "Playful Wiggle", value: "wiggle" },
            { label: "None", value: "none" },
          ],
        },

        placement: {
          type: "select",
          label: "Placement / Border Position",
          options: [
            { label: "Inline (Standard Content Flow)", value: "inline" },
            { label: "Container Top-Left Corner", value: "corner-top-left" },
            { label: "Container Top-Right Corner", value: "corner-top-right" },
            {
              label: "Container Center-Left (Middle Edge)",
              value: "container-center-left",
            },
            {
              label: "Container Center-Right (Middle Edge)",
              value: "container-center-right",
            },
            { label: "Container Bottom-Left Corner", value: "corner-bottom-left" },
            { label: "Container Bottom-Right Corner", value: "corner-bottom-right" },
            { label: "Outside Left Border (Wide Gutter)", value: "border-left" },
            { label: "Outside Right Border (Wide Gutter)", value: "border-right" },
            { label: "Viewport Fixed Top-Left", value: "fixed-top-left" },
            { label: "Viewport Fixed Top-Right", value: "fixed-top-right" },
            { label: "Viewport Fixed Bottom-Left", value: "fixed-bottom-left" },
            { label: "Viewport Fixed Bottom-Right", value: "fixed-bottom-right" },
            { label: "Viewport Fixed Center-Left", value: "fixed-left" },
            { label: "Viewport Fixed Center-Right", value: "fixed-right" },
          ],
        },
        align: {
          type: "select",
          label: "Inline Alignment",
          options: [
            { label: "Center", value: "center" },
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
        },
        hideOnMobile: {
          type: "radio",
          label: "Hide on Narrow Mobile (<640px)",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        zIndex: {
          type: "select",
          label: "Layer Stacking (Z-Index)",
          options: [
            { label: "Standard (z-10)", value: "normal" },
            { label: "Behind Content (z-0)", value: "behind" },
            { label: "In Front / Floating (z-30)", value: "above" },
          ],
        },
        linkUrl: { type: "text", label: "Link URL (Optional)" },
        newTab: {
          type: "radio",
          label: "Open Link in New Tab",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        imageType: "illustration",
        illustration: "cherries",
        src: "",
        alt: "Wedding decoration",
        frameStyle: "none",
        size: "md",
        aspectRatio: "auto",
        caption: "",
        rotation: "0",
        animation: "float-sway",
        speed: "normal",
        delay: "0",
        hoverEffect: "lift",
        placement: "inline",
        align: "center",
        hideOnMobile: false,
        zIndex: "normal",
        linkUrl: "",
        newTab: false,
      },
      render: (props) => <AnimatedImageBlock {...props} />,
    },

    ButtonBlock: {
      fields: {
        label: { type: "text", label: "Button Label" },
        url: { type: "text", label: "Button Link / URL" },
        variant: {
          type: "select",
          label: "Style Variant",
          options: [
            { label: "Filled Red Pill", value: "pill-filled" },
            { label: "Outline Red Pill", value: "pill-outline" },
            { label: "Text Link", value: "link" },
          ],
        },
        icon: {
          type: "select",
          label: "Icon",
          options: [
            { label: "None", value: "none" },
            { label: "Calendar", value: "calendar" },
            { label: "Apple / iCal", value: "ical" },
            { label: "Heart", value: "heart" },
            { label: "External Link", value: "external" },
          ],
        },
        download: { type: "text", label: "Download Filename (Optional)" },
        align: {
          type: "select",
          label: "Alignment",
          options: [
            { label: "Center", value: "center" },
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
        },
        newTab: {
          type: "radio",
          label: "Open in New Tab",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        fontStyle: {
          type: "select",
          label: "Font Style",
          options: fontStyleOptions,
        },
      },
      defaultProps: {
        label: "Click Here",
        url: "#",
        variant: "pill-filled",
        fontStyle: "sans",
        icon: "none",
        download: "",
        align: "center",
        newTab: false,
      },
      render: (props) => <ButtonBlock {...props} />,
    },

    DividerBlock: {
      fields: {
        variant: {
          type: "select",
          label: "Divider Style",
          options: [
            { label: "Ribbon Wave Loop", value: "ribbon" },
            { label: "Botanical Olive Leaves", value: "leaves" },
            { label: "Subtle Line", value: "line" },
            { label: "Small Spacer (16px)", value: "spacer-sm" },
            { label: "Medium Spacer (32px)", value: "spacer-md" },
            { label: "Large Spacer (56px)", value: "spacer-lg" },
          ],
        },
      },
      defaultProps: {
        variant: "ribbon",
      },
      render: (props) => <DividerBlock {...props} />,
    },

    // ----------------------------------------------------
    // ATOMIC WEDDING WIDGETS
    // ----------------------------------------------------
    CalendarHeartBlock: {
      fields: {
        targetDay: { type: "number", label: "Target Day (Day of Month)" },
        monthYearText: { type: "text", label: "Month & Year Text" },
        showFlourish: {
          type: "radio",
          label: "Show Flanking Olive Leaves",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        targetDay: 18,
        monthYearText: "Saturday, September 2027",
        showFlourish: true,
      },
      render: (props) => <CalendarHeartBlock {...props} />,
    },

    AddToCalendarBlock: {
      fields: {
        eventName: { type: "text", label: "Event Name" },
        eventDate: { type: "text", label: "Event Date (YYYYMMDD)" },
        eventLocation: { type: "text", label: "Event Location" },
        eventDetails: { type: "textarea", label: "Event Details / Description" },
      },
      defaultProps: {
        eventName: "Jules & Jon Wedding",
        eventDate: "20270918",
        eventLocation: "The Rocks, Sydney NSW, Australia",
        eventDetails: "Save the date for the wedding celebration of Jules & Jon! Formal invitation to follow.",
      },
      render: (props) => <AddToCalendarBlock {...props} />,
    },

    CountdownTimerBlock: {
      fields: {
        targetDate: { type: "text", label: "Target ISO Date" },
        showFlourish: {
          type: "radio",
          label: "Show Flanking Olive Leaves",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        targetDate: "2027-09-18T15:00:00",
        showFlourish: true,
      },
      render: (props) => <CountdownTimerBlock {...props} />,
    },

    // ----------------------------------------------------
    // PRE-ASSEMBLED COMPOSITE BLOCKS (CLASSIC)
    // ----------------------------------------------------
    HeroBlock: {
      fields: {
        headline: { type: "text", label: "Headline" },
        names: { type: "text", label: "Couple Names" },
        dateText: { type: "text", label: "Date" },
        locationText: { type: "text", label: "Location" },
        illustrationType: {
          type: "select",
          label: "Illustration",
          options: [
            { label: "Reaching Hands", value: "hands" },
            { label: "Bride & Groom Doodle", value: "couple" },
            { label: "Toasting Champagne Glasses", value: "champagne" },
            { label: "Cheeky Twin Cherries", value: "cherries" },
          ],
        },
        buttonText: { type: "text", label: "Button Label" },
        buttonLink: { type: "text", label: "Button URL / Anchor" },
        welcomeMessage: { type: "textarea", label: "Welcome Message" },
        showBottomDoodle: {
          type: "radio",
          label: "Show Bottom Couple Doodle",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        showDivider: {
          type: "radio",
          label: "Show Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        headlineFontStyle: {
          type: "select",
          label: "Headline Font Style",
          options: fontStyleOptions,
        },
        namesFontStyle: {
          type: "select",
          label: "Names Font Style",
          options: fontStyleOptions,
        },
      },
      defaultProps: {
        headline: "SAVE THE DATE",
        headlineFontStyle: "retro",
        names: "Jules & Jon",
        namesFontStyle: "retro",
        dateText: "Saturday, September 18th 2027",
        locationText: "The Rocks, Sydney · Australia",
        illustrationType: "hands",
        buttonText: "",
        buttonLink: "",
        welcomeMessage:
          "We're tying the knot! Save our date on your calendar. Formal invitations, travel details & RSVP to follow.",
        showBottomDoodle: false,
        showDivider: true,
      },
      render: (props) => <HeroBlock {...props} />,
    },

    SaveTheDateBlock: {
      fields: {
        title: { type: "text", label: "Title" },
        fontStyle: {
          type: "select",
          label: "Title Font Style",
          options: fontStyleOptions,
        },
        monthYearText: { type: "text", label: "Month & Year" },
        targetDay: { type: "number", label: "Target Day (Day of Month)" },
        timeNote: { type: "text", label: "Time Note" },
        showDivider: {
          type: "radio",
          label: "Show Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        title: "save the date",
        fontStyle: "retro",
        monthYearText: "Saturday, September 2027",
        targetDay: 18,
        timeNote: "Formal invitation & details to follow",
        showDivider: false,
      },
      render: (props) => <SaveTheDateBlock {...props} />,
    },

    CountdownBlock: {
      fields: {
        title: { type: "text", label: "Title" },
        fontStyle: {
          type: "select",
          label: "Title Font Style",
          options: fontStyleOptions,
        },
        targetDate: { type: "text", label: "Target ISO Date" },
      },
      defaultProps: {
        title: "counting the days",
        fontStyle: "retro",
        targetDate: "2027-09-18T15:00:00",
      },
      render: (props) => <CountdownBlock {...props} />,
    },

    WineStreamDetailsBlock: {
      fields: {
        title: { type: "text", label: "Title" },
        subtitle: { type: "text", label: "Subtitle" },
        item1Heading: { type: "text", label: "Item 1 Heading" },
        item1Body: { type: "textarea", label: "Item 1 Text" },
        item2Heading: { type: "text", label: "Item 2 Heading" },
        item2Body: { type: "textarea", label: "Item 2 Text" },
        item3Heading: { type: "text", label: "Item 3 Heading" },
        item3Body: { type: "textarea", label: "Item 3 Text" },
        item4Heading: { type: "text", label: "Item 4 Heading" },
        item4Body: { type: "textarea", label: "Item 4 Text" },
        showDivider: {
          type: "radio",
          label: "Show Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        title: "the details",
        subtitle: "save the date for our celebration",
        item1Heading: "when",
        item1Body: "Saturday, September 18th, 2027",
        item2Heading: "where",
        item2Body: "The Rocks, Sydney · New South Wales, Australia",
        item3Heading: "what to expect",
        item3Body:
          "An unforgettable evening of great food, wine, and dancing. Formal invitations & RSVP will follow!",
        item4Heading: "who to contact",
        item4Body: "Have questions in the meantime? Reach us anytime at hello@julesnjon.com",
        showDivider: true,
      },
      render: (props) => <WineStreamDetailsBlock {...props} />,
    },

    CelebrationPopperBlock: {
      fields: {
        title: { type: "text", label: "Title" },
        subtitle: { type: "text", label: "Subtitle" },
        showDivider: {
          type: "radio",
          label: "Show Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        title: "celebrate with us",
        subtitle: "save the date & toast the happy couple!",
        showDivider: true,
      },
      render: (props) => <CelebrationPopperBlock {...props} />,
    },

    CalendarReminderBlock: {
      fields: {
        title: { type: "text", label: "Title" },
        subtitle: { type: "text", label: "Subtitle" },
        eventName: { type: "text", label: "Event Name" },
        eventDate: { type: "text", label: "Event Date (YYYYMMDD)" },
        eventLocation: { type: "text", label: "Event Location" },
        eventDetails: { type: "textarea", label: "Event Details" },
        showDivider: {
          type: "radio",
          label: "Show Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        title: "mark your calendar",
        subtitle: "save the date so you won't miss our big day!",
        eventName: "Jules & Jon Wedding",
        eventDate: "20270918",
        eventLocation: "The Rocks, Sydney NSW, Australia",
        eventDetails:
          "Save the date for the wedding celebration of Jules & Jon! Formal invitation to follow.",
        showDivider: false,
      },
      render: (props) => <CalendarReminderBlock {...props} />,
    },

    LocationBlock: {
      fields: {
        title: { type: "text", label: "Title" },
        areaText: { type: "text", label: "Area" },
        ceremonyVenue: { type: "text", label: "Ceremony Venue" },
        receptionVenue: { type: "text", label: "Reception Venue" },
        mapsUrl: { type: "text", label: "Google Maps URL" },
        buttonText: { type: "text", label: "Button Label" },
        showDivider: {
          type: "radio",
          label: "Show Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        title: "Location",
        areaText: "The Rocks, Sydney",
        ceremonyVenue: "Ceremony · The Garrison Church",
        receptionVenue: "Reception · The Oriana",
        mapsUrl: "https://maps.google.com/?q=The+Rocks+Sydney",
        buttonText: "Google Maps",
        showDivider: true,
      },
      render: (props) => <LocationBlock {...props} />,
    },

    TimelineBlock: {
      fields: {
        title: { type: "text", label: "Title" },
        subtitle: { type: "textarea", label: "Subtitle" },
        showDivider: {
          type: "radio",
          label: "Show Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        title: "Wedding Timeline",
        subtitle: "Schedule & timings will be updated closer to our wedding day",
        showDivider: true,
      },
      render: (props) => <TimelineBlock {...props} />,
    },

    DetailsBlock: {
      fields: {
        title: { type: "text", label: "Title" },
        accommodationTitle: { type: "text", label: "Accommodation Title" },
        accommodationText: { type: "textarea", label: "Accommodation Text" },
        transportationTitle: { type: "text", label: "Transportation Title" },
        transportationText: { type: "textarea", label: "Transportation Text" },
        showDivider: {
          type: "radio",
          label: "Show Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        title: "Wedding Details",
        accommodationTitle: "Accommodation",
        accommodationText:
          "For your convenience, hotel suggestions and room blocks around The Rocks and Sydney CBD will be shared soon to help plan your stay.",
        transportationTitle: "Transportation",
        transportationText:
          "The Garrison Church and The Oriana are centrally located in The Rocks, Sydney. Circular Quay station (trains, ferries, and light rail) is within a brief walking distance.",
        showDivider: true,
      },
      render: (props) => <DetailsBlock {...props} />,
    },

    AttireGuideBlock: {
      fields: {
        title: { type: "text", label: "Title" },
        attireType: { type: "text", label: "Dress Code" },
        description: { type: "textarea", label: "Description" },
        showDivider: {
          type: "radio",
          label: "Show Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        title: "Attire Guide",
        attireType: "Black Tie",
        description:
          "We invite our guests to dress in formal black-tie attire—tuxedos or formal dark suits for gentlemen, and floor-length gowns or elegant formal dresses for ladies.",
        showDivider: true,
      },
      render: (props) => <AttireGuideBlock {...props} />,
    },

    GiftBlock: {
      fields: {
        title: { type: "text", label: "Title" },
        message: { type: "textarea", label: "Message" },
        buttonText: { type: "text", label: "Button Label" },
        buttonLink: { type: "text", label: "Button URL" },
        showDivider: {
          type: "radio",
          label: "Show Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        title: "Wedding Gift",
        message:
          "Your presence at our wedding is the greatest gift of all. If you would like to bless us further, a contribution to our wishing well would mean the world to us as we embark on this exciting chapter together.",
        buttonText: "Wishing Well",
        buttonLink: "#wishing-well",
        showDivider: true,
      },
      render: (props) => <GiftBlock {...props} />,
    },

    StoryCardBlock: {
      fields: {
        title: { type: "text", label: "Title" },
        tagline: { type: "text", label: "Tagline" },
        showDivider: {
          type: "radio",
          label: "Show Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        title: "Love Story",
        tagline: "A glimpse into our journey together",
        showDivider: true,
      },
      render: (props) => <StoryCardBlock {...props} />,
    },

    RsvpBlock: {
      fields: {
        deadlineText: { type: "text", label: "RSVP Deadline Text" },
        buttonText: { type: "text", label: "Button Label" },
        buttonLink: { type: "text", label: "Button URL / Link" },
        note: { type: "textarea", label: "Note" },
        showDivider: {
          type: "radio",
          label: "Show Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        deadlineText: "Kindly RSVP by July 18th, 2027",
        buttonText: "RSVP",
        buttonLink: "mailto:rsvp@julesnjon.com?subject=Wedding%20RSVP",
        note: "to help us with final arrangements for our special day.",
        showDivider: false,
      },
      render: (props) => <RsvpBlock {...props} />,
    },

    FooterBlock: {
      fields: {
        message: { type: "textarea", label: "Message" },
        signature: { type: "text", label: "Signature" },
        domain: { type: "text", label: "Domain" },
      },
      defaultProps: {
        message:
          "We can't wait to celebrate our special day with all of our dearest family and friends. Formal invitations and RSVP details to follow!",
        signature: "Jules & Jon",
        domain: "julesnjon.com",
      },
      render: (props) => <FooterBlock {...props} />,
    },

    ImageCarouselBlock: {
      fields: {
        title: { type: "text", label: "Section Title" },
        subtitle: { type: "text", label: "Subtitle / Tagline" },
        showTitle: {
          type: "radio",
          label: "Show Title",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        fullBleed: {
          type: "radio",
          label: "Layout Width",
          options: [
            { label: "Full Page Edge-to-Edge", value: true },
            { label: "Contained", value: false },
          ],
        },
        speed: {
          type: "select",
          label: "Auto-Slide Speed",
          options: [
            { label: "Slow Drift (Relaxed)", value: "slow" },
            { label: "Medium", value: "medium" },
            { label: "Fast", value: "fast" },
            { label: "Turbo (Brisk Reel)", value: "turbo" },
            { label: "Paused (Manual Only)", value: "paused" },
          ],
        },
        direction: {
          type: "select",
          label: "Slide Direction",
          options: [
            { label: "Leftward (Right to Left)", value: "left" },
            { label: "Rightward (Left to Right)", value: "right" },
          ],
        },
        cardStyle: {
          type: "select",
          label: "Card Frame Style",
          options: [
            { label: "Polaroid Photo Frame", value: "polaroid" },
            { label: "Vintage Card Frame", value: "vintage-card" },
            { label: "Modern Overlay Frame", value: "modern" },
            { label: "Minimalist Borderless", value: "minimal" },
            { label: "Seamless Flush (No Border/Radius)", value: "flush" },
          ],
        },
        cardHeight: {
          type: "select",
          label: "Image Height",
          options: [
            { label: "Extra Small (160px)", value: "xs" },
            { label: "Small (240px)", value: "sm" },
            { label: "Medium (320px)", value: "md" },
            { label: "Large (380px)", value: "lg" },
            { label: "Extra Large (480px)", value: "xl" },
          ],
        },
        aspectRatio: {
          type: "select",
          label: "Image Aspect Ratio",
          options: [
            { label: "Portrait (3:4)", value: "portrait" },
            { label: "Square (1:1)", value: "square" },
            { label: "Landscape (4:3)", value: "landscape" },
            { label: "Auto / Natural", value: "auto" },
          ],
        },
        gap: {
          type: "select",
          label: "Spacing Between Photos",
          options: [
            { label: "None (No Space)", value: "none" },
            { label: "Compact", value: "sm" },
            { label: "Comfortable", value: "md" },
            { label: "Spacious", value: "lg" },
          ],
        },
        subtleTilt: {
          type: "radio",
          label: "Subtle Photo Tilt (Polaroids)",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        pauseOnHover: {
          type: "radio",
          label: "Pause Auto-Slide on Hover",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        showControls: {
          type: "radio",
          label: "Show Navigation Arrows",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        showPauseButton: {
          type: "radio",
          label: "Show Pause / Play Button",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        showScrollHint: {
          type: "radio",
          label: 'Show "Scroll or drag horizontally" Hint',
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        showEdgeFades: {
          type: "radio",
          label: "Edge Fade / Vignette",
          options: [
            { label: "No (Clean Edges)", value: false },
            { label: "Yes (Subtle Fade)", value: true },
          ],
        },
        showDivider: {
          type: "radio",
          label: "Show Bottom Ribbon Divider",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        images: {
          type: "array",
          label: "Carousel Images",
          arrayFields: {
            url: { type: "text", label: "Image URL or Path" },
            alt: { type: "text", label: "Alt Text" },
            caption: { type: "text", label: "Caption" },
            subcaption: { type: "text", label: "Subcaption / Date" },
            rotation: {
              type: "select",
              label: "Rotation Angle",
              options: [
                { label: "Default Alternating", value: "0" },
                { label: "Tilt Left (-2°)", value: "-2" },
                { label: "Tilt Left (-1°)", value: "-1" },
                { label: "Tilt Right (+1°)", value: "1" },
                { label: "Tilt Right (+2°)", value: "2" },
              ],
            },
          },
          getItemSummary: (item, idx) =>
            item?.caption || item?.alt || `Image ${(idx ?? 0) + 1}`,
          defaultItemProps: {
            url: "/images/redflowers.png",
            alt: "Wedding photo",
            caption: "New Memory",
            subcaption: "Captured with love",
            rotation: "0",
          },
        },
      },
      defaultProps: {
        title: "Moments Together",
        subtitle: "A glimpse into our story and favorite memories",
        showTitle: true,
        images: defaultCarouselImages,
        speed: "slow",
        direction: "left",
        pauseOnHover: true,
        showControls: true,
        showPauseButton: true,
        showScrollHint: true,
        showEdgeFades: false,
        fullBleed: true,
        cardStyle: "polaroid",
        cardHeight: "md",
        aspectRatio: "portrait",
        gap: "md",
        subtleTilt: true,
        showDivider: true,
      },
      render: (props) => <ImageCarouselBlock {...props} />,
    },

    StickerRibbonBlock: {
      fields: {
        fullBleed: {
          type: "radio",
          label: "Screen Span",
          options: [
            { label: "Full Screen Border-to-Border", value: true },
            { label: "Contained", value: false },
          ],
        },
        distribution: {
          type: "select",
          label: "Horizontal Distribution",
          options: [
            { label: "Evenly Distributed (Border to Border)", value: "space-evenly" },
            { label: "Space Between (Edges Anchored)", value: "space-between" },
            { label: "Space Around", value: "space-around" },
            { label: "Centered", value: "center" },
          ],
        },
        baseSize: {
          type: "select",
          label: "Sticker Size",
          options: [
            { label: "Extra Small (48px)", value: "xs" },
            { label: "Small (64px)", value: "sm" },
            { label: "Medium (80px)", value: "md" },
            { label: "Large (96px)", value: "lg" },
            { label: "Extra Large (112px)", value: "xl" },
          ],
        },
        borderStyle: {
          type: "select",
          label: "Sticker Border Effect",
          options: [
            { label: "None (Clean / Raw Stickers)", value: "none" },
            { label: "Crisp White Die-Cut Outline", value: "white-diecut" },
            { label: "Thin White Sticker Edge", value: "thin-white" },
            { label: "Subtle Wedding Red Outline", value: "red-outline" },
          ],
        },
        shadowStyle: {
          type: "select",
          label: "Sticker Shadow Effect",
          options: [
            { label: "None (Flat / No Shadow)", value: "none" },
            { label: "Realistic Sticker Depth Shadow", value: "sticker-depth" },
            { label: "Soft Gentle Shadow", value: "soft" },
            { label: "Flat Vintage Shadow", value: "flat" },
          ],
        },
        tiltStyle: {
          type: "select",
          label: "Sticker Tilt",
          options: [
            { label: "None (Straight 0°)", value: "none" },
            { label: "Subtle Alternating (-2° to +3°)", value: "subtle" },
            { label: "Playful Tilts (-6° to +6°)", value: "playful" },
            { label: "Per-Sticker Custom Angles", value: "per-sticker" },
          ],
        },
        hoverEffect: {
          type: "select",
          label: "Hover Reaction",
          options: [
            { label: "None (Static on Hover)", value: "none" },
            { label: "Scale / Pop Up", value: "scale" },
            { label: "Lift Upward", value: "lift" },
            { label: "Playful Wiggle", value: "wiggle" },
          ],
        },
        gap: {
          type: "select",
          label: "Spacing / Gap",
          options: [
            { label: "Compact", value: "sm" },
            { label: "Comfortable", value: "md" },
            { label: "Spacious", value: "lg" },
            { label: "Extra Spacious", value: "xl" },
          ],
        },
        paddingY: {
          type: "select",
          label: "Vertical Spacing",
          options: [
            { label: "None", value: "none" },
            { label: "Extra Small", value: "xs" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
        lineDivider: {
          type: "select",
          label: "Optional Divider Line",
          options: [
            { label: "None (Pure White / Open Space)", value: "none" },
            { label: "Subtle Solid Lines", value: "subtle-solid" },
            { label: "Dashed Divider Lines", value: "dashed" },
            { label: "Dotted Divider Lines", value: "dotted" },
          ],
        },
        stickers: {
          type: "array",
          label: "Stickers",
          arrayFields: {
            url: { type: "text", label: "Image URL or Path" },
            alt: { type: "text", label: "Alt Text" },
            rotation: {
              type: "select",
              label: "Rotation Angle (if Per-Sticker)",
              options: [
                { label: "None (0°)", value: "0" },
                { label: "Tilt Left (-6°)", value: "-6" },
                { label: "Tilt Left (-4°)", value: "-4" },
                { label: "Tilt Left (-2°)", value: "-2" },
                { label: "Tilt Right (+2°)", value: "2" },
                { label: "Tilt Right (+4°)", value: "4" },
                { label: "Tilt Right (+6°)", value: "6" },
              ],
            },
            size: {
              type: "select",
              label: "Individual Size Override",
              options: [
                { label: "Use Base Size", value: "md" },
                { label: "Extra Small", value: "xs" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
              ],
            },
          },
          getItemSummary: (item, idx) => item?.alt || `Sticker ${(idx ?? 0) + 1}`,
          defaultItemProps: {
            url: "/images/fabricheart.png",
            alt: "Heart sticker",
            rotation: "0",
            size: "md",
          },
        },
      },
      defaultProps: {
        stickers: defaultStickers,
        fullBleed: true,
        distribution: "space-evenly",
        gap: "md",
        paddingY: "md",
        maxWidth: "full",
        borderStyle: "none",
        shadowStyle: "none",
        tiltStyle: "subtle",
        hoverEffect: "scale",
        baseSize: "md",
        lineDivider: "none",
      },
      render: (props) => <StickerRibbonBlock {...props} />,
    },
  },
};

export default config;
