import React from "react";
import MainNav from "./main-nav";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Header() {
  return (
    <header className="container sticky top-0 h-fit z-40 bg-background ">
      <div className="flex min-h-20 h-fit items-start justify-between py-3 md;py-6 ">
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
      </div>
    </header>
  );
}
