import { Icon } from "@/components/Icons";

interface Link {
  name: string;
  href: string;
  Icon?: Icon;
  external?: boolean;
  disabled?: boolean;
}

interface FooterSection {
  Icon?: Icon;
  title?: string;
  links: Link[];
}

interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  Icon?: Icon;
  links: Link[];
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
