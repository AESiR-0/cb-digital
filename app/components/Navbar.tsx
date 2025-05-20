"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

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
      <div className="w-screen items-center text-white z-50 py-5 flex justify-between overflow-hidden px-5 md:px-20 bg-secondary-2">
        <div className="flex items-center my-1 justify-between w-full md:w-auto">
          <span className="font-tan py-2 text-2xl">Team K</span>
          <button className="md:hidden" onClick={toggleMenu}>
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden font-semibold md:flex space-x-8">
          {navItems.map((item: NavItem, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="group text-secondary-4 transition duration-200 hover:scale-95 uppercase tracking-wider"
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
              className="block text-secondary-4 transition duration-200 hover:scale-95 w-full text-left uppercase tracking-wider"
            >
              {item.title}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
