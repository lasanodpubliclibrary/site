"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

import { Drawer } from "vaul";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MainNavItem } from "types";
import { Close, Heart, Menu } from "../Icons";
import LogoWithName from "../shared/LogoWithName";
import { ModeToggle } from "../shared/mode-toggle";
import { Button, buttonVariants } from "../ui/button";

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
    <div className="w-full flex flex-wrap items-center justify-between  gap-2 ">
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
                  ? "text-[#3bc4f1]"
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
        <Drawer.Root shouldScaleBackground>
          <Drawer.Trigger asChild>
            <Button variant="outline" size="icon" aria-label="donate">
              <Heart className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-background" />
            <Drawer.Content className="bg-card shadow-sm border  flex flex-col rounded-t-[10px] h-full mt-24 max-h-[90%] fixed bottom-0 left-0 right-0 px-7">
              <div className="px-4 relative rounded-t-[10px] flex-1 overflow-auto scrollbar-none">
                <div className="sticky py-4 top-0 flex bg-card">
                  <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" />
                </div>
                <div className="max-w-md mx-auto flex-1 flex flex-col gap-5">
                  <div className="w-full flex flex-col gap-4 items-center">
                    <div
                      aria-hidden
                      className="p-5 flex items-center justify-center bg-primary/10  rounded-full"
                    >
                      <Heart className="h-8 w-8" />
                    </div>
                    <Drawer.Title className="text-2xl font-heading  tracking-tight">
                      Support Your Library
                    </Drawer.Title>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm">
                      As a valued supporter of the {siteConfig.name}, your
                      donation plays a crucial role in enhancing our services
                      and enriching the community. Your generosity enables us to
                      acquire new books, improve facilities, and host engaging
                      programs for all.
                    </p>
                    <p className="text-sm">
                      Every contribution, no matter the size, contributes to the
                      growth and vitality of our library. Join us in shaping a
                      brighter future for knowledge and community enrichment.
                    </p>
                    <p className="text-sm">
                      Click &apos;<span className="italic">Continue</span>
                      &apos; to make a difference today
                    </p>
                  </div>
                  <Link
                    href="#"
                    className={cn(buttonVariants(), "w-full uppercase mt-3")}
                  >
                    Continue to Donate
                  </Link>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
        <Button
          variant="outline"
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          size="icon"
          aria-label="Toggle mobile menu"
        >
          {showMobileMenu ? (
            <Close className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          )}
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
