"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";
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

export const Navbar = () => {
  const router = useRouter();

  const handleClick = (href: string) => {
    animatePageOut(href, router);
  };

  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <div className="w-screen items-center text-white  z-50  flex justify-between overflow-hidden px-5 md:px-20 h-20 bg-seconday-2">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href={'/'}><span className="font-wig text-4xl">CB</span></Link>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="bg-secondary fixed flex flex-col font-clash justify-center items-center overflow-hidden top-0 left-0 z-10">
              {navItems.map((item: nav, index: number) => {
                return (
                  <Link
                    key={index}
                    className={`group hover:opacity-95  duration-200 ease-in-out hover:scale-95 font-clash font-black  transition-all ${item.link === pathName
                        ? "text-accent"
                        : "text-secondary-4"
                      }`}
                    onClick={() => handleClick(item.link)}
                    href={""}
                  >
                    {item.title}
                    <div className="bg-secondary scale-x-0 h-[2px] w-full group-hover:scale-x-100 transition-all duration-300"></div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <div
          className={`hidden md:flex-row md:flex font-sans text-lg text-secondary-4 gap-10 ${isOpen ? "flex" : "hidden"
            } md:flex`}
        >
          {navItems.map((item: nav, index: number) => {
            return (
              <Link
                key={index}
                className={`group  hover:opacity-95  duration-200 ease-in-out hover:scale-95 font-semibold  ${item.link === pathName ? "text-accent" : "text-secondary-4"
                  }`}
                href={item.link}
              >
                {item.title}
                <div
                  className={`${item.link === pathName
                      ? "bg-accent scale-x-100 group-hover:scale-x-0 "
                      : "scale-x-0 group-hover:scale-x-100 bg-accent "
                    }  h-[2px] w-full  transition-all duration-300`}
                ></div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
