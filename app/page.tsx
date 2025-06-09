import React from 'react';
import Hero from "@/app/components/sections/Hero";
import { RoundedButton } from "./components/Button";
import About from "./components/sections/About";
import OurWork from "./components/sections/OurWork";
import Testimonials from "./components/sections/Testimonials";
import ClientMarquee from "./components/ClientMarquee";
import ContentStats from "./components/sections/team/ContentStats";
import ServicePlans from "./components/sections/ServicePlans";
import FAQ from "./components/sections/FAQ";

export default function Home() {
  return (
    <div className="h-full py-5 main relative z-20 bg- text-white w-full">
      <section id="hero" className="animate-slideUp">
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
      </section>

      <section id="clients" className="animate-slideUp">
        <ClientMarquee />
      </section>

      <section id="about" className="animate-slideUp">
        <About />
      </section>

      <section id="work" className="animate-slideUp">
        <OurWork />
      </section>

      {/* <section id="services" className="animate-slideUp">
        <ServicePlans />
      </section> */}

      <section id="team" className="animate-slideUp">
        <ContentStats />
      </section>

      <section id="testimonials" className="animate-slideUp">
        <Testimonials />
      </section>

    </div>
  );
}
