import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col h-[40vh] md:h-[60vh] md:flex-row justify-end items-center w-screen px-5 md:px-20 mt-10 ">
      {/* Title Section */}
      <div className="w-full md:w-1/2  text-center md:text-left">
        <h1 className="text-5xl md:flex md:flex-col max-md:-mt-20 sm:text-6xl md:text-[7rem] font-clash font-bold uppercase">
          Our <span>Work</span>
        </h1>
        <span className="md:hidden block h-[1px] mt-5 bg-gray-400 opacity-85 w-full px-20"></span>
      </div>

      {/* Description Section */}
      <div className="w-full md:w-1/2 px-5 md:px-10 md:text-3xl text-lg sm:text-3xl font-clash text-center md:text-left mt-6 md:mt-0">
        At CB Digital, we craft engaging podcasts and reels that resonate with
        your audience. From concept to final cut, every project is tailored to
        amplify your message and spark action.
      </div>
    </div>
  );
}
