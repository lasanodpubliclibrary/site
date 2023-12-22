import React from "react";
import MainNav from "./main-nav";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Header() {
  return (
    <header className="  h-fit z-40 sticky top-0 bg-background flex min-h-20 items-start justify-between py-2 md;py-5 px-2 md:px-6 ">
      <MainNav items={marketingConfig.mainNav} />
      <nav className="hidden md:flex items-start gap-6 px-4">
        <Link
          href="/sign-up"
          className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
        >
          Sign in
        </Link>
        <Link href="@" className={cn(buttonVariants(), "uppercase")}>
          donate
        </Link>
      </nav>
    </header>
  );
}
