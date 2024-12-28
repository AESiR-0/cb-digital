import React from 'react';
import Hero from "@/app/components/sections/Hero";
import { RoundedButton } from "./components/Button";
import About from "./components/sections/About";
import OurWork from "./components/sections/OurWork";
import Testimonials from "./components/sections/Testimonials";
import ClientMarquee from "./components/ClientMarquee";
import ContentApproach from "./components/sections/team/ContentApproach";
import ServicePlans from "./components/sections/ServicePlans";
import FAQ from "./components/sections/FAQ";

export default function Home() {
  return (
    <div className="h-full py-5 main relative z-20 bg- text-white w-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <Hero
        title1={"Create . Edit."}
        title2={"& Deliver."}
        subheading={"Making your 'maybes' into reality."}
        body={
          "Got ideas? We'll turn them into podcasts, videos, and reels so good, your audience won't know what hit them. Fresh, fast, and a little cheeky, just like us."
        }
      />

      <div className="flex px-5 md:px-20 mb-20 -mt-5 items-end justify-end">
        <RoundedButton size="3xl" section="home" text="Say Hi!" />
      </div>
      <div className="animate-slideUp">
        <ClientMarquee />
      </div>
      <div className="animate-slideUp">
        <About />
      </div>
      <div className="animate-slideUp">
        <OurWork />
      </div>
      <div className="animate-slideUp">
        <ContentApproach />
      </div>
      <div className="animate-slideUp">
        <ServicePlans />
      </div>
      <div className="animate-slideUp">
        <Testimonials />
      </div>
      <div className="animate-slideUp">
        <FAQ />
      </div>
    </div>
  );
}
