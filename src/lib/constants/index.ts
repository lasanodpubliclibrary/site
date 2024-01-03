export type AudienceType =
  | "Children"
  | "Teens"
  | "Adults"
  | "Seniors"
  | "All Ages"
  | "Specific Group";

export type EventType =
  | "Workshop"
  | "Seminar"
  | "Book Club"
  | "Reading Session"
  | "Author Talk"
  | "Other";

export const EVENT_AUDIENCE = [
  {
    label: "Children",
    value: "Children",
  },
  {
    label: "Teens",
    value: "Teens",
  },
  {
    label: "Adults",
    value: "Adults",
  },
  {
    label: "Seniors",
    value: "Seniors",
  },
  {
    label: "All Ages",
    value: "All Ages",
  },
  {
    label: "Specific Group",
    value: "Specific Group",
  },
];

export const EVENT_TYPE = [
  {
    label: "Workshop",
    value: "Workshop",
  },
  {
    label: "Seminar",
    value: "Seminar",
  },
  {
    label: "Book Club",
    value: "Book Club",
  },
  {
    label: "Reading Session",
    value: "Reading Session",
  },
  {
    label: "Author Talk",
    value: "Author Talk",
  },
  {
    label: "Other",
    value: "Other",
  },
];
