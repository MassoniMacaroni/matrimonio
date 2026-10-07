"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { VintageSaveTheDateStamp, RibbonDivider } from "../decorations/Illustrations";

export type CalendarReminderBlockProps = {
  title?: string;
  subtitle?: string;
  eventName?: string;
  eventDate?: string; // YYYYMMDD
  eventLocation?: string;
  eventDetails?: string;
  showDivider?: boolean;
};

export const CalendarReminderBlock: React.FC<CalendarReminderBlockProps> = ({
  title = "mark your calendar",
  subtitle = "save the date so you won't miss our big day!",
  eventName = "Jules & Jon Wedding",
  eventDate = "20270918",
  eventLocation = "The Rocks, Sydney NSW, Australia",
  eventDetails = "Save the date for the wedding celebration of Jules & Jon! Formal invitation to follow.",
  showDivider = false,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Google Calendar URL generator
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventName
  )}&dates=${eventDate}/${eventDate}&details=${encodeURIComponent(
    eventDetails
  )}&location=${encodeURIComponent(eventLocation)}`;

  // iCal / ICS data URI for 1-click download on Apple / Outlook
  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Jules & Jon//Save the Date//EN",
    "BEGIN:VEVENT",
    `SUMMARY:${eventName}`,
    `DESCRIPTION:${eventDetails}`,
    `LOCATION:${eventLocation}`,
    `DTSTART;VALUE=DATE:${eventDate}`,
    `DTEND;VALUE=DATE:${eventDate}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const icsDownloadUrl = `data:text/calendar;charset=utf8,${encodeURIComponent(icsData)}`;

  return (
    <section className="py-10 px-4 text-center max-w-xl mx-auto">
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center"
      >
        {/* Vintage Stamp Illustration */}
        <div className="mb-4">
          <VintageSaveTheDateStamp />
        </div>

        {/* Title in chunky lowercase Fraunces font */}
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#b3392d] lowercase tracking-normal mb-2">
          {title}
        </h2>

        {subtitle && (
          <p className="text-xs sm:text-sm font-medium tracking-wide text-[#b3392d]/80 max-w-sm mb-6">
            {subtitle}
          </p>
        )}

        {/* Calendar Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wedding-pill text-xs sm:text-sm px-5 py-2.5"
          >
            <svg
              className="w-4 h-4 mr-1.5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
            </svg>
            Add to Google Calendar
          </a>

          <a
            href={icsDownloadUrl}
            download="jules-and-jon-save-the-date.ics"
            className="inline-flex items-center justify-center gap-2 border border-[#b3392d] text-[#b3392d] bg-transparent hover:bg-[#b3392d]/10 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all"
          >
            <svg
              className="w-4 h-4 mr-1 stroke-current fill-none"
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
            Apple / iCal (.ics)
          </a>
        </div>
      </motion.div>

      {showDivider && (
        <div className="pt-8">
          <RibbonDivider />
        </div>
      )}
    </section>
  );
};
