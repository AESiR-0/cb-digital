"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/static/logo_no_bg.png";
import Link from "next/link";

const navItems = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Contact Us", path: "/contact" },
];

interface NavItem {
  title: string;
  path: string;
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navigateTo = (path: string) => {
    router.push(path);
    closeMenu();
  };

  return (
    <>
      {/* Fixed Navbar with Glass Background */}
      <div className="fixed top-0 left-0 right-0 z-[999999] backdrop-blur-md bg-[#171717]/20 border-b border-white/10">
        <div className="w-screen items-center text-white flex justify-between px-10 ">
          {/* Logo */}
          <div className="w-[30vw] h-auto cursor-pointer" onClick={() => navigateTo('/')}>
            <Image
              src={Logo}
              alt="Team K Logo"
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Mobile Menu Button */}
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

          {/* Desktop Navigation - Centered */}
          <div className="hidden font-semibold md:flex space-x-12 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2 p-4 rounded-full">
            {navItems.map((item: NavItem, index) => (
              <button
                key={index}
                onClick={() => navigateTo(item.path)}
                className={`uppercase tracking-wider text-sm hover:text-red-500 lg:text-base ${pathName === item.path ? 'text-red-500' : 'text-white'
                  }`}
              >
                {item.title}
              </button>
            ))}
          </div>


          {/* Schedule a Call Button - CTA Style */}
          <div className="hidden md:block">
            <Link
              href="https://calendly.com/freehukrishn/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 hover:bg-red-600 border-2 border-gray-300 bg-transparent text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
            >
              <span className="text-sm">Schedule a Call</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              {/* Button doodles */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#171717]/40 backdrop-blur-md border-t border-white/10 p-4 space-y-2">
            {navItems.map((item: NavItem, index) => (
              <button
                key={index}
                onClick={() => navigateTo(item.path)}
                className={`block transition duration-200 hover:scale-95 w-full text-left uppercase tracking-wider text-sm ${pathName === item.path ? 'text-red-400' : 'text-white/80'
                  }`}
              >
                {item.title}
              </button>
            ))}
            <Link
              href="https://calendly.com/freehukrishn/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 mt-4"
            >
              <span>Schedule a Call</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              {/* Button doodles */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
            </Link>
          </div>
        )}
      </div>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};
