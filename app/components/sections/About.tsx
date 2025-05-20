"use client";
import React from "react";
import Image from "next/image";
import CardBg from "@/public/static/card/aboutus.png"; // New image for a better fit
import Title from "../Title";

export default function About() {
  return (
    <div className="bg-primary py-6 sm:py-10">
      <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-20">
        <Title alignment="center" title2="" code="#ff9900" title1="About Us" />
      </div>

      {/* Flex container for the 3 sections */}

      <div className="flex flex-col gap-6 sm:gap-10 md:gap-20 items-center p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center w-full max-w-[90vw] md:max-w-[50vw] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-3 sm:py-4 md:py-8 font-clash text-white">
            What ?
          </h1>
          <div className="flex font-clash justify-center flex-wrap gap-2 sm:gap-4">
            {[
              "Pre-Production",
              "Production",
              "Post-Production",
              "App design",
              "Social Media Management",
              "Web Design",
              "Organic Growth",
              "Content Strategy"
            ].map((service, index) => (
              <div
                key={index}
                className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-[#ff9900] hover:text-white hover:cursor-pointer transition-all rounded-full border border-white text-[10px] sm:text-xs md:text-sm lg:text-lg font-medium"
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center w-full max-w-[90vw] md:max-w-[50vw] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-white">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-5">Why?</h3>
          <span className="list-none text-center text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6">
            We believe content isn't just about pleasing algorithms—it's about sparking emotions. Every piece we craft starts with one question: "Why will your audience care?
          </span>
        </div>

        <div className="flex flex-col items-center w-full max-w-[90vw] md:max-w-[50vw] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-white">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-5">How?</h3>
          <span className="list-none text-center text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6">
            We believe content isn't just about pleasing algorithms—it's about sparking emotions. Every piece we craft starts with one question: "Why will your audience care?
          </span>
        </div>
      </div>
    </div>
  );
}
