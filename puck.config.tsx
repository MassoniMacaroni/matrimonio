import type { Config } from "@puckeditor/core";
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

export type Props = {
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
};

export const config: Config<Props> = {
  categories: {
    saveTheDate: {
      title: "Save The Date Blocks",
      components: [
        "HeroBlock",
        "SaveTheDateBlock",
        "CountdownBlock",
        "WineStreamDetailsBlock",
        "CelebrationPopperBlock",
        "CalendarReminderBlock",
      ],
    },
    invitation: {
      title: "Full Wedding Invite Blocks",
      components: [
        "LocationBlock",
        "TimelineBlock",
        "DetailsBlock",
        "AttireGuideBlock",
        "GiftBlock",
        "StoryCardBlock",
        "RsvpBlock",
      ],
    },
    shared: {
      title: "Footer & Shared Blocks",
      components: ["FooterBlock"],
    },
  },
  components: {
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
      },
      defaultProps: {
        headline: "SAVE THE DATE",
        names: "Jules & Jon",
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
          options: [
            { label: "Retro Chunky Serif", value: "retro" },
            { label: "Calligraphy Script", value: "script" },
          ],
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
          options: [
            { label: "Retro Chunky Serif", value: "retro" },
            { label: "Calligraphy Script", value: "script" },
          ],
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
  },
};

export default config;
