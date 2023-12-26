import { Icon } from "@/components/Icons";

interface Link {
  name: string;
  href: string;
  Icon?: Icon;
  external?: boolean;
  disabled?: boolean;
}

interface Address {
  street?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
}

interface Contact {
  telephone? string;
}

interface FooterSection {
  Icon?: Icon;
  title?: string;
  links: Link[];
}


interface SiteConfig {
  type: string;
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  Icon?: Icon;
  links: Link[];
  address?: Address;
  contact?: Contact
}

type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

type MainNavItem = NavItem;

type MarketingConfig = {
  mainNav: MainNavItem[];
  footer?: {
    sections?: FooterSection[];
    copyYears?: string;
  };
};
