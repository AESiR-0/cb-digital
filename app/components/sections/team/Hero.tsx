import Image from "next/image";
import Card from "../../Cards";
import { RoundedButton } from "../../Button";
export default function Hero() {
  return (
    <div className="w-screen h-[80vh] gap-20 font-clash bg-primary items-center   justify-center flex overflow-hidden ">
      <div className="relative pt-10 z-20 ">
        <Card />
      </div>
      <div className=" w-[750px]  flex flex-col gap-8 h-full justify-center leading-none px-20 text-white ">
        <h5 className="text-[24px] normal-case font-semibold my-3 tracking-wider font-clash leading-none">
          About Us
        </h5>
        <div className="w-[35rem] flex flex-col gap-4">
          <h1 className=" text-6xl tracking-wide  text-left font-semibold">
            CB Digital hits media experience out of the park!{" "}
          </h1>
          <p className="text-lg font-normal pr-10 font-clash leading-wide normal-case ">
            Podcasts = Your content + How it hits the world. We're pros at
            finding those golden moments in your podcast and turning them into
            content that grabs eyeballs. Let us help you bring the best bits to
            the surface and make sure your audience can't get enough!{" "}
          </p>
        </div>
        <div className="px-24">
          <RoundedButton size="3xl" section="home" text="Say Hi!" />
        </div>
      </div>
    </div>
  );
}
