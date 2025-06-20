"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// Importing all brand images
import B from "@/public/static/brands/B.png";
import B1 from "@/public/static/brands/B-1.png";
import B2 from "@/public/static/brands/B-2.png";
import B3 from "@/public/static/brands/B-3.png";
import B4 from "@/public/static/brands/B-4.png";
import B5 from "@/public/static/brands/B-5.png";
import B6 from "@/public/static/brands/B-6.png";
import B7 from "@/public/static/brands/B-7.png";
import B8 from "@/public/static/brands/B-8.png";
import B9 from "@/public/static/brands/B-9.png";
import B10 from "@/public/static/brands/B-10.png";
import B11 from "@/public/static/brands/B-11.png";
import B12 from "@/public/static/brands/B-12.png";
import B13 from "@/public/static/brands/B-13.png";
import B14 from "@/public/static/brands/B-14.png";
import I from "@/public/static/brands/I.png";
import I1 from "@/public/static/brands/I-1.png";
import I2 from "@/public/static/brands/I-2.png";
import I3 from "@/public/static/brands/I-3.png";
import I4 from "@/public/static/brands/I-4.png";
import I5 from "@/public/static/brands/I-5.png";
import I6 from "@/public/static/brands/I-6.png";
import I7 from "@/public/static/brands/I-7.png";
import I8 from "@/public/static/brands/I-8.png";
import I9 from "@/public/static/brands/I-9.png";
import I10 from "@/public/static/brands/I-10.png";
import I11 from "@/public/static/brands/I-11.png";
import I12 from "@/public/static/brands/I-12.png";
import I13 from "@/public/static/brands/I-13.png";
import I14 from "@/public/static/brands/I-14.png";
import I15 from "@/public/static/brands/I-15.png";
import I16 from "@/public/static/brands/I-16.png";
import I17 from "@/public/static/brands/I-17.png";
import I18 from "@/public/static/brands/I-18.png";

// All brand images with random colors
const brands = [
    { image: B, shadow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]" },
    { image: B1, shadow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]" },
    { image: B2, shadow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]" },
    { image: B3, shadow: "shadow-[0_0_30px_rgba(239,68,68,0.3)]" },
    { image: B4, shadow: "shadow-[0_0_30px_rgba(139,92,246,0.3)]" },
    { image: B5, shadow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]" },
    { image: B6, shadow: "shadow-[0_0_30px_rgba(236,72,153,0.3)]" },
    { image: B7, shadow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]" },
    { image: B8, shadow: "shadow-[0_0_30px_rgba(251,146,60,0.3)]" },
    { image: B9, shadow: "shadow-[0_0_30px_rgba(220,38,127,0.3)]" },
    { image: B10, shadow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]" },
    { image: B11, shadow: "shadow-[0_0_30px_rgba(14,165,233,0.3)]" },
    { image: B12, shadow: "shadow-[0_0_30px_rgba(244,63,94,0.3)]" },
    { image: B13, shadow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]" },
    { image: B14, shadow: "shadow-[0_0_30px_rgba(251,146,60,0.3)]" },
    { image: I, shadow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]" },
    { image: I1, shadow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]" },
    { image: I2, shadow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]" },
    { image: I3, shadow: "shadow-[0_0_30px_rgba(239,68,68,0.3)]" },
    { image: I4, shadow: "shadow-[0_0_30px_rgba(139,92,246,0.3)]" },
    { image: I5, shadow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]" },
    { image: I6, shadow: "shadow-[0_0_30px_rgba(236,72,153,0.3)]" },
    { image: I7, shadow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]" },
    { image: I8, shadow: "shadow-[0_0_30px_rgba(251,146,60,0.3)]" },
    { image: I9, shadow: "shadow-[0_0_30px_rgba(220,38,127,0.3)]" },
    { image: I10, shadow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]" },
    { image: I11, shadow: "shadow-[0_0_30px_rgba(14,165,233,0.3)]" },
    { image: I12, shadow: "shadow-[0_0_30px_rgba(244,63,94,0.3)]" },
    { image: I13, shadow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]" },
    { image: I14, shadow: "shadow-[0_0_30px_rgba(251,146,60,0.3)]" },
    { image: I15, shadow: "shadow-[0_0_30px_rgba(220,38,127,0.3)]" },
    { image: I16, shadow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]" },
    { image: I17, shadow: "shadow-[0_0_30px_rgba(14,165,233,0.3)]" },
    { image: I18, shadow: "shadow-[0_0_30px_rgba(244,63,94,0.3)]" },
];

export default function ClientMarquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const marqueeAnimation = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        const totalWidth = marquee.scrollWidth - 750;
        const cloneCount = Math.ceil(window.innerWidth / totalWidth);

        // Clone children to ensure seamless scrolling
        for (let i = 0; i < cloneCount; i++) {
            Array.from(marquee.children).forEach((child) => {
                marquee.appendChild(child.cloneNode(true));
            });
        }

        // GSAP animation for infinite marquee
        marqueeAnimation.current = gsap.to(marquee, {
            x: `-${totalWidth}px`,
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
            {/* Vignette overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#171717] to-transparent z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#171717] to-transparent z-10" />

            <div className="overflow-hidden inset-0 bg-gradient-to-r w-[60vw] from-secondary-1/2 via-transparent to-secondary"></div>
            <div
                className="flex space-x-8 lg:space-x-16"
                ref={marqueeRef}
                style={{ willChange: "transform" }}
            >
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 text-center relative"
                    >
                        <div className={`
                            relative
                            w-[120px] h-[120px] 
                            rounded-full
                            overflow-hidden
                            bg-white
                            ${brand.shadow}
                        `}>
                            <Image
                                src={brand.image}
                                alt={`Brand ${index + 1}`}
                                width={180}
                                height={180}
                                className="w-full h-full object-contain p-4"
                                priority={index < 12}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
