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
  { title: "contact", link: "/contact" },
];

interface nav {
  title: string;
  link: string;
}

export default function Footer() {
  return (
    <div className="fixed z-10 py-10 bg-[#101010] block bottom-0  w-full ">
      <footer className=" font-clash  text-white w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center  justify-center w-screen gap-5">
          <h1 className="text-[15rem] font-tan">CB Digital</h1>
          <span className="w-1/2 h-1 bg-white"></span>
          <div className="flex h-auto items-center justify-evenly w-full  ">
            <div className="gap-5  icons flex">
              <Link href={"instagram.com"}>
                <Image
                  src={Instagram}
                  className="hover:opacity-95 transition-all duration-200 ease-in-out hover:scale-95"
                  alt="social icon instagram"
                  height={32}
                  width={32}
                />
              </Link>
              <Link href={"linkedin.com"}>
                <Image
                  src={Linkedin}
                  className="hover:opacity-95 transition-all duration-200 ease-in-out hover:scale-95"
                  alt="social icon linkedin"
                  height={32}
                  width={32}
                />
              </Link>

              <Link href={"facebook.com"}>
                <Image
                  className="hover:opacity-95 transition-all duration-200 ease-in-out hover:scale-95"
                  src={Facebook}
                  alt="social icon facebook"
                  height={32}
                  width={32}
                />
              </Link>
            </div>
            <div className="flex font-clash group gap-5">
              {navItems.map((item: nav, index: number) => {
                return (
                  <Link
                    key={index}
                    className="hover:opacity-95 transition-all duration-200 ease-in-out hover:scale-95"
                    href={item.link}
                  >
                    {item.title}
                    <div className="bg-secondary scale-x-0 h-[2px] w-full group-hover:scale-x-100 transition-all duration-300"></div>
                  </Link>
                );
              })}
            </div>
            <div className="text-right ">
              <h2>Proudly created in India.</h2>
              <h2>All Rights Reserved.</h2>
              <h2>© 2024 CB Digital</h2>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
