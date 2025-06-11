"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// Importing images
import client1 from "@/public/static/client/6.png";
import client2 from "@/public/static/client/7.png";
import client3 from "@/public/static/client/8.png";
import client5 from "@/public/static/client/10.png";
import client6 from "@/public/static/client/11.png";
import client7 from "@/public/static/client/12.png";
import client8 from "@/public/static/client/13.png";
import client9 from "@/public/static/client/Sharan Hegde.png";
import client10 from "@/public/static/client/Level Supermind.png";
import client11 from "@/public/static/client/AT.png";
import client12 from "@/public/static/client/Ashneer Grover.png";

// Client data with names and brand colors
const clients = [
    { 
        image: client1, 
        name: "Rigi",
        shadow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]" // blue glow
    },
    { 
        image: client2, 
        name: "Sugar Fit",
        shadow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]" // emerald glow
    },
    { 
        image: client5, 
        name: "Think School",
        shadow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]" // amber glow
    },
    { 
        image: client7, 
        name: "Prachayam",
        shadow: "shadow-[0_0_30px_rgba(239,68,68,0.3)]" // red glow
    },
    { 
        image: client8, 
        name: "WTF is Podcast",
        shadow: "shadow-[0_0_30px_rgba(139,92,246,0.3)]" // violet glow
    },
    { 
        image: client10, 
        name: "Level Supermind",
        shadow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]" // cyan glow
    },
];

export default function ClientMarquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const marqueeAnimation = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        const totalWidth = marquee.scrollWidth;
        const cloneCount = Math.ceil(window.innerWidth / totalWidth);

        // Clone children to ensure seamless scrolling
        for (let i = 0; i < cloneCount; i++) {
            Array.from(marquee.children).forEach((child) => {
                marquee.appendChild(child.cloneNode(true));
            });
        }

        // GSAP animation for infinite marquee
        marqueeAnimation.current = gsap.to(marquee, {
            x: `-=${totalWidth}`,
            duration: 100,
            repeat: -1,
            ease: "linear",
        });

        return () => {
            marqueeAnimation.current?.kill();
        };
    }, []);

    const handleMouseEnter = () => marqueeAnimation.current?.pause();
    const handleMouseLeave = () => marqueeAnimation.current?.resume();

    return (
        <div
            className="overflow-hidden py-8 px-4 lg:px-20 flex justify-center items-center group relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="overflow-hidden inset-0 bg-gradient-to-r w-[60vw] from-secondary-1/2 via-transparent to-secondary"></div>
            <div
                className="flex space-x-8 lg:space-x-16"
                ref={marqueeRef}
                style={{ willChange: "transform" }}
            >
                {clients.map((client, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 text-center relative"
                    >
                        <div className={`
                            relative
                            w-[120px] h-[120px] 
                            rounded-full
                            overflow-hidden
                            ${client.shadow}
                        `}>
                            <Image
                                src={client.image}
                                alt={client.name}
                                width={180}
                                height={180}
                                className="w-full object-fill mix-blend-ligthen rounded-full h-full"
                                priority={index < 12}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
