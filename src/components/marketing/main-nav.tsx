"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MainNavItem } from "types";
import { Close, Menu } from "../Icons";
import LogoWithName from "../shared/LogoWithName";
import { Button } from "../ui/button";
import { ModeToggle } from "../shared/mode-toggle";

const DynamicMobileNav = dynamic(
  () => import("@/components/marketing/mobile-nav"),
  {
    ssr: false,
  }
);

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export default function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const handleClose = React.useCallback(() => {
    setShowMobileMenu(false);
  }, [setShowMobileMenu]);

  return (
    <div className="w-full flex flex-wrap items-center justify-between  gap-6 ">
      <LogoWithName name={siteConfig.name} Logo={siteConfig.Icon} />
      {items?.length ? (
        <nav className="hidden gap-7 md:flex flex-1  items-center justify-center">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "w-fit flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <div className="flex gap-2 md:hidden">
        <ModeToggle />
        <Button
          variant="outline"
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          size="icon"
          aria-label="Toggle mobile menu"
        >
          {showMobileMenu ? <Close /> : <Menu />}
        </Button>
      </div>
      {showMobileMenu && items && (
        <DynamicMobileNav items={items} handleClose={handleClose}>
          {children}
        </DynamicMobileNav>
      )}
    </div>
  );
}
