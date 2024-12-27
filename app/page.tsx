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
import useIntersectionObserver from './hooks/useIntersectionObserver';

export default function Home() {
  const { ref: ref1, isVisible: isVisible1 } = useIntersectionObserver();
  const { ref: ref2, isVisible: isVisible2 } = useIntersectionObserver();
  const { ref: ref3, isVisible: isVisible3 } = useIntersectionObserver();
  const { ref: ref4, isVisible: isVisible4 } = useIntersectionObserver();
  const { ref: ref5, isVisible: isVisible5 } = useIntersectionObserver();
  const { ref: ref6, isVisible: isVisible6 } = useIntersectionObserver();
  const { ref: ref7, isVisible: isVisible7 } = useIntersectionObserver();

  return (
    <div className="h-full py-5 main relative z-20 bg-primary text-white w-full">
      <Hero
        title1={"Create . Edit."}
        title2={"& Deliver."}
        subheading={"We turn your dreams into reality."}
        body={
          "At CB Digital, we specialize in turning your vision into captivating Podcasts and Reels, with a fresh perspective and unmatched speed."
        }
      />

      <div className="flex px-20 mb-20 -mt-5 items-end justify-end">
        <RoundedButton size="3xl" section="home" text="Say Hi!" />
      </div>
      <div ref={ref1} className={`${isVisible1 ? 'animate-slideUp' : ''}`}>
        <ClientMarquee />
      </div>
      <div ref={ref2} className={`${isVisible2 ? 'animate-slideUp' : ''}`}>
        <About />
      </div>
      <div ref={ref3} className={`${isVisible3 ? 'animate-slideUp' : ''}`}>
        <OurWork />
      </div>
      <div ref={ref4} className={`${isVisible4 ? 'animate-slideUp' : ''}`}>
        <ContentApproach />
      </div>
      <div ref={ref5} className={`${isVisible5 ? 'animate-slideUp' : ''}`}>
        <ServicePlans />
      </div>
      <div ref={ref6} className={`${isVisible6 ? 'animate-slideUp' : ''}`}>
        <Testimonials />
      </div>
      <div ref={ref7} className={`${isVisible7 ? 'animate-slideUp' : ''}`}>
        <FAQ />
      </div>
    </div>
  );
}
