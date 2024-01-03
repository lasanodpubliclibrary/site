import HeroEvent from "@/components/events/hero-event";
import SmallEvents from "@/components/events/small-events";
import Heading from "@/components/shared/page-heading";
import { siteConfig } from "@/config/site";

const heading = {
  heading: "Welcome to the Las Anod Public Library",
  text: "Empowering Minds, Enriching Lives, and Building a Thriving Literary Haven in Las Anod",
};
export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Library",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.telephone,
      contactType: "customer service",
    },
  };

  return (
    <section className=" min-h-full h-fit space-y-7 md:space-y-9 pb-7">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Heading {...heading} />
      <HeroEvent />

      <SmallEvents />
    </section>
  );
}
