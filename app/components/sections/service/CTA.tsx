import React from "react";
import Image from "next/image";
import Card2 from "@/public/static/card/Card2.svg";
import { RoundedButton } from "@/app/components/Button";

export default function CTA() {
  return (
    <div className="w-screen bg-secondary max-md:border-t max-md:border-t-white py-10 px-5 md:px-20 lg:px-40 flex items-center justify-between flex-col-reverse md:flex-row font-clash">
      <div className="flex flex-col items-start max-md:items-center md:px-10 md:w-1/2 h-full text-center md:text-left font-bold">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold py-4 md:py-10 md:leading-normal ">
          Let's make something Awesome
        </h1>
        <div className="flex  justify-center md:justify-start">
          <RoundedButton size="xl" section="CTA" text="Start a project!" />
        </div>
      </div>
      <div className="md:w-1/2 md:flex hidden justify-center items-center pt-6 md:pt-0">
        <Image
          className="w-full max-w-[400px] md:max-w-[512px]"
          height={512}
          width={512}
          alt="Call to action card"
          src={Card2}
        />
      </div>
    </div>
  );
}
