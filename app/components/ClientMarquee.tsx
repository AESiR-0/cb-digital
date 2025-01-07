"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// Importing images
import client1 from "@/public/static/client/6.png";
import client2 from "@/public/static/client/7.png";
import client3 from "@/public/static/client/8.png";
import client4 from "@/public/static/client/9.png";
import client5 from "@/public/static/client/10.png";
import client6 from "@/public/static/client/11.png";
import client7 from "@/public/static/client/12.png";
import client8 from "@/public/static/client/13.png";
import client9 from "@/public/static/client/Sharan Hegde.png";
import client10 from "@/public/static/client/Level Supermind.png";
import client11 from "@/public/static/client/AT.png";
import client12 from "@/public/static/client/Ashneer Grover.png";

const clientImages = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
];

export default function ClientMarquee() {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;

        // Calculate the total width for scrolling
        const totalWidth = marquee.scrollWidth;
        const cloneCount = Math.ceil(window.innerWidth / totalWidth);

        // Clone children to ensure seamless scrolling
        for (let i = 0; i < cloneCount; i++) {
            Array.from(marquee.children).forEach((child) => {
                marquee.appendChild(child.cloneNode(true));
            });
        }

        // GSAP animation for infinite marquee
        gsap.to(marquee, {
            x: `-=${totalWidth}`, // Move by total width
            duration: 100, // Adjust scrolling speed
            repeat: -1, // Infinite loop
            ease: "linear",
        });
    }, []);

    return (
        <div className="overflow-hidden py-4 px-4 lg:px-20 flex justify-center items-center   group relative">
            <div
                className="overflow-hidden inset-0 bg-gradient-to-r w-[60vw] from-secondary-1/2 via-transparent to-secondary"
            ></div>
            <div
                className="flex space-x-6 lg:space-x-10"
                ref={marqueeRef}
                style={{ willChange: "transform" }}
            >
                {clientImages.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 hover:shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] overflow-hidden rounded-full shadow-lg"
                    >
                        <Image
                            src={image}
                            alt={`Client ${index + 1}`}
                            width={150}
                            height={150}
                            className="object-cover w-full h-full"
                            priority={index < 12} // Prioritize the first batch
                        />
                    </div>
                ))} {clientImages.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 hover:shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] overflow-hidden rounded-full shadow-lg"
                    >
                        <Image
                            src={image}
                            alt={`Client ${index + 1}`}
                            width={150}
                            height={150}
                            className="object-cover w-full h-full"
                            priority={index < 12} // Prioritize the first batch
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
