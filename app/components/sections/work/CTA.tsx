import React from "react";
import Image from "next/image";
import Card2 from "@/public/static/card/Card2.svg";
import { RoundedButton } from "@/app/components/Button";


export default function CTA() {
  return (
    <div className="w-screen py-10 px-32  h-full  flex items-center  font-clash  ">
      <div className="">
        <Image
          className=""
          height={512}
          width={512}
          alt="absolute card"
          src={Card2}
        />
      </div>
      <div className="flex flex-col items-center px-10 h-full font-bold ">
        <h1 className="text-6xl py-8 leading-tight  w-1/2">
          {" "}
          Lets make something Awesome
        </h1>
        <div className="flex justify-start   ">
          <RoundedButton size="xl" section="CTA" text="Start a project!" />
        </div>
      </div>
    </div>
  );
}
