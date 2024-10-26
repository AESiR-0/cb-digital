import React from "react";
import Image from "next/image";
import Card from "../Cards";
import Card2 from "@/public/static/card/Card2.svg";
import { RoundedButton } from "../Button";

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
    <div className="w-screen h-[80vh] gap-48  flex items-center overflow-hidden ">
      <div className=" w-[750px]  h-fit leading-none px-20 text-white font-clash text-[6.5rem] font-bold  uppercase">
        <h1> {title}</h1>
        <h5 className="text-[32px] normal-case my-3 tracking-wider font-clash font-semibold leading-none">
          {subheading}
        </h5>
        <p className="text-lg font-normal font-clash leading-tight normal-case pr-24">
          {body}
        </p>
      </div>
      <div className="relative">
        <Card />
        <Image
          className="absolute opacity-100 -top-20 scale-105 z-50 -right-40"
          alt="absolute card"
          src={Card2}
        />
      </div>
      
    </div>
  );
}
