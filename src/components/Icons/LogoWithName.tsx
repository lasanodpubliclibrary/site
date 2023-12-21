import type { Icon } from "@/components/Icons/";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoWithNameProps {
  Logo?: Icon;
  name?: string;
  href?: string;
  showName?: boolean;
  showLogo?: boolean;
  classes?: {
    root: string;
    logo?: string;
    name?: string;
  };
}

export default function LogoWithName({
  Logo,
  name,
  href = "/",
  showName = true,
  showLogo = true,
  classes,
}: LogoWithNameProps) {
  return (
    <Link
      href={href ?? "/"}
      className={cn(
        "w-fit md:custom-h-full flex items-center gap-3 ",
        classes?.root
      )}
    >
      {showLogo && (
        <div className={cn("flex items-center", classes?.logo)}>
          {Logo && <Logo />}
        </div>
      )}
      {showName && <h3 className={cn("font-bold", classes?.name)}>{name}</h3>}
    </Link>
  );
}
