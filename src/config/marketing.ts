import { MarketingConfig } from "@/types";
import { siteConfig } from "./site";

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Search",
      href: "/search",
      disabled: true,
    },
    {
      title: "Events",
      href: "/events",
      disabled: true,
    },
    {
      title: "Books",
      href: "/books",
      disabled: true,
    },
    {
      title: "Catalog",
      href: "/catalog",
      disabled: true,
    },
    {
      title: "Writers",
      href: "/writers",
      disabled: true,
    },
    {
      title: "Blog",
      href: "/blog",
      disabled: true,
    },
    {
      title: "About Us",
      href: "/about-us",
      disabled: true,
    },
    {
      title: "Contact Us",
      href: "/contact-us",
      disabled: true,
    },
  ],
  footer: {
    sections: [
      {
        Icon: siteConfig.Icon,
        links: [
          {
            name: "About Us",
            href: "/about-us",
          },
          {
            name: "Donate",
            href: "/donate",
          },
          {
            name: "Events",
            href: "/events",
          },
          {
            name: "Books",
            href: "/books",
          },
          {
            name: "Catalog",
            href: "/catalog",
          },
          {
            name: "Writers",
            href: "/writers",
          },
          {
            name: "Blog",
            href: "/blog",
          },
        ],
      },
      {
        title: "Legal",
        links: [
          {
            name: "Privacy Policy",
            href: "/privacy-policy",
          },
          {
            name: "Terms of Use",
            href: "/terms-of-use",
          },
        ],
      },
      {
        title: "Help & Support",
        links: [
          {
            name: "FAQ",
            href: "/faq",
          },
          {
            name: "Contact Us",
            href: "/contact-us",
          },
        ],
      },
    ],
    copyYears: "2023",
  },
};
