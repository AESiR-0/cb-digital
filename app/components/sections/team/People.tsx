import Image from "next/image";
import pratik from "@/public/static/team/pratik.png";
import kk from "@/public/static/team/kk.png";

export default function Team() {
  return (
    <div className="h-full bg-secondary w-screen flex flex-col px-80 py-10 justify-center">
      <h1 className="text-right font-thin text-5xl">
        Meet the people behind <br />
        <span className="font-bold font-wig">CB Digital</span>
      </h1>
      <div className="flex gap-40 ">
        <div className="w-1/2">
          <h1 className="text-4xl">Pratik Garg</h1>
          <Image
            width={350}
            height={350}
            src={pratik}
            alt="CB DIGITAL Co founder Image"
          />
          <h3 className="font-bold text-2xl pt-5">Co Founder</h3>
          <p className="text-lg font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="w-1/2 mt-40">
          <h1 className="text-4xl">KrishnKant Nigam</h1>
          <Image
            width={350}
            height={350}
            src={kk}
            alt="CB DIGITAL Co founder Image"
          />
          <h3 className="font-bold text-2xl pt-5">Co Founder</h3>
          <p className="text-lg font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
      </div>
    </div>
  );
}
