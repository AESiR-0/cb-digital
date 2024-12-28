import React from "react";
import Link from "next/link";
import Image from "next/image";
import Instagram from "@/public/static/socials/Instagram.png";
import Facebook from "@/public/static/socials/Facebook.png";
import Linkedin from "@/public/static/socials/LinkedIn.png";

const navItems = [
  { title: "home", link: "/" },
  { title: "our services", link: "/services" },
  { title: "our work", link: "/work" },
  { title: "team", link: "/team" },
];

interface nav {
  title: string;
  link: string;
}

export default function Footer() {
  return (
    <div className="fixed z-10  py-10 bg-[#101010] block bottom-0  w-full ">
      <footer className=" font-clash  text-white w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center  justify-center w-screen gap-5">
          <h1 className="text-[10rem] font-tan">CB Digital</h1>
          <span className="w-1/2 h-1 bg-white"></span>

          {/* Social Icons and Navigation Links */}
          <div className="flex px-10 flex-col md:flex-row justify-between w-full items-center md:items-start gap-10 mt-10">
            {/* Social Media Icons */}
            <div className="flex gap-5 justify-center items-center">
              <Link href={"https://instagram.com"} target="_blank">
                <Image
                  src={Instagram}
                  className="hover:opacity-95 transition-all duration-200 ease-in-out hover:scale-95"
                  alt="social icon instagram"
                  height={32}
                  width={32}
                />
              </Link>
              <Link href={"https://linkedin.com"} target="_blank">
                <Image
                  src={Linkedin}
                  className="hover:opacity-95 transition-all duration-200 ease-in-out hover:scale-95"
                  alt="social icon linkedin"
                  height={32}
                  width={32}
                />
              </Link>
              <Link href={"https://facebook.com"} target="_blank">
                <Image
                  src={Facebook}
                  className="hover:opacity-95 transition-all duration-200 ease-in-out hover:scale-95"
                  alt="social icon facebook"
                  height={32}
                  width={32}
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-5 flex-wrap justify-center">
              {navItems.map((item: nav, index: number) => {
                return (
                  <Link
                    key={index}
                    className="group hover:opacity-95 transition-all duration-200 ease-in-out hover:scale-95"
                    href={item.link}
                  >
                    {item.title}
                    <div className="bg-secondary scale-x-0 h-[2px] w-full group-hover:scale-x-100 transition-all duration-300"></div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-10">
            <h2 className="flex max-md:flex-col max-md:gap-0 gap-3">Proudly created in India. <span> ©  CB Digital 2024</span>
              <span> All Rights Reserved.</span>
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
}
