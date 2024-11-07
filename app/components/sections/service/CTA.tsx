import React from "react";
import Image from "next/image";
import Card2 from "@/public/static/card/Card2.svg";
import { RoundedButton } from "@/app/components/Button";

export default function CTA() {
  return (
    <div className="w-screen bg-secondary py-10 px-40   h-full flex-row-reverse  flex items-center  font-clash  ">
      <div className="">
        <Image
          className=""
          height={512}
          width={512}
          alt="absolute card"
          src={Card2}
        />
      </div>
      <div className="flex flex-col items-start px-10 h-full font-bold ">
        <h1 className="text-6xl py-8 leading-tight  w-1/2">
          Let's make something Awesome
        </h1>
        <div className="flex pl-6 justify-start   ">
          <RoundedButton size="xl" section="CTA" text="Start a project!" />
        </div>
      </div>
    </div>
  );
}
