"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Title from "../Title";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

// Register the Draggable plugin
gsap.registerPlugin(Draggable);

// Bitmoji images for floating avatars
const bitmojiAvatars = [
  "/static/bitmojis/1.png",
  "/static/bitmojis/2.png", 
  "/static/bitmojis/3.png",
  "/static/bitmojis/4.png",
  "/static/bitmojis/5.png",
  "/static/bitmojis/6.png",
  "/static/bitmojis/7.png",
  "/static/bitmojis/9.png",
  "/static/bitmojis/10.png",
  "/static/bitmojis/11.png",
  "/static/bitmojis/12.png",
  "/static/bitmojis/13.png",
  "/static/bitmojis/14.png",
  "/static/bitmojis/15.png",
  "/static/bitmojis/16.png",
  "/static/bitmojis/17.png",
  "/static/bitmojis/18.png",
  "/static/bitmojis/19.png",
  "/static/bitmojis/20.png",
  "/static/bitmojis/21.png",
  "/static/bitmojis/22.png",
];

// Floating Avatar Component
const FloatingAvatar = ({ src, index }: { src: string; index: number }) => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const size = Math.floor(Math.random() * (150 - 90 + 1)) + 90; // Random size between 90-150

  useEffect(() => {
    const avatar = avatarRef.current;
    if (!avatar) return;

    // Random starting position across full viewport
    const startX = Math.random() * 100; // 0-100% of viewport width
    const startY = Math.random() * 100; // 0-100% of viewport height

    // Set initial position
    gsap.set(avatar, {
      x: startX + 'vw', // Use viewport width units
      y: startY + 'vh', // Use viewport height units
      rotation: Math.random() * 90 - 45, // -45 to +45 degrees
    });

    // Create random movement animation
    const moveRandomly = () => {
      const newX = Math.random() * 100; // Full viewport width
      const newY = Math.random() * 100; // Full viewport height
      const newRotation = Math.random() * 90 - 45; // -45 to +45 degrees
      const duration = 15 + Math.random() * 12; // 8-20 seconds

      gsap.to(avatar, {
        x: newX + 'vw', // Use viewport width units
        y: newY + 'vh', // Use viewport height units
        rotation: newRotation,
        duration: duration,
        ease: "power2.inOut",
        onComplete: moveRandomly, // Loop the animation
      });
    };

    // Start the movement with a delay based on index
    gsap.delayedCall(index * 0.5, moveRandomly);

    // Make the avatar draggable
    Draggable.create(avatar, {
      type: "x,y",
      bounds: "body",
      inertia: true,
      onDragStart: function() {
        // Pause the automatic movement when dragging starts
        gsap.killTweensOf(avatar);
      },
      onDragEnd: function() {
        // Resume automatic movement after dragging ends
        gsap.delayedCall(1, moveRandomly);
      }
    });

    // Cleanup
    return () => {
      gsap.killTweensOf(avatar);
      // Clean up draggable instance
      const draggableInstance = Draggable.get(avatar);
      if (draggableInstance) {
        draggableInstance.kill();
      }
    };
  }, [index]);

  return (
    <div
      ref={avatarRef}
      className="fixed cursor-grab active:cursor-grabbing" // Added cursor styles for dragging
      style={{
        width: `${size}px`,
        height: `${size}px`,
        zIndex: 100000, // Ensure avatars are behind content
      }}
    >
      <div className="relative w-full h-full">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full blur-lg bg-red-500/10 scale-100" />
        
        {/* Avatar image */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src={src}
            draggable={false}
            alt="Bitmoji avatar"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="w-full min-h-[90vh] relative bg-primary overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#171717] " />
      
      {/* Floating avatars - positioned relative to viewport */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {bitmojiAvatars.map((avatar, index) => (
          <FloatingAvatar
            key={index}
            src={avatar}
            index={index}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[90vh] px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="w-full max-w-[1200px] text-center">
          {/* Main title */}
          <div className="mb-8">
            <Title 
              code="#FF0000" 
              alignment="center" 
              title1="We don't overthink" 
              title2="We overdeliver." 
            />
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up mb-8" style={{ animationDelay: '0.6s' }}>
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
              <span className="text-lg">Start Your Journey</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              {/* Button doodles */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </button>
          </div>

          {/* Scroll indicator - now below CTA */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-white/50 uppercase tracking-wider">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
