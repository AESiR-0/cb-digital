import React from "react";
import Image from "next/image";
import Card from "../Cards";
import Title from "../Title";
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
    <div className="w-screen h-[80vh] gap-48  bg-primary  flex items-center overflow-hidden ">
      <div className=" w-[750px]  h-fit leading-none px-20 text-white ">
        <Title alignment="left" title={title} />
        <h5 className="text-[32px] normal-case my-3 tracking-wider font-clash font-semibold leading-none">
          {subheading}
        </h5>
        <p className="text-lg font-normal font-clash leading-tight normal-case pr-24">
          {body}
        </p>
      </div>
      <div className="relative z-20">
        <Card />
        <Image
          className="absolute opacity-100 -top-20 scale-105 z-20 -right-40"
          alt="absolute card"
          src={Card2}
        />
      </div>
    </div>
  );
}
