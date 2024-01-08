import React from "react";
import Image from "next/image";
import { Event } from "@/types/payload-types";
import Moment from "../shared/moment";

export default function SmallEvent({ title, description, date }: Event) {
  return (
    <div className="max-w-lg flex gap-x-4 bg-card shadow-md rounded-sm">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={100}
        className="rounded-md"
      />
      <div className="space-y-1">
        <p className="font-medium text-[#00b0ff] tracking-tight leading-none">For all ages</p>
        <h3 className="md:text-xl font-semibold line-clamp-2 leading-none tracking-tight">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h3>
        <div className="flex text-sm  flex-wrap divide-x-2 gap-x-2  md:flex-row text-muted-foreground">
          <Moment date={date} format="DD-mm-yyyy" className="pr-2"/>
          <p className="pl-2">3:30 AM</p>
        </div>
        <p className="line-clamp-3 text-sm text-muted-foreground leading-snug">
          Library building
        </p>
      </div>
    </div>
  );
}
