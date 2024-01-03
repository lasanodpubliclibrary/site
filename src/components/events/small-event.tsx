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
        width={150}
        height={150}
        className="rounded-md"
      />
      <div>
        <h2 className="text-lg md:text-xl font-semibold line-clamp-2 leading-snug tracking-tight">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h2>
        <div className="flex flex-col md:divide-x-2 gap-2 md:flex-row text-muted-foreground">
          <Moment date={date} format="DD-mm-yyyy" className="pr-2 " />
          <p className="md:px-2 pr-2">The Library hall</p>
        </div>
        <p className="line-clamp-2 leading-snug">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          ad laboriosam incidunt, a beatae corrupti odio earum iusto nisi sit
          corporis. Itaque enim reiciendis obcaecati rem accusantium at numquam
          veniam.
        </p>
      </div>
    </div>
  );
}
