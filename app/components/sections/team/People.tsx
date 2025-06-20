import Image from "next/image";
import kk from "@/public/static/team/kk.png";

export default function Team() {
  return (
    <div className="h-full bg-secondary w-full flex flex-col px-5 md:px-20 lg:px-40 xl:px-80 py-10 items-center">
      <h1 className="text-center font-thin text-3xl md:text-5xl leading-snug">
        Meet the person behind <br />
        <span className="font-bold font-tan">Team K</span>
      </h1>
      <div className="flex flex-col items-center mt-10 w-full">
        {/* KrishnKant Nigam's Section */}
        <div className="flex flex-col items-center w-full text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">KrishnKant Nigam</h1>
          <Image
            width={350}
            height={350}
            src={kk}
            alt="Team K Founder KrishnKant Nigam"
            className="rounded-full mt-5"
          />
          <h3 className="font-bold text-xl md:text-2xl pt-5">Founder & CEO</h3>
          <p className="text-base md:text-lg font-thin mt-2 max-w-2xl">
            With over 5 years of experience in content creation and digital marketing, 
            KrishnKant has built Team K into a powerhouse of creative excellence. 
            His vision is to transform how brands connect with their audiences through 
            compelling video content and strategic storytelling.
          </p>
        </div>
      </div>
    </div>
  );
}
