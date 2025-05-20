"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Instagram from "@/public/static/socials/Instagram.png";
import Facebook from "@/public/static/socials/Facebook.png";
import Linkedin from "@/public/static/socials/LinkedIn.png";

const navItems = [
  { title: "home", id: "hero" },
  { title: "about", id: "about" },
  { title: "work", id: "work" },
  { title: "services", id: "services" },
  { title: "testimonials", id: "testimonials" },
];

interface nav {
  title: string;
  id: string;
}

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative z-10 py-6 sm:py-8 md:py-10 bg-[#101010] w-full">
      <footer className="font-clash text-white w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center justify-center w-full max-w-[90vw] gap-3 sm:gap-4 md:gap-5">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-tan leading-none">Team K</h1>
          <span className="w-1/2 h-[1px] bg-white"></span>

          {/* Social Icons and Navigation Links */}
          <div className="flex px-4 sm:px-6 md:px-10 flex-col md:flex-row justify-between w-full items-center md:items-start gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-10">
            {/* Social Media Icons */}
            <div className="flex gap-4 sm:gap-5 justify-center items-center">
              <Link href={"https://instagram.com"} target="_blank" className="group">
                <Image
                  src={Instagram}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:opacity-95 transition-all duration-200 ease-in-out group-hover:scale-95"
                  alt="social icon instagram"
                  height={40}
                  width={40}
                />
              </Link>
              <Link href={"https://linkedin.com"} target="_blank" className="group">
                <Image
                  src={Linkedin}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:opacity-95 transition-all duration-200 ease-in-out group-hover:scale-95"
                  alt="social icon linkedin"
                  height={40}
                  width={40}
                />
              </Link>
              <Link href={"https://facebook.com"} target="_blank" className="group">
                <Image
                  src={Facebook}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:opacity-95 transition-all duration-200 ease-in-out group-hover:scale-95"
                  alt="social icon facebook"
                  height={40}
                  width={40}
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-3 sm:gap-4 md:gap-5 flex-wrap justify-center">
              {navItems.map((item: nav, index: number) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="group hover:opacity-95 transition-all duration-200 ease-in-out hover:scale-95 text-sm sm:text-base md:text-lg"
                >
                  {item.title}
                  <div className="bg-secondary scale-x-0 h-[2px] w-full group-hover:scale-x-100 transition-all duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-6 sm:mt-8 md:mt-10">
            <h2 className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-sm sm:text-base md:text-lg">
              <span>Proudly created in India.</span>
              <span>© Team K {new Date().getFullYear()}</span>
              <span>All Rights Reserved.</span>
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
}
