"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SectionHeader from "../SectionHeader";

type Service = {
  name: string[];
  image: string;
};

const services: Service[] = [
  {
    name: ["brand", " identity"],
    image: "/static/services_illustration/brand_identity.png",
  },
  {
    name: ["video", "\nproduction"],
    image: "/static/services_illustration/video_prod.png",
  },
  {
    name: ["2d", " animation"],
    image: "/static/services_illustration/2d_animation.png",
  },
  {
    name: ["scripting", " &", "\nstorytelling"],
    image: "/static/services_illustration/scripting.png",
  },
  {
    name: ["motion", " design"],
    image: "/static/services_illustration/motion_design.png",
  },
  {
    name: ["web", " design"],
    image: "/static/services_illustration/web.png",
  },
  {
    name: ["organic", " growth"],
    image: "/static/services_illustration/organic_growth.png",
  },
  {
    name: ["social media", "\nmarketing"],
    image: "/static/services_illustration/SMM.png",
  },
  {
    name: ["content", "\nstrategy"],
    image: "/static/services_illustration/content_strategy.png",
  },
];

export default function About() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animation = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Clone items for infinite scroll
    const itemsToClone = 3;
    const items = Array.from(slider.children);
    const originalWidth = items[0].clientWidth;
    const gap = 32; // 8 * 4 (gap-8 in tailwind)
    const itemFullWidth = originalWidth + gap;

    // Clone items
    for (let i = 0; i < itemsToClone; i++) {
      items.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        slider.appendChild(clone);
      });
    }

    const totalWidth = itemFullWidth * items.length;

    // Create the infinite scroll animation
    const animate = () => {
      gsap.set(slider, { x: 0 });
      animation.current = gsap.to(slider, {
        x: -totalWidth,
        duration: 90,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          gsap.set(slider, { x: 0 });
        },
      });
    };

    animate();

    // Add hover handlers to the container
    const container = slider.parentElement;
    if (container) {
      const handleMouseEnter = () => {
        if (animation.current) animation.current.pause();
      };

      const handleMouseLeave = () => {
        if (animation.current) animation.current.play();
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        if (animation.current) animation.current.kill();
      };
    }
  }, []);

  return (
    <div className=" py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader subtitle="What We Do" title="Our Services" />
      </div>

      <div className="relative w-full">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-32 h-full  z-10" />
        <div className="absolute right-0 top-0 w-32 h-full  z-10" />

        {/* Slider container */}
        <div
          ref={sliderRef}
          className="flex gap-8 py-8"
          style={{
            willChange: "transform",
            touchAction: "none",
          }}
        >
          {services.map((service, idx) => (
            <div
              key={`${service.name.join("")}-${idx}`}
              className="flex-none w-[350px] h-[500px] rounded-xl overflow-hidden group transition-all duration-300 ease-out relative"
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.name.join(" ")}
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-[#00000]/40 group-hover:bg-[#00000]/200 transition-all duration-300" />
              </div>
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-end p-6">
                <h3 className="text-4xl font-light text-white whitespace-pre-line">
                  <span className="font-bold">{service.name[0]}</span>
                  {service.name[1]}
                  {service.name[2] || ""}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
