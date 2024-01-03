"use client";

import { buttonVariants } from "@/components/ui/button";
import { getImageURL } from "@/lib/utils";
import { trpc } from "@/trpc/client";
import Image from "next/image";
import Link from "next/link";

export default function HeroEvent() {
  const { data, isLoading, isError } = trpc.event.getTopEvent.useQuery({
    limit: 1,
  });

  const event = data?.events[0];

  if (isError) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <Skeleton />;
  }

  if (!event) {
    return null;
  }

  return (
    <div className="relative flex flex-col md:flex-row gap-y-7 md:gap-0  md:min-h-80 rounded-md overflow-hidden">
      <div className="relative h-72 md:flex-1 bg-background-muted  rounded-t-md">
        {typeof event.image !== "string" && (
          <Image
            src={`https://laaslib.s3.eu-north-1.amazonaws.com/${event.image.filename}`}
            alt={event.title}
            fill
            className="rounded-md"
          />
        )}
      </div>
      <div className="flex-1 rounded-b-md md:pl-9 flex flex-col gap-3.5 md:gap-7">
        <div>
          <p className="uppercase text-lg md:text-xl font-medium tracking-tight">
            {event.audience}
          </p>
          <h2 className="text-xl md:text-3xl font-bold line-clamp-3">
            {event.title}
          </h2>
        </div>
        <div>
          <p className="line-clamp-5">{event.description}</p>
        </div>

        <div>
          <Link href={`/event/`} className={buttonVariants()}>
            Discover more &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="relative flex flex-col md:flex-row gap-y-7 md:gap-0 h-72  rounded-md ">
      <div className="flex-1 relative h-full bg-background-muted rounded-t-md animate-pulse" />
      <div className="flex-1 rounded-b-md md:pl-9 flex flex-col gap-4 md:gap-7">
        <div>
          <div className="h-4 w-11/12 bg-neutral-400 animate-pulse" />
          <div className="h-8 my-1 w-2/4 bg-neutral-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
