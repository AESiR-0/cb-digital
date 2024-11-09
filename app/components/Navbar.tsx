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
    <div className="w-full fixed top-0 z-50 bg-primary">
      <div className="flex items-center justify-between px-5 md:px-20 xl:px-40 2xl:px-60 h-20 text-white max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <span className="font-wig text-4xl">CB</span>
        </Link>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div
            className={`w-8 h-0.5 bg-white transition-all transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-0.5 bg-white transition-all transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-secondary flex flex-col items-center justify-start py-40 space-y-6 text-lg transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden overflow-y-hidden h-screen`}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
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
