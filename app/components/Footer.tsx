"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Instagram from "@/public/static/socials/Instagram.png";
import Facebook from "@/public/static/socials/Facebook.png";
import Linkedin from "@/public/static/socials/LinkedIn.png";
import Logo from "@/public/static/logo_no_bg.png";

const navItems = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Contact Us", path: "/contact" },
];

interface nav {
  title: string;
  path: string;
}

export default function Footer() {
  return (
    <footer className="bg-[#00000] text-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex justify-center md:justify-start mb-4">
              <div className="w-32 h-auto">
                <Image
                  src={Logo}
                  alt="Team K Logo"
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md text-center md:text-left">
              We create compelling video content that captivates audiences and
              drives results. From podcasts to viral shorts, we help brands tell
              their stories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              {navItems.map((item: nav, index: number) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
              Contact
            </h3>
            <div className="space-y-2 text-center md:text-left">
              <p className="text-gray-400 text-sm">krishncreates@gmail.com</p>
              <p className="text-gray-400 text-sm">+91 9219194571</p>
              <p className="text-gray-400 text-sm">
                Bhopal, Madhya Pradesh, India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Team K. All rights reserved.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/team_iamk/"
                target="_blank"
                className="group"
              >
                <Image
                  src={Instagram}
                  className="w-5 h-5 hover:opacity-80 transition-opacity duration-200"
                  alt="Instagram"
                  height={20}
                  width={20}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/team-iamk"
                target="_blank"
                className="group"
              >
                <Image
                  src={Linkedin}
                  className="w-5 h-5 hover:opacity-80 transition-opacity duration-200"
                  alt="LinkedIn"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
