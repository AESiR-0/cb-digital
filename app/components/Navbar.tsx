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
  const [isDesktopCallHovered, setIsDesktopCallHovered] = useState(false);
  const [isMobileCallHovered, setIsMobileCallHovered] = useState(false);
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
      <div className="w-screen items-center text-white z-50 flex justify-between overflow-hidden px-4 sm:px-6 md:px-8 lg:px-20 bg-secondary-2">
        {/* Logo */}
        <div className="w-[120px] sm:w-[150px] md:w-[100px] h-auto cursor-pointer" onClick={() => navigateTo('/')}>
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
        <div className="hidden font-semibold md:flex space-x-6 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item: NavItem, index) => (
            <button
              key={index}
              onClick={() => navigateTo(item.path)}
              className={`group transition duration-200 hover:scale-95 uppercase tracking-wider text-sm lg:text-base ${
                pathName === item.path ? 'text-accent' : 'text-secondary-4'
              }`}
            >
              {item.title}
              <div className={`h-[2px] w-full transition-transform duration-300 ${
                pathName === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              } bg-accent`}></div>
            </button>
          ))}
        </div>

        {/* Schedule a Call Button */}
        <div className="hidden md:block">
          <Link
            href="https://calendly.com/freehukrishn/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block"
            onMouseEnter={() => setIsDesktopCallHovered(true)}
            onMouseLeave={() => setIsDesktopCallHovered(false)}
          >
            <span className="relative z-10 flex items-center gap-2 px-8 py-3 text-white font-semibold text-base transition-transform duration-300 group-hover:scale-95">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Schedule a Call
            </span>
            {/* White Rectangle SVG Border */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              fill="none"
            >
              <rect 
                x="1" 
                y="1" 
                width="calc(100% - 2px)" 
                height="calc(100% - 2px)" 
                stroke="white"
                strokeWidth="2"
                style={{
                  strokeDasharray: 600,
                  strokeDashoffset: isDesktopCallHovered ? 600 : 0,
                  transition: "stroke-dashoffset 0.5s ease-in-out",
                }}
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary-2 text-white p-4 space-y-2">
          {navItems.map((item: NavItem, index) => (
            <button
              key={index}
              onClick={() => navigateTo(item.path)}
              className={`block transition duration-200 hover:scale-95 w-full text-left uppercase tracking-wider text-sm ${
                pathName === item.path ? 'text-accent' : 'text-secondary-4'
              }`}
            >
              {item.title}
            </button>
          ))}
          <Link
            href="https://calendly.com/freehukrishn/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block mt-4"
            onMouseEnter={() => setIsMobileCallHovered(true)}
            onMouseLeave={() => setIsMobileCallHovered(false)}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold text-sm transition-transform duration-300 group-hover:scale-95">
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Schedule a Call
            </span>
            {/* White Rectangle SVG Border */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              fill="none"
            >
              <rect 
                x="1" 
                y="1" 
                width="calc(100% - 2px)" 
                height="calc(100% - 2px)" 
                stroke="white"
                strokeWidth="2"
                style={{
                  strokeDasharray: 450,
                  strokeDashoffset: isMobileCallHovered ? 450 : 0,
                  transition: "stroke-dashoffset 0.5s ease-in-out",
                }}
              />
            </svg>
          </Link>
        </div>
      )}
    </>
  );
};
