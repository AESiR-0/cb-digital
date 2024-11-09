import Image from "next/image";
import Card from "../../Cards";
import Title from "../../Title";
import Card2 from "@/public/static/card/Card2.svg";

export default function Services() {
  return (
    <>
      <div className="w-screen h-screen  gap-20 sm:gap-40 font-clash bg-primary flex flex-col md:flex-row items-center overflow-hidden">
        {/* Text section */}
        <div className="w-full sm:w-[750px] flex flex-col gap-8 -mt-24 h-full max-md:items-center max-md:text-center  justify-center  leading-none px-5 sm:px-20 text-white text-center md:text-left">
          <h5 className="text-[24px] normal-case font-semibold my-3 tracking-wider font-clash leading-none">
            Our Services
          </h5>
          <div className="w-full sm:w-[35rem] flex flex-col gap-4">
            <h1 className="uppercase text-4xl sm:text-5xl tracking-wide md:text-left font-semibold">
              We Make Your Podcast Pop!
            </h1>
            <p className="text-lg sm:text-xl font-normal md:pr-10 font-clash leading-relaxed normal-case">
              Podcasts = Your content + How it hits the world. We're pros at
              finding those golden moments in your podcast and turning them into
              content that grabs eyeballs. Let us help you bring the best bits
              to the surface and make sure your audience can't get enough!
            </p>
          </div>
        </div>

        {/* Image and Card */}
        <div className=" md:relative max-md:hidden right-0 sm:right-16 z-20 mt-10 sm:mt-0">
          <Card />
          <Image
            className="absolute opacity-100 -top-32 scale-105 z-20 -right-40"
            alt="absolute card"
            src={Card2}
            height={500} // Adjust the height as needed
            width={500} // Adjust the width as needed
          />
        </div>
      </div>
    </>
  );
}
