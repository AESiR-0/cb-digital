"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Title from "../Title";

type Service = {
    name: string[];
    image: string;
};

const services: Service[] = [
    {
        name: ["brand", " identity"],
        image: "/services/brand.png"
    },
    {
        name: ["video", "\nproduction"],
        image: "/services/video.png"
    },
    {
        name: ["2d", " animation"],
        image: "/services/2d.png"
    },
    {
        name: ["pitch", " deck"],
        image: "/services/pitch.png"
    },
    {
        name: ["motion", " design"],
        image: "/services/motion.png"
    },
    {
        name: ["web", " design"],
        image: "/services/web.png"
    }
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
            items.forEach(item => {
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
                duration: 40,
                ease: "none",
                repeat: -1,
                onRepeat: () => {
                    gsap.set(slider, { x: 0 });
                }
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

            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
                if (animation.current) animation.current.kill();
            };
        }
    }, []);

    return (
        <div className="bg-[#171717] py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <Title alignment="center" title2="" code="#ff9900" title1="Our Services" />
            </div>

            <div className="relative w-full">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#171717] to-transparent z-10" />
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#171717] to-transparent z-10" />

                {/* Slider container */}
                <div 
                    ref={sliderRef}
                    className="flex gap-8 py-8"
                    style={{ 
                        willChange: "transform",
                        touchAction: "none"
                    }}
                >
                    {services.map((service, idx) => (
                        <div
                            key={`${service.name.join("")}-${idx}`}
                            className="flex-none w-[400px] h-[500px] rounded-xl 
                                     bg-transparent overflow-hidden group
                                     transition-all duration-300 ease-out"
                        >
                            <div className="relative w-full h-full flex flex-col">
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={service.image}
                                        alt={service.name.join(" ")}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                
                                <div className="mt-auto p-6 relative z-10">
                                    <h3 className="text-4xl font-light text-white whitespace-pre-line">
                                        <span className="font-bold">{service.name[0]}</span>
                                        {service.name[1]}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
