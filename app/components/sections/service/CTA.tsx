import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="w-full bg-[#171717] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Doodles */}
      <div className="absolute top-10 left-10 w-8 h-8 border-2 border-red-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-4 h-4 bg-red-500/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-6 h-6 border border-red-500/40 transform rotate-45 animate-spin"></div>
      <div className="absolute bottom-10 right-10 w-3 h-3 bg-red-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-5 w-2 h-2 bg-red-500/25 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-5 w-5 h-5 border border-red-500/35 rounded-full animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-red-500"></div>
                <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
                  Ready to Start
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Join Us
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-xl">
              Let's make something awesome together. Ready to transform your ideas into compelling content?
            </p>

            {/* Custom CTA Button */}
            <div className="pt-4">
              <Link href="/contact">
                <div className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                  <span className="text-lg">Let's Create Magic</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {/* Button doodles */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Team Collage Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] h-[500px] group">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-red-500/10 to-transparent rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700"></div>
              
              {/* Collage container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Image 1 - Center, large */}
                <div className="absolute w-56 h-56 rounded-2xl overflow-hidden transform rotate-[-8deg] hover:rotate-0 transition-all duration-500 hover:scale-110 hover:z-20 grayscale hover:grayscale-0">
                  <Image
                    src="/static/team/7.jpg"
                    alt="Team member 1"
                    fill
                    className="object-contain"
                  />
                   
                </div>
                
                {/* Image 2 - Top right of center */}
                <div className="absolute -top-2 -right-2 w-40 h-40 rounded-2xl overflow-hidden transform rotate-[12deg] hover:rotate-0 transition-all duration-500 hover:scale-110 hover:z-20 grayscale hover:grayscale-0">
                  <Image
                    src="/static/team/2.jpg"
                    alt="Team member 2"
                    fill
                    className="object-contain"
                  />
                   
                </div>
                
                {/* Image 3 - Top left of center */}
                <div className="absolute -top-1 -left-1 w-32 h-32 rounded-xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-all duration-500 hover:scale-110 hover:z-20 grayscale hover:grayscale-0">
                  <Image
                    src="/static/team/1.jpg"
                    alt="Team member 3"
                    fill
                    className="object-contain"
                  />
                   
                </div>
                
                {/* Image 4 - Bottom right of center */}
                <div className="absolute -bottom-2 -right-1 w-48 h-48 rounded-2xl overflow-hidden transform rotate-[3deg] hover:rotate-0 transition-all duration-500 hover:scale-110 hover:z-20 grayscale hover:grayscale-0">
                  <Image
                    src="/static/team/4.jpg"
                    alt="Team member 4"
                    fill
                    className="object-contain"
                  />
                   
                </div>
                
                {/* Image 5 - Bottom left of center */}
                <div className="absolute -bottom-1 -left-2 w-44 h-44 rounded-2xl overflow-hidden transform rotate-[-10deg] hover:rotate-0 transition-all duration-500 hover:scale-110 hover:z-20 grayscale hover:grayscale-0">
                  <Image
                    src="/static/team/5.jpg"
                    alt="Team member 5"
                    fill
                    className="object-contain"
                  />
                   
                </div>
                
                {/* Image 6 - Right side of center */}
                <div className="absolute -right-3 top-1/2  -translate-y-1/2 w-40 h-40 rounded-2xl overflow-hidden transform rotate-[8deg] hover:rotate-0 transition-all duration-500 hover:scale-110 hover:z-20 grayscale hover:grayscale-0">
                  <Image
                    src="/static/team/6.jpg"
                    alt="Team member 6"
                    fill
                    className="object-contain"
                  />
                   
                </div>
                
                {/* Image 7 - Left side of center */}
                <div className="absolute -left-2 top-1/2  -translate-y-1/2 w-36 h-36 rounded-xl overflow-hidden transform rotate-[-15deg] hover:rotate-0 transition-all duration-500 hover:scale-110 hover:z-20 grayscale hover:grayscale-0">
                  <Image
                    src="/static/team/3.jpg"
                    alt="Team member 7"
                    fill
                    className="object-contain"
                  />
                   
                </div>
                
                {/* Image 9 - Floating above center */}
                <div className="absolute -top-8 left-1/2  -translate-x-1/2 w-28 h-28 rounded-xl overflow-hidden transform rotate-[20deg] hover:rotate-0 transition-all duration-500 hover:scale-110 hover:z-20 grayscale hover:grayscale-0">
                  <Image
                    src="/static/team/9.jpg"
                    alt="Team member 9"
                    fill
                    className="object-contain"
                  />
                   
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full blur-sm group-hover:bg-red-500/40 transition-all duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500/30 rounded-full blur-sm group-hover:bg-red-500/50 transition-all duration-500"></div>
              
              {/* Collage doodles */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400/80 rounded-full animate-bounce"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-blue-400/80 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-2 w-2 h-2 bg-green-400/80 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
