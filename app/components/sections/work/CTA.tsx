import React from "react";
import Image from "next/image";
import Card2 from "@/public/static/card/Card2.svg";
import { RoundedButton } from "@/app/components/Button";

export default function CTA() {
  return (
    <div className="w-screen bg-secondary py-10 px-5 md:px-20 lg:px-40 flex items-center justify-between flex-col-reverse md:flex-row font-clash">
      {/* Left Column: Text Content */}
      <div className="flex flex-col items-center md:items-start px-5 md:px-10 md:w-1/2 h-full text-center md:text-left font-bold">
        <h1 className="text-4xl sm:text-5xl md:text-6xl py-4 leading-tight">
          Let's make something Awesome
        </h1>
        <div className="flex justify-center md:justify-start">
          <RoundedButton size="xl" section="CTA" text="Start a project!" />
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="md:w-1/2  hidden md:flex justify-center items-center pt-6 md:pt-0">
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
