import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <div className="fixed z-10 py-10 bg-[#101010] block bottom-0  w-full ">
      <footer className=" font-clash  text-white w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center  justify-center w-screen gap-5">
          <h1 className="text-[15rem] font-wig">CB Digital</h1>
          <span className="w-1/2 h-1 bg-white"></span>
          <div className="flex h-auto items-center justify-evenly w-full  ">
            <div className="icons flex">
              <Image
                src={""}
                alt="social icon linkedin"
                height={64}
                width={64}
              />
              <Image
                src={""}
                alt="social icon instagram"
                height={64}
                width={64}
              />
              <Image
                src={""}
                alt="social icon facebook"
                height={64}
                width={64}
              />
            </div>
            <div className="flex gap-5">
              {navItems.map((item: nav, index: number) => {
                return (
                  <Link
                    key={index}
                    className={`group font-clash  transition-all `}
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
