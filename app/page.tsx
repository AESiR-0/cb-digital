import {Navbar} from "@/app/components/Navbar";
import Hero from "@/app/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero title={'Create. Edit. Deliver'} subheading={'We turn your dreams into reality'} body={'At CB Digital, we specialize in turning your vision into captivating Podcasts and Reels, with a fresh perspective and unmatched speed.'}/>
    </>
  );
}
