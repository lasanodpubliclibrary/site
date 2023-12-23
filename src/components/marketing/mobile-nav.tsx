import { useLockBodyScroll } from "@uidotdev/usehooks";
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";
import { MainNavItem } from "types";
import { ModeToggle } from "../shared/mode-toggle";

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
  handleClose?: () => void;
}

const MobileNav = ({ items, handleClose, children }: MobileNavProps) => {
  useLockBodyScroll();
  return (
    <div
      onClick={handleClose}
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md  md:hidden bg-glassmorphism backdrop-blur-sm"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md animate-in slide-in-from-bottom-80">
        <div className=" flex gap-3  justify-between items-start ">
          <span className="font-semibold px-2">Menu</span>
          <ModeToggle />
        </div>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}

        <nav>
          <Link
            href="/sign-in"
            className={cn(
              "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
            )}
          >
            Sign in
          </Link>
        </nav>
      </div>
    </div>
  );
};

MobileNav.displayName = "MobileNav";

export default MobileNav;
