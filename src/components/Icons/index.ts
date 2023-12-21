import {
  X as Close,
  Menu,
  Facebook,
  Instagram,
  Mail,
  type LucideIcon,
  LucideProps,
} from "lucide-react";

import Logo from "./Logo";
import GitHub from "./GitHub";
import X from "./X";
import Discord from "./Discord";
import WhatsApp from "./WhatsApp";

export type CustomIcon = ({ ...props }: LucideProps) => JSX.Element;
export type Icon = LucideIcon | CustomIcon;

export {
  Logo,
  Close,
  Menu,
  GitHub,
  X,
  Discord,
  Facebook,
  Instagram,
  Mail,
  WhatsApp,
};
