import Hero from "@/app/components/sections/team/Hero";
import People from "@/app/components/sections/team/People";
import AgencySnapshot from "../components/sections/team/AgencySnapshot";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/service/CTA";

export default function page() {
  return (
    <>
      <Hero />
      <People />
      <AgencySnapshot />
      <Testimonials />
      <CTA />
    </>
  );
}
