import { MarketingConfig } from "types";
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
    },
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Catalog",
      href: "/catalog",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "About Us",
      href: "/about-us",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
  ],
  footer: {
    sections: [
      {
        title: siteConfig.shortName,
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
