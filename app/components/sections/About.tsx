"use client";
import React from "react";
import Image from "next/image";
import CardBg from "@/public/static/card/aboutus.png";
import Title from "../Title";

export default function About() {
  return (
    <div className="bg-primary ">
      <div className="container  ">
        <Title alignment="center" title={"About Us"} />
      </div>
      <div className="flex w-full  items-center justify-between">
        <div className=" w-full h-[75vh]  justify-center items-center relative flex flex-col">
          <Image
            height={500}
            width={400}
            className="absolute"
            src={CardBg}
            alt="Card Image"
          />
          <div className="h-full  z-20">
            <h1 className="text-center font-semibold font-clash text-3xl pt-10">
              What are we doing?
            </h1>
          </div>
        </div>
        <div className=" w-full  h-[75vh]  justify-center items-center relative  flex flex-col">
          <Image
            height={500}
            width={400}
            className="absolute "
            src={CardBg}
            alt="Card Image"
          />

          <div className="h-full flex flex-col justify-between z-20">
            <h1 className="font-clash text-center font-semibold text-3xl pt-10">
              How are we doing it ?
            </h1>
            <p className="text-xl px-16  pb-20 font-clash">
              We focus on what makes your audience click, share, and return. Our
              content is designed to resonate and engage on a deeper level.
            </p>
          </div>
        </div>

        <div className=" w-full  h-[75vh]  justify-center items-center relative  flex flex-col">
          <Image
            height={500}
            width={400}
            className="absolute "
            src={CardBg}
            alt="Card Image"
          />

          <div className="h-full flex flex-col justify-between z-20">
            <h1 className="font-clash text-center  font-semibold text-3xl pt-10">
              Why are we doing this?
            </h1>
            <p className="text-xl px-16  pb-20 font-clash">
              We believe content isn't driven by algorithms—it's driven by
              emotions. Every piece we create starts with a clear “why.”
            </p>
          </div>
        </div>

        <div className="h-32 w-20 flex flex-col"></div>
        <div className="h-32 w-20 flex flex-col"></div>
      </div>
    </div>
  );
}
