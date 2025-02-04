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

// Client data with names
const clients = [
    { image: client3, name: "AB De Villiers" },
    { image: client6, name: "Mahdi Shafiei" },
    { image: client9, name: "Sharan Hegde" },
    { image: client11, name: "Amish Tripathi" },
    { image: client12, name: "Ashneer Grover" },
    { image: client1, name: "Rigi" },
    { image: client2, name: "Sugar Fit" },
    { image: client5, name: "Think School" },
    { image: client7, name: "Prachayam" },
    { image: client8, name: "WTF is Podcast" },
    { image: client10, name: "Level Supermind" },
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
            className="overflow-hidden py-4 px-4 lg:px-20 flex justify-center items-center group relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="overflow-hidden inset-0 bg-gradient-to-r w-[60vw] from-secondary-1/2 via-transparent to-secondary"
            ></div>
            <div
                className="flex space-x-6 lg:space-x-10"
                ref={marqueeRef}
                style={{ willChange: "transform" }}
            >
                {clients.map((client, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 text-center space-y-2"
                    >
                        <div className="hover:shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] overflow-hidden rounded-full shadow-lg mx-auto">
                            <Image
                                src={client.image}
                                alt={client.name}
                                width={150}
                                height={150}
                                className="object-cover w-full h-full"
                                priority={index < 12} // Prioritize the first batch
                            />
                        </div>
                        <p className="text-sm lg:text-base font-medium text-gray-100">
                            {client.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
