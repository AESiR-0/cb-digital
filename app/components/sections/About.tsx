"use client";
import React from "react";
import Image from "next/image";
import CardBg from "@/public/static/card/aboutus.png"; // New image for a better fit
import Title from "../Title";

export default function About() {
  return (
    <div className="bg-primary py-10">
      <div className="w-screen flex justify-center px-5 sm:px-10 md:px-16 lg:px-32">
        <Title alignment="center" title2="" code="#ff9900" title1="About Us" />
      </div>

      {/* Flex container for the 3 sections */}
      <div className="flex flex-col md:flex-row w-full h-full py-5 gap-10 md:gap-5 px-5 sm:px-10 md:px-16 lg:px-32">
        {/* Section 1: What are we doing? */}
        <div className="w-full md:w-1/3 relative h-[600px] flex flex-col justify-between items-center">
          <Image
            src={CardBg}
            alt="Card Image"
            height={600}
            width={500}
            className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
          />
          <div className="z-20 max-w-[400px] text-center md:pt-20 px-5">
            <h1 className="text-3xl sm:text-4xl md:text-4xl py-8 font-clash text-white">
              What are we doing?
            </h1>
            <div className="flex font-clash flex-wrap gap-4">
              {[
                "Content Production 3D",
                "Social Media Management",
                "Branding & Design",
                "Web Design",
                "App Design",
                "Celebrity Management",
              ].map((service, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-white hover:text-secondary hover:cursor-pointer transition-all rounded-full border border-white text-sm md:text-lg font-medium"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: How are we doing it? */}
        <div className="w-full md:w-1/3 relative  h-[600px] flex flex-col justify-center md:py-20 items-center">
          <Image
            src={CardBg}
            alt="Card Image"
            height={600}
            width={500}
            className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
          />
          <div className="z-20 w-[400px] flex flex-col justify-between h-[600px] text-center px-3 md:text-left py-10 md:pb-20">
            <h1 className="text-3xl sm:text-4xl md:text-4xl max-md:text-center font-clash text-white">
              How are we doing it?
            </h1>
            <p className="text-2xl md:text-left pl-2 sm:text-xl md:text-2xl font-clash text-white">
              We focus on what makes your audience click, share, and return. Our
              content is designed to resonate and engage on a deeper level.
            </p>
          </div>
        </div>

        {/* Section 3: Why are we doing this? */}
        <div className="w-full  md:w-1/3 h-[600px] relative flex flex-col justify-center md:py-20 md:text-left items-center">
          <Image
            src={CardBg}
            alt="Card Image"
            height={600}
            width={500}
            className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
          />
          <div className="z-20 w-[400px] flex flex-col justify-between h-[600px] max-md:text-center px-5 py-10 md:pb-20">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-clash text-white">
              Why are we doing this?
            </h1>
            <p className="text-2xl md:text-left sm:text-xl md:text-2xl font-clash text-white">
              We believe content isn't driven by algorithms—it's driven by
              emotions. Every piece we create starts with a clear “why.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
