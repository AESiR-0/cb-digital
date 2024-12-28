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

      <div className={`flex flex-col gap-20 items-center p-8 rounded-lg shadow-lg`}>

        <div className={`flex flex-col items-center w-full max-w-[90vw] md:max-w-[50vw] p-8 rounded-lg shadow-lg border border-white`}>
          <h1 className="text-5xl  sm:text-4xl md:text-5xl py-8 font-clash text-white">
            What ?
          </h1>
          <div className="flex font-clash justify-center flex-wrap gap-4">
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
                className="px-4 py-2 hover:bg-[#ff9900] hover:text-white hover:cursor-pointer transition-all rounded-full border border-white text-sm md:text-lg font-medium"
              >
                {service}
              </div>
            ))}
          </div>

        </div>


        <div className={`flex flex-col items-center w-full max-w-[90vw] md:max-w-[50vw] p-8 rounded-lg shadow-lg border border-white`}>
          <h3 className="text-5xl  mb-5">Why?</h3>
          <span className="list-none text-center text-2xl mb-6">
            We believe content isn't just about pleasing algorithms—it's about sparking emotions. Every piece we craft starts with one question: “Why will your audience care?
          </span>

        </div>


        <div className={`flex flex-col items-center w-full max-w-[90vw] md:max-w-[50vw] p-8 rounded-lg shadow-lg border border-white`}>
          <h3 className="text-5xl  mb-5">How?</h3>
          <span className="list-none text-center text-2xl mb-6">
            We believe content isn't just about pleasing algorithms—it's about sparking emotions. Every piece we craft starts with one question: “Why will your audience care?
          </span>

        </div>
      </div>
    </div>
  );
}
