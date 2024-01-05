"use client";
import React from "react";
import SmallEvent from "./small-event";
//import { Calendar } from "@/components/ui/calendar";
import { Event } from "@/types/payload-types";

const fakeEvent: Event = {
  id: "string",
  title: "string",
  description: "string",
  date: new Date().toISOString(),
  type: "Other",
  audience: "All Ages",
  image: "string",
  updatedAt: "j",
  createdAt: "string",
};
export default function SmallEvents() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="relative flex flex-col gap-5 md:gap-0 md:flex-row ">
      <div className="flex md:w-2/5 justify-center items-center md:items-start p-7">
        {/*<Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />*/}
      </div>

      <div className="md:w-3/5 flex flex-col gap-5 md:px-5">
        <SmallEvent {...fakeEvent} />
        <SmallEvent {...fakeEvent} />
        <SmallEvent {...fakeEvent} />
        <SmallEvent {...fakeEvent} />
        <SmallEvent {...fakeEvent} />
      </div>
    </div>
  );
}
