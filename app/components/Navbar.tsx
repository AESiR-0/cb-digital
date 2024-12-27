"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";

const navItems = [
  { title: "home", link: "/" },
  { title: "our services", link: "/services" },
  { title: "our work", link: "/work" },
  { title: "team", link: "/team" },
];

interface NavItem {
  title: string;
  link: string;
}

export const Navbar = () => {
  const router = useRouter();
  const handleClick = (href: string) => animatePageOut(href, router);

  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="w-screen items-center  text-white  z-50   flex justify-between overflow-hidden px-5 md:px-20 h-20 bg-seconday-2">
        <div className="flex items-center justify-between w-full md:w-auto">
          <span className="font-tan  py-2 text-2xl">CB Digital</span>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col items-center space-y-6">
            {navItems.map((item: NavItem, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => {
                  handleClick(item.link);
                  closeMenu();
                }}
                className={`font-clash font-black ${
                  item.link === pathName ? "text-accent" : "text-secondary-4"
                } transition duration-200 hover:scale-95`}
              >
                {item.title}
                <div className="bg-accent h-[2px] w-full mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-semibold">
          {navItems.map((item: NavItem, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={() => handleClick(item.link)}
              className={`group ${
                item.link === pathName ? "text-accent" : "text-secondary-4"
              } transition duration-200 hover:scale-95`}
            >
              {item.title}
              <div
                className={`h-[2px] w-full transition-transform duration-300 ${
                  item.link === pathName
                    ? "bg-accent scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100 bg-accent"
                }`}
              ></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
