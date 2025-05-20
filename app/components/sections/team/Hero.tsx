import Image from "next/image";
import Card from "../../Cards";
import { RoundedButton } from "../../Button";

export default function Hero() {
  return (
    <div className="w-full h-[80vh] py-5 font-clash bg-primary flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-5 overflow-hidden">
      <div className="block  relative max-md:hidden  z-20 pt-10 lg:pt-0">
        <Card />
      </div>
      <div className="w-full max-w-3xl flex flex-col gap-6 lg:gap-8 h-full justify-center text-white text-center lg:text-left px-5 lg:px-20">
        <h5 className="text-2xl font-semibold tracking-wide font-clash">
          About Us
        </h5>
        <div className="flex flex-col gap-4">
          <h1 className="md:text-4xl text-3xl lg:text-6xl font-semibold tracking-wide leading-snug">
            Team K hits media experience out of the park!
          </h1>
          <p className="text-base  lg:text-lg font-normal leading-relaxed lg:pr-10">
            Podcasts = Your content + How it hits the world. We're pros at
            finding those golden moments in your podcast and turning them into
            content that grabs eyeballs. Let us help you bring the best bits to
            the surface and make sure your audience can't get enough!
          </p>
        </div>
        <div className="flex  justify-center lg:justify-start mt-5">
          <RoundedButton size="3xl" section="home" text="Say Hi!" />
        </div>
      </div>
    </div>
  );
}
