import { siteConfig } from "@/config/site";
import Link from "next/link";
import { FooterSection, Link as LinkType } from "types";
import { marketingConfig } from "../../config/marketing";
import { buttonVariants } from "../ui/button";

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
        <div className="px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span className="text-sm text-muted-foreground sm:text-center">
            © {marketingConfig?.footer?.copyYears} &nbsp; - &nbsp;
            <Link href="/">{siteConfig.name}</Link>. All Rights
            Reserved.
          </span>
          <ul className="flex justify-center flex-wrap mt-4  md:mt-0 gap-5 rtl:space-x-reverse">
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
      rel={external ? "noopener noreferrer" : undefined}
    >
      {Icon && <Icon className="h-4 w-4 md:h-6 md:w-6" />}
      <span className="sr-only">{name}</span>
    </Link>
  );
}

function FooterSection({ title, links, Icon }: FooterSection) {
  return (
    <div>
      {Icon && <Icon className="h-8 w-8 md:h-10 md:w-10 mb-5" />}
      {title && (
        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          {title}
        </h2>
      )}
      {links && (
        <ul className="font-medium">
          {links.map(({ name, href, Icon, disabled }) => (
            <li key={href+"- footer"} className="mb-2 flex gap-2">
              {Icon && <Icon />}
              {
                disabled && (<span className="text-muted-foreground/60 cursor-not-allowed">
                {name}
              </span>)
              }

              {
              !disabled && (
              <Link href={href} className="text-muted-foreground/90 hover:text-muted-foreground hover:underline">
                {name}
              </Link>)
              }

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
