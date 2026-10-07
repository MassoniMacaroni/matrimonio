import type { Config } from "@puckeditor/core";
import { HeroBlock, HeroBlockProps } from "./components/blocks/HeroBlock";
import { StoryCardBlock, StoryCardBlockProps } from "./components/blocks/StoryCardBlock";
import { CountdownBlock, CountdownBlockProps } from "./components/blocks/CountdownBlock";
import { DetailsBlock, DetailsBlockProps } from "./components/blocks/DetailsBlock";
import { FooterBlock, FooterBlockProps } from "./components/blocks/FooterBlock";

export type Props = {
  HeroBlock: HeroBlockProps;
  StoryCardBlock: StoryCardBlockProps;
  CountdownBlock: CountdownBlockProps;
  DetailsBlock: DetailsBlockProps;
  FooterBlock: FooterBlockProps;
};

export const config: Config<Props> = {
  categories: {
    wedding: {
      title: "Wedding Blocks",
      components: ["HeroBlock", "CountdownBlock", "StoryCardBlock", "DetailsBlock", "FooterBlock"],
    },
  },
  components: {
    HeroBlock: {
      fields: {
        names: { type: "text", label: "Couple Names" },
        badgeText: { type: "text", label: "Badge Text" },
        dateText: { type: "text", label: "Date" },
        locationText: { type: "text", label: "Location" },
        subheading: { type: "textarea", label: "Subheading" },
      },
      defaultProps: {
        names: "Jules & Jon",
        badgeText: "SAVE THE DATE",
        dateText: "Saturday, October 10, 2026",
        locationText: "Melbourne, Australia",
        subheading: "We're getting married! Formal invitation to follow.",
      },
      render: (props) => <HeroBlock {...props} />,
    },
    StoryCardBlock: {
      fields: {
        tag: { type: "text", label: "Tag / Category" },
        emoji: { type: "text", label: "Emoji" },
        title: { type: "text", label: "Title" },
        body: { type: "textarea", label: "Story Text" },
        accentColor: {
          type: "select",
          label: "Theme Color",
          options: [
            { label: "Butter Yellow", value: "butter" },
            { label: "Soft Rose", value: "rose" },
            { label: "Sage Green", value: "sage" },
            { label: "Lavender", value: "lavender" },
          ],
        },
      },
      defaultProps: {
        tag: "OUR STORY",
        emoji: "🥂",
        title: "How It All Began",
        body: "From late-night pasta dinners to long road trips, our favorite adventures have always been the ones spent together. We can't wait to begin our next chapter with our favorite people by our side.",
        accentColor: "butter",
      },
      render: (props) => <StoryCardBlock {...props} />,
    },
    CountdownBlock: {
      fields: {
        title: { type: "text", label: "Countdown Title" },
        targetDate: { type: "text", label: "Target ISO Date" },
      },
      defaultProps: {
        title: "Counting down the days!",
        targetDate: "2026-10-10T15:00:00",
      },
      render: (props) => <CountdownBlock {...props} />,
    },
    DetailsBlock: {
      fields: {
        heading: { type: "text", label: "Section Heading" },
        ceremonyTime: { type: "text", label: "Time" },
        venueHint: { type: "text", label: "Location / Venue" },
        attireHint: { type: "text", label: "Attire" },
        note: { type: "textarea", label: "Note" },
      },
      defaultProps: {
        heading: "At A Glance",
        ceremonyTime: "3:30 PM",
        venueHint: "Yarra Valley, Victoria",
        attireHint: "Festive & Colorful Cocktail",
        note: "Travel, accommodation suggestions, and RSVP will be shared with the formal invitation.",
      },
      render: (props) => <DetailsBlock {...props} />,
    },
    FooterBlock: {
      fields: {
        signOff: { type: "text", label: "Sign-off" },
        signature: { type: "text", label: "Signature" },
        domain: { type: "text", label: "Domain" },
      },
      defaultProps: {
        signOff: "Can't wait to see you on our big day!",
        signature: "With love, Jules & Jon",
        domain: "julesnjon.com",
      },
      render: (props) => <FooterBlock {...props} />,
    },
  },
};

export default config;
