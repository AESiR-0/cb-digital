import Hero from "@/app/components/sections/Hero";
import { RoundedButton } from "./components/Button";
import About from "./components/sections/About";
import OurWork from "./components/sections/OurWork";
import Testimonials from "./components/sections/Testimonials";

export default function Home() {
  return (
    <div className="h-full main relative z-20 bg-primary   text-white  w-full ">
      <Hero
        title1={"Create . Edit."}
        title2={"& Deliver."}
        subheading={"We turn your dreams into reality."}
        body={
          "At CB Digital, we specialize in turning your vision into captivating Podcasts and Reels, with a fresh perspective and unmatched speed."
        }
      />
      <div className="flex px-20 -mt-5 items-end justify-end">
        <RoundedButton size="3xl" section="home" text="Say Hi!" />
      </div>
      <About />
      <OurWork />
      <Testimonials />
    </div>
  );
}
