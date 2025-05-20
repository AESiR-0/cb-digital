import Image from "next/image";
import pratik from "@/public/static/team/pratik.png";
import kk from "@/public/static/team/kk.png";

export default function Team() {
  return (
    <div className="h-full bg-secondary w-full flex flex-col px-5 md:px-20 lg:px-40 xl:px-80 py-10 items-center">
      <h1 className="text-center lg:text-right font-thin text-3xl md:text-5xl leading-snug">
        Meet the people behind <br />
        <span className="font-bold font-tan">Team K</span>
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-40 mt-10 w-full items-center lg:items-start">
        {/* Pratik Garg's Section */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-semibold">Pratik Garg</h1>
          <Image
            width={350}
            height={350}
            src={pratik}
            alt="Team K Co-founder Pratik Garg"
            className="rounded-full mt-5"
          />
          <h3 className="font-bold text-xl md:text-2xl pt-5">Co-Founder</h3>
          <p className="text-base md:text-lg font-thin mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        {/* KrishnKant Nigam's Section */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-40">
          <h1 className="text-2xl md:text-4xl font-semibold">KrishnKant Nigam</h1>
          <Image
            width={350}
            height={350}
            src={kk}
            alt="Team K Co-founder KrishnKant Nigam"
            className="rounded-full mt-5"
          />
          <h3 className="font-bold text-xl md:text-2xl pt-5">Co-Founder</h3>
          <p className="text-base md:text-lg font-thin mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </div>
  );
}
