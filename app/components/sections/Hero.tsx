import React from "react";
import Image from "next/image";
import Card from "../Cards";
import Title from "../Title";
import Card2 from "@/public/static/card/Card2.svg";

export default function Hero({
  title1,
  title2,
  subheading,
  body,
}: {
  title1: string;
  title2: string;
  subheading: string;
  body: string;
}) {
  return (
    <div className="w-full min-h-[75vh] max-md:min-h-[35vh] py-6 sm:py-10 gap-6 sm:gap-10 md:gap-40 text-center bg-primary justify-center flex items-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="w-full max-w-[1000px] h-fit leading-none text-white">
        <Title code="#FF0000" alignment="center" title1={title1} title2={title2} />
        <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] animate-slide-up-fade-in normal-case my-2 sm:my-3 tracking-wider font-clash font-semibold leading-none">
          {subheading}
        </h5>
        <p className="text-sm sm:text-base md:text-lg animate-slide-up-fade-in font-normal font-clash leading-tight normal-case px-2 sm:px-4 md:px-24">
          {body}
        </p>
      </div>
    </div>
  );
}
