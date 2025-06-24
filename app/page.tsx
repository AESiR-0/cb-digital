import React from 'react';
import Hero from "@/app/components/sections/Hero";
import { RoundedButton } from "./components/Button";
import About from "./components/sections/About";
import OurWork from "./components/sections/OurWork";
import Testimonials from "./components/sections/Testimonials";
import ClientMarquee from "./components/ClientMarquee";
import ContentStats from "./components/sections/team/ContentStats";
import CreatorMarquee from './components/sections/team/CreatorMarquee';
import ServicePlans from "./components/sections/ServicePlans";
import FAQ from "./components/sections/FAQ";
import BrandShowcase from "./components/sections/BrandShowcase";

export default function Home() {
  return (
    <div className="h-full py-5 main relative z-20 bg- text-white w-full">
      <section id="hero" className="animate-slideUp">
        <Hero />
      </section>

      <section id="clients" className="animate-slideUp">
        <CreatorMarquee />
        <ClientMarquee />
      </section>

      <section id="about" className="animate-slideUp">
        <About />
      </section>

      <section id="work" className="animate-slideUp">
        <OurWork />
      </section>

      <section id="showcase" className="animate-slideUp">
        <BrandShowcase />
      </section>

      {/* <section id="team" className="animate-slideUp">
        <ContentStats />
      </section> */}

      <section id="testimonials" className="animate-slideUp">
        <Testimonials />
      </section>
    </div>
  );
}
