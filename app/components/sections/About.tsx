"use client";
import React from "react";
import Image from "next/image";
import CardBg from "@/public/static/card/aboutus.png"; // New image for a better fit
import Title from "../Title";

export default function About() {
  return (
    <div className="bg-primary py-10">
      <div className="container px-5 sm:px-10 md:px-16 lg:px-32">
        <Title alignment="center" title="About Us" />
      </div>

      {/* Flex container for the 3 sections */}
      <div className="flex flex-col md:flex-row w-full  h-full py-5 gap-10 md:gap-5 px-5 sm:px-10 md:px-16 lg:px-32">

        {/* Section 1: What are we doing? */}
        <div className="w-full md:w-1/3 relative h-[500px] flex flex-col justify-center items-center">
          <Image
            src={CardBg}
            alt="Card Image"
            height={400}
            width={400}
            className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
          />
          <div className="z-20 text-center pt-10 md:pt-20 px-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-clash text-white">What are we doing?</h1>
          </div>
        </div>

        {/* Section 2: How are we doing it? */}
        <div className="w-full md:w-1/3 relative h-[500px] flex flex-col justify-center items-center">
          <Image
            src={CardBg}
            alt="Card Image"
            height={400}
            width={500}
            className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
          />
          <div className="z-20 flex flex-col justify-between h-[500px] text-center px-5 py-10 md:pb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-clash text-white ">How are we doing it?</h1>
            <p className="text-2xl sm:text-xl md:text-2xl font-clash text-white">
              We focus on what makes your audience click, share, and return. Our content is designed to resonate and engage on a deeper level.
            </p>
          </div>
        </div>

        {/* Section 3: Why are we doing this? */}
        <div className="w-full md:w-1/3 h-[500px] relative flex flex-col justify-center items-center">
          <Image
            src={CardBg}
            alt="Card Image"
            height={400}
            width={400}
            className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
          />
          <div className="z-20 flex flex-col justify-between h-[500px] text-center px-5 py-10 md:pb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-clash text-white ">Why are we doing this?</h1>
            <p className="text-2xl sm:text-xl md:text-2xl font-clash text-white">              We believe content isn't driven by algorithms—it's driven by emotions. Every piece we create starts with a clear “why.”
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
