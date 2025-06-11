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

const FloatingCalendly = () => {
  return (
    <a 
      href="https://calendly.com/freehukrishn/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#0069ff] hover:bg-[#0052cc] text-white rounded-full 
                 overflow-hidden group transition-all duration-300 ease-out
                 flex items-center gap-3 px-4
                 w-[50px] hover:w-[200px] h-[50px]
                 shadow-[0_0_20px_rgba(0,105,255,0.3)] hover:shadow-[0_0_25px_rgba(0,105,255,0.4)]"
    >
      <div className="flex-shrink-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 24 24" 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>
      <span className="flex-shrink-0 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pr-4 duration-300 font-medium">
        Launch or Scale?
      </span>
    </a>
  );
};

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

      <section id="team" className="animate-slideUp">
        <ContentStats />
      </section>

      <section id="testimonials" className="animate-slideUp">
        <Testimonials />
      </section>

      <FloatingCalendly />
    </div>
  );
}
