"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/static/logo_no_bg.png";

const navItems = [
  { title: "Home", id: "hero" },
  { title: "About", id: "about" },
  { title: "Work", id: "work" },
  { title: "Services", id: "services" },
  { title: "Testimonials", id: "testimonials" },
];

interface NavItem {
  title: string;
  id: string;
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <>
      <div className="w-screen items-center text-white z-50   flex justify-between overflow-hidden px-4 sm:px-6 md:px-8 lg:px-20 bg-secondary-2">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="w-[120px] sm:w-[150px] md:w-[100px] h-auto">
            <Image
              src={Logo}
              alt="Team K Logo"
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden font-semibold md:flex space-x-6 lg:space-x-8">
          {navItems.map((item: NavItem, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="group text-secondary-4 transition duration-200 hover:scale-95 uppercase tracking-wider text-sm lg:text-base"
            >
              {item.title}
              <div className="h-[2px] w-full transition-transform duration-300 scale-x-0 group-hover:scale-x-100 bg-accent"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary-2 text-white p-4 space-y-2">
          {navItems.map((item: NavItem, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="block text-secondary-4 transition duration-200 hover:scale-95 w-full text-left uppercase tracking-wider text-sm"
            >
              {item.title}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
