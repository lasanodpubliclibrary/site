import { siteConfig } from "@/config/site";
import Link from "next/link";
import { FooterSection, Link as LinkType } from "types";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { marketingConfig } from "../../config/marketing";

export default function Footer() {
  if (!marketingConfig?.footer) return null;

  return (
    <footer className="bg-background px-4 md:px-7 ">
      <div className="mx-auto w-full max-w-screen-xl">
        {marketingConfig.footer?.sections && (
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            {marketingConfig.footer.sections.map((section) => (
              <FooterSection key={section.title} {...section} />
            ))}
          </div>
        )}
        <div className="px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <span className="text-sm text-muted-foreground sm:text-center">
            © {marketingConfig?.footer?.copyYears} &nbsp; - &nbsp;
            <Link href={siteConfig.url}>{siteConfig.name}</Link>. All Rights
            Reserved.
          </span>
          <ul className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {siteConfig.links.map(({ name, href, Icon }) => (
              <li key={name}>
                <SocialLink href={href} name={name} Icon={Icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, name, Icon, external }: LinkType) {
  return (
    <Link
      href={href}
      className={buttonVariants({ variant: "outline", size: "icon" })}
      target={external ? "_blank" : undefined}
    >
      {Icon && <Icon className="h-4 w-4 md:h-6 md:w-6" />}
      <span className="sr-only">{name}</span>
    </Link>
  );
}

function FooterSection({ title, links }: FooterSection) {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h2>
      {links && (
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          {links.map(({ name, href, Icon }) => (
            <li key={href} className="mb-4">
              <Link href={href} className={" hover:underline"}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
