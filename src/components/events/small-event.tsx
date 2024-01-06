import React from "react";
import Image from "next/image";
import { Event } from "@/types/payload-types";
//import Moment from "../shared/moment";

export default function SmallEvent({ title, description, date }: Event) {
  return (
    <div className="max-w-lg flex gap-x-4 bg-card shadow-md rounded-sm">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="rounded-md"
      />
      <div className="space-y-1">
        <h2 className="md:text-xl font-semibold line-clamp-2 leading-snug tracking-tight">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h2>
        <div className="flex text-sm flex flex-wrap divide-x-2 gap-x-2  md:flex-row text-muted-foreground">
          {/*<Moment date={date} format="DD-mm-yyyy" className="pr-2 " />*/}
          <p className="px-2 pr-2">The Library hall</p>
        </div>
        <p className="line-clamp-3 text-sm text-muted-foreground leading-snug">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          ad laboriosam incidunt, a beatae corrupti odio earum iusto nisi sit
          corporis. Itaque enim reiciendis obcaecati rem accusantium at numquam
          veniam.
        </p>
      </div>
    </div>
  );
}
