import type { Config } from "@puckeditor/core";
import { HeroBlock, HeroBlockProps } from "./components/blocks/HeroBlock";
import { CountdownBlock, CountdownBlockProps } from "./components/blocks/CountdownBlock";
import { SaveTheDateBlock, SaveTheDateBlockProps } from "./components/blocks/SaveTheDateBlock";
import { LocationBlock, LocationBlockProps } from "./components/blocks/LocationBlock";
import { TimelineBlock, TimelineBlockProps } from "./components/blocks/TimelineBlock";
import { DetailsBlock, DetailsBlockProps } from "./components/blocks/DetailsBlock";
import { AttireGuideBlock, AttireGuideBlockProps } from "./components/blocks/AttireGuideBlock";
import { GiftBlock, GiftBlockProps } from "./components/blocks/GiftBlock";
import { StoryCardBlock, StoryCardBlockProps } from "./components/blocks/StoryCardBlock";
import { RsvpBlock, RsvpBlockProps } from "./components/blocks/RsvpBlock";
import { FooterBlock, FooterBlockProps } from "./components/blocks/FooterBlock";

export type Props = {
  HeroBlock: HeroBlockProps;
  CountdownBlock: CountdownBlockProps;
  SaveTheDateBlock: SaveTheDateBlockProps;
  LocationBlock: LocationBlockProps;
  TimelineBlock: TimelineBlockProps;
  DetailsBlock: DetailsBlockProps;
  AttireGuideBlock: AttireGuideBlockProps;
  GiftBlock: GiftBlockProps;
  StoryCardBlock: StoryCardBlockProps;
  RsvpBlock: RsvpBlockProps;
  FooterBlock: FooterBlockProps;
};

export const config: Config<Props> = {
  categories: {
    wedding: {
      title: "Wedding Blocks",
      components: [
        "HeroBlock",
        "CountdownBlock",
        "SaveTheDateBlock",
        "LocationBlock",
        "TimelineBlock",
        "DetailsBlock",
        "AttireGuideBlock",
        "GiftBlock",
        "StoryCardBlock",
        "RsvpBlock",
        "FooterBlock",
      ],
    },
  },
  components: {
    HeroBlock: {
      fields: {
        headline: { type: "text", label: "Headline" },
        names: { type: "text", label: "Couple Names" },
        dateText: { type: "text", label: "Date" },
        buttonText: { type: "text", label: "Button Label" },
        buttonLink: { type: "text", label: "Button URL / Anchor" },
        welcomeMessage: { type: "textarea", label: "Welcome Message" },
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
        headline: "WE'RE GETTING MARRIED!",
        names: "Jules & Jon",
        dateText: "Saturday, September 18th 2027",
        buttonText: "Open Invitation",
        buttonLink: "#countdown",
        welcomeMessage:
          "No happiness is complete without the presence of our dearest ones. With great joy, we invite you to witness and celebrate our wedding day.",
        showDivider: true,
      },
      render: (props) => <HeroBlock {...props} />,
    },

    CountdownBlock: {
      fields: {
        title: { type: "text", label: "Title" },
        targetDate: { type: "text", label: "Target ISO Date" },
      },
      defaultProps: {
        title: "Counting Days",
        targetDate: "2027-09-18T15:00:00",
      },
      render: (props) => <CountdownBlock {...props} />,
    },

    SaveTheDateBlock: {
      fields: {
        title: { type: "text", label: "Title" },
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
        title: "Save The Date",
        monthYearText: "Saturday, September 2027",
        targetDay: 18,
        timeNote: "Time to be announced",
        showDivider: false,
      },
      render: (props) => <SaveTheDateBlock {...props} />,
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
          "We are grateful for the love and support of our family and friends. Your presence will make our day more special, and we look forward to celebrating with joy and creating unforgettable memories together.",
        signature: "Jules & Jon",
        domain: "julesnjon.com",
      },
      render: (props) => <FooterBlock {...props} />,
    },
  },
};

export default config;
