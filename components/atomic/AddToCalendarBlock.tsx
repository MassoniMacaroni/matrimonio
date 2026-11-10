"use client";

import React from "react";

export type AddToCalendarBlockProps = {
  eventName?: string;
  eventDate?: string;
  eventLocation?: string;
  eventDetails?: string;
};

export const AddToCalendarBlock: React.FC<AddToCalendarBlockProps> = ({
  eventName = "Jules & Jon Wedding",
  eventDate = "20270918",
  eventLocation = "The Rocks, Sydney NSW, Australia",
  eventDetails = "Save the date for the wedding celebration of Jules & Jon! Formal invitation to follow.",
}) => {
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
    <div className="flex flex-wrap items-center justify-center gap-3 my-3">
      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-wedding-pill text-xs sm:text-sm px-5 py-2.5 inline-flex items-center justify-center shadow-xs hover:shadow-md cursor-pointer"
      >
        <svg
          className="w-4 h-4 mr-1.5 fill-current shrink-0"
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
        className="inline-flex items-center justify-center gap-2 border border-[#b3392d] text-[#b3392d] bg-transparent hover:bg-[#b3392d]/10 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-xs cursor-pointer"
      >
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
        Apple / iCal (.ics)
      </a>
    </div>
  );
};
