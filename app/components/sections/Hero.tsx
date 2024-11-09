import React from "react";
import Image from "next/image";
import Card from "../Cards";
import Title from "../Title";
import Card2 from "@/public/static/card/Card2.svg";

export default function Hero({
  title,
  subheading,
  body,
}: {
  title: string;
  subheading: string;
  body: string;
}) {
  return (
    <div className="w-screen h-auto md:h-[85vh] py-10 gap-10 md:gap-40 bg-primary flex flex-col md:flex-row items-center overflow-hidden">
      <div className="w-full md:w-[750px] px-5 md:px-20 text-white">
        <Title alignment="left" title={title} />
        <h5 className="text-2xl md:text-[32px] my-3 tracking-wide font-clash font-semibold leading-none">
          {subheading}
        </h5>
        <p className="text-xl md:text-lg font-light font-clash leading-tight normal-case pr-4 md:pr-24">
          {body}
        </p>
      </div>
      <div className="relative block max-md:hidden z-20 mt-10 md:mt-0">
        <Card />
        <Image
          className="absolute opacity-100 top-0 md:-top-20 scale-90 md:scale-105 z-10 right-0 md:-right-32"
          alt="absolute card"
          src={Card2}
        />
      </div>
    </div>
  );
}
