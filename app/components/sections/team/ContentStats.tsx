"use client";
import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function ContentStats() {
  return (
    <div className="w-full py-12 px-4 md:px-10 lg:px-20 bg-[#0a0a40] flex flex-col items-center">
      <div
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-6 gap-6 md:gap-8 lg:gap-12"
        style={{ minHeight: '520px' }}
      >
        {/* 2 Billion Followers */}
        <div className="rounded-[2.5rem] bg-[#d4ff8f] text-[#0a0a40] flex flex-col items-center justify-center px-6 py-8 md:px-10 md:py-12 row-span-3 md:row-span-6 col-span-1 shadow-xl">
          <span className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-extrabold leading-none">2</span>
          <span className="text-lg md:text-xl font-bold text-center mt-2 uppercase tracking-wide">BILLION+<br />FOLLOWERS</span>
        </div>
        {/* 25 Billion Monthly Views */}
        <div className="rounded-[2.5rem] bg-[#d4ff8f] text-[#0a0a40] flex flex-col items-center justify-center px-6 py-8 md:px-10 md:py-12 row-span-3 md:row-span-6 col-span-1 shadow-xl">
          <span className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-extrabold leading-none">25</span>
          <span className="text-lg md:text-xl font-bold text-center mt-2 uppercase tracking-wide">BILLION+<br />MONTHLY VIEWS</span>
        </div>
        {/* Social Circles and Languages Pill in nested grid */}
        <div className="flex flex-col justify-between row-span-3 md:row-span-6 col-span-1 h-full">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full mb-6 md:mb-10">
            {/* First row: Facebook and YouTube */}
            <div className="flex flex-col items-center justify-center rounded-full bg-[#6c3cff] text-white w-[120px] h-[120px] md:w-[150px] md:h-[150px] mx-auto shadow-lg">
              <FaFacebookF size={40} className="mb-1" />
              <span className="text-xl md:text-2xl font-extrabold leading-none">600M+</span>
              <span className="text-xs md:text-sm font-medium text-center mt-1">Facebook<br />followers</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-full bg-[#6c3cff] text-white w-[120px] h-[120px] md:w-[150px] md:h-[150px] mx-auto shadow-lg">
              <FaYoutube size={40} className="mb-1" />
              <span className="text-xl md:text-2xl font-extrabold leading-none">1.2B+</span>
              <span className="text-xs md:text-sm font-medium text-center mt-1">YouTube<br />subscribers</span>
            </div>
            {/* Second row: Instagram spanning both columns */}
            <div className="col-span-2 flex flex-col items-center justify-center rounded-full bg-[#6c3cff] text-white w-[120px] h-[120px] md:w-[150px] md:h-[150px] mx-auto shadow-lg mt-4">
              <FaInstagram size={40} className="mb-1" />
              <span className="text-xl md:text-2xl font-extrabold leading-none">70M+</span>
              <span className="text-xs md:text-sm font-medium text-center mt-1">Instagram<br />followers</span>
            </div>
          </div>
          {/* 21 Languages (bottom, same column, spanning both) */}
          <div className="rounded-[2.5rem] bg-[#ff7eb9] text-[#0a0a40] flex flex-row items-center justify-between px-8 py-8 md:px-12 md:py-10 w-full shadow-xl mt-2 md:mt-0 col-span-2">
            <span className="text-[2.5rem] md:text-[4rem] lg:text-[6rem] font-extrabold leading-none mr-4">21</span>
            <span className="text-lg md:text-xl font-bold text-right flex-1">Original content in<br className="hidden md:block" />languages</span>
          </div>
        </div>
      </div>
    </div>
  );
} 