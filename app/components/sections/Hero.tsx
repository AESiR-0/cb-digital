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
    <div className="w-screen h-[75vh] py-10 gap-40 text-center  bg-primary justify-center  flex items-center overflow-hidden ">
      <div className=" w-[1000px]  h-fit leading-none px-20 text-white ">
        <Title alignment="center" title1={title1} title2={title2} />
        <h5 className="text-[32px] animate-slide-up-fade-in normal-case my-3 tracking-wider font-clash font-semibold leading-none">
          {subheading}
        </h5>
        <p className="text-lg animate-slide-up-fade-in font-normal font-clash leading-tight normal-case pr-24">
          {body}
        </p>
      </div>

    </div>
  );
}
