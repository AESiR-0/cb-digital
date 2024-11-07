import Image from "next/image";
import Card from "../../Cards";
import Title from "../../Title";
import Card2 from "@/public/static/card/Card2.svg";
export default function Services() {
  return <>
    <div className="w-screen h-[80vh] gap-40 font-clash     bg-primary  flex items-center overflow-hidden ">
      <div className=" w-[750px]   flex flex-col gap-8 -mt-24 h-fit leading-none px-20 text-white ">
        <h5 className="text-[24px] normal-case font-semibold my-3 tracking-wider font-clash leading-none">
          Our Services
        </h5>
        <div className="w-[35rem] flex flex-col gap-4">
          <h1 className="uppercase text-5xl tracking-wide  text-left font-semibold">We Make Your Podcast Pop!</h1>
                   <p className="text-lg font-normal pr-10 font-clash leading-wide normal-case ">

            Podcasts = Your content + How it hits the world.
            We're pros at finding those golden moments in your podcast and turning them into content that grabs eyeballs. Let us help you bring the best bits to the surface and make sure your audience can't get enough!        </p>
        </div>
      </div>
      <div className="relative right-16 z-20 ">
        <Card />
        <Image
          className="absolute opacity-100 -top-32 scale-105 z-20 -right-40"
          alt="absolute card"
          src={Card2}
        />
      </div>
    </div>
  </>;
}
