import Hero from "@/app/components/sections/team/Hero";
import People from "@/app/components/sections/team/People";
import AgencySnapshot from "../components/sections/team/AgencySnapshot";
import CTA from "../components/sections/service/CTA";

export default function page() {
  return (
    <>
      <Hero />
      <People />
      <AgencySnapshot />
      <CTA />
    </>
  );
}
