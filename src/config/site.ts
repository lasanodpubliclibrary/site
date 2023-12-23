import {
  X,
  Mail,
  Facebook,
  GitHub,
  Instagram,
  WhatsApp,
  Discord,
  Logo,
} from "@/components/Icons";
import { SiteConfig } from "types";

/*
 if you change the name, shortname, url of the site, you must also change it in the following files:

    env variables: NEXTAUTH_URL, NEXT_PUBLIC_SITE_URL
*/

export const siteConfig: SiteConfig = {
  name: "Las Anod Public Library",
  shortName: "LAPL",
  description:
    "Las Anod Public Library is your gateway to books, blogs, community discussions, and a marketplace for new or used books. Explore and join us today!",
  url: "https://www.laascaanood.co",
  ogImage: "https://www.laaascaanood.co/opengraph.png",
  Icon: Logo,
  links: [
    {
      name: "Email",
      href: "#",
      Icon: Mail,
      external: true,
    },
    {
      name: "X",
      href: "#",
      Icon: X,
      external: true,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/laaascaanood",
      Icon: Facebook,
      external: true,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/laaascaanood",
      Icon: Instagram,
      external: true,
    },

    {
      name: "Discord",
      href: "https://discord.gg/laaascaanood",
      Icon: Discord,
      external: true,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/252634400000",
      Icon: WhatsApp,
      external: true,
    },
    {
      name: "GitHub",
      href: "#",
      Icon: GitHub,
      external: true,
    },
  ],
};
