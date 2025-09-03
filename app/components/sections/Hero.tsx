"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Title from "../Title";
import { gsap } from "gsap";
import Link from "next/link";

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

// Floating Avatar Component with Physics
const FloatingAvatar = ({
  src,
  index,
  allAvatars,
}: {
  src: string;
  index: number;
  allAvatars: React.RefObject<HTMLDivElement>[];
}) => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const size = Math.floor(Math.random() * (150 - 90 + 1)) + 90; // Random size between 90-150
  const zIndex = 100000 + Math.floor(Math.random() * 1000); // Randomize z-index

  useEffect(() => {
    const avatar = avatarRef.current;
    if (!avatar) return;

    // Random starting position across full viewport
    const startX = Math.random() * 80 + 10; // 10vw-90vw
    const startY = Math.random() * 80 + 10; // 10vh-90vh

    // Set initial position using left/top
    avatar.style.left = startX + "vw";
    avatar.style.top = startY + "vh";
    avatar.style.position = "fixed";
    avatar.style.zIndex = zIndex.toString();
    avatar.style.width = `${size}px`;
    avatar.style.height = `${size}px`;

    let startTime = Date.now();

    // Physics-based movement with repulsion
    const moveWithPhysics = () => {
      const now = Date.now();
      const elapsed = (now - startTime) / 1000; // seconds
      const strongRepulsion = elapsed < 5; // Stronger for first 5 seconds

      const currentX = parseFloat(avatar.style.left || "0");
      const currentY = parseFloat(avatar.style.top || "0");

      // Calculate repulsion from other avatars
      let repulsionX = 0;
      let repulsionY = 0;

      allAvatars.forEach((otherAvatarRef, otherIndex) => {
        if (otherIndex !== index && otherAvatarRef.current) {
          const otherAvatar = otherAvatarRef.current;
          const otherX = parseFloat(otherAvatar.style.left || "0");
          const otherY = parseFloat(otherAvatar.style.top || "0");

          const distance = Math.sqrt(
            (currentX - otherX) ** 2 + (currentY - otherY) ** 2
          );

          if (distance < 200) {
            // Repulsion radius
            let force = (200 - distance) / 200; // Stronger when closer
            if (strongRepulsion) force *= 2.5; // Boost repulsion for first 5s
            const angle = Math.atan2(currentY - otherY, currentX - otherX);
            repulsionX += Math.cos(angle) * force * 50;
            repulsionY += Math.sin(angle) * force * 50;
          }
        }
      });

      // Add some random movement
      const randomX = (Math.random() - 0.5) * 20;
      const randomY = (Math.random() - 0.5) * 20;

      let newX = currentX + repulsionX + randomX;
      let newY = currentY + repulsionY + randomY;
      // Clamp to viewport (10vw-90vw, 10vh-90vh)
      newX = Math.max(10, Math.min(90, newX));
      newY = Math.max(10, Math.min(90, newY));
      const newRotation = Math.random() * 90 - 45;
      const duration = 8 + Math.random() * 8; // 8-16 seconds

      // Animate using GSAP, but update left/top for next calculation
      gsap.to(avatar, {
        left: newX + "vw",
        top: newY + "vh",
        rotation: newRotation,
        duration: duration,
        ease: "power2.inOut",
        onUpdate: () => {
          // Keep left/top in sync for repulsion
          avatar.style.left = avatar.style.left;
          avatar.style.top = avatar.style.top;
        },
        onComplete: moveWithPhysics,
      });
    };

    // Start the movement with a delay based on index, but apply repulsion immediately
    moveWithPhysics();

    // Cleanup
    return () => {
      gsap.killTweensOf(avatar);
    };
  }, [index, allAvatars, zIndex, size]);

  return (
    <div
      ref={avatarRef}
      className="pointer-events-none"
      // style is set in effect
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
  const avatarRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  // Initialize refs for all avatars
  useEffect(() => {
    avatarRefs.current = bitmojiAvatars.map(() =>
      React.createRef<HTMLDivElement>()
    );
  }, []);

  return (
    <div className="w-full min-h-[70vh] relative bg-primary overflow-x-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#00000] " />
      <div className="absolute left-0 bottom-0 w-full h-10 bg-gradient-to-b from-transparent to-primary z-10" />

      {/* Floating avatars - positioned relative to viewport */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {bitmojiAvatars.map((avatar, index) => (
          <FloatingAvatar
            key={index}
            src={avatar}
            index={index}
            allAvatars={avatarRefs.current}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[90vh] px-2 sm:px-4 md:px-8 lg:px-20">
        <div className="w-full max-w-[95vw] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] text-center mx-auto">
          {/* Main title */}
          <div className="mb-6 sm:mb-8">
            <Title
              code="#FF0000"
              alignment="center"
              title1="We don't overthink"
              title2="We overdeliver."
            />
          </div>

          {/* CTA Button */}
          <div
            className="animate-fade-in-up mb-6 sm:mb-8"
            style={{ animationDelay: "0.6s" }}
          >
            <Link href="/contact">
              <button className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                <span className="text-base sm:text-lg">Start Your Journey</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                {/* Button doodles */}
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </button>
            </Link>
          </div>

          {/* Scroll indicator - now below CTA */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">
                Scroll to explore
              </span>
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
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
