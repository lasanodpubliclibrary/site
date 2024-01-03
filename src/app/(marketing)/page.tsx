import HeroEvent from "@/components/events/hero-event";
import SmallEvents from "@/components/events/small-events";
import Heading from "@/components/shared/page-heading";

const heading = {
  heading: "Welcome to the Las Anod Public Library",
  text: "Empowering Minds, Enriching Lives, and Building a Thriving Literary Haven in Las Anod",
};
export default function HomePage() {
  return (
    <section className=" min-h-full h-fit space-y-7 md:space-y-9 pb-7">
      <Heading {...heading} />
      <HeroEvent />

      <SmallEvents />
    </section>
  );
}
