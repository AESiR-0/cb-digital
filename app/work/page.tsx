import React from "react";
import Hero from "../components/sections/work/Hero";
import CTA from "../components/sections/work/CTA";
import Work from "../components/sections/work/Work";

export default function page() {
  return (
    <div className="h-full main relative z-20 bg-primary   text-white  w-full ">
      <Hero />
      <Work />
      <CTA />
    </div>
  );
}
