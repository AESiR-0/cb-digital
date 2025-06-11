"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from "gsap";

type Creator = {
    image: string;
    name: string;
    handle?: string;
    subscribers?: string;
};

const creators: Creator[] = [
    {
        image: "/creators/ab.jpg",
        name: "AB De Villiers",
        handle: "@ABDeVilliers",
        subscribers: "2.1M subscribers"
    },
    {
        image: "/creators/mahdi.jpg",
        name: "Mahdi Shafiei",
        handle: "@MahdiShafiei",
        subscribers: "980K subscribers"
    },
    {
        image: "/creators/sharan.jpg",
        name: "Sharan Hegde",
        handle: "@sharanHegde",
        subscribers: "1.2M subscribers"
    },
    {
        image: "/creators/amish.jpg",
        name: "Amish Tripathi",
        handle: "@authorAmish",
        subscribers: "850K subscribers"
    },
    {
        image: "/creators/ashneer.jpg",
        name: "Ashneer Grover",
        handle: "@Ashneer_Grover",
        subscribers: "920K subscribers"
    }
];

function CreatorCard({ creator }: { creator: Creator }) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
    };

    return (
        <div
            ref={cardRef}
            className="flex-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            <div 
                className="relative w-[280px] h-[350px] rounded-[2rem] overflow-hidden transition-all duration-500 ease-out cursor-pointer"
                style={{
                    transform: isHovered 
                        ? `perspective(1000px) 
                           scale(1.05) 
                           rotateX(${mousePosition.y * -10}deg) 
                           rotateY(${mousePosition.x * 10}deg)`
                        : 'perspective(1000px) scale(1) rotateX(0) rotateY(0)',
                    transformStyle: 'preserve-3d'
                }}
            >
                <div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black 
                             transition-opacity duration-500"
                    style={{
                        opacity: isHovered ? 0.9 : 0.7
                    }}
                />

                <div className="absolute inset-0">
                    <Image
                        src={creator.image}
                        alt={creator.name}
                        fill
                        className="object-cover transition-transform duration-500"
                        style={{
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                        }}
                    />
                </div>

                <div 
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    style={{
                        transform: isHovered 
                            ? `translateZ(20px) translateY(-10px)` 
                            : 'translateZ(0) translateY(0)',
                        transition: 'transform 0.5s ease-out'
                    }}
                >
                    <h3 className="text-2xl font-bold mb-1">{creator.name}</h3>
                    <p className="text-sm text-gray-300 mb-1">{creator.handle}</p>
                    <p className="text-sm text-gray-400">{creator.subscribers}</p>
                </div>

                <div 
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(
                            800px circle at ${mousePosition.x * 50 + 50}% ${mousePosition.y * 50 + 50}%,
                            rgba(255, 0, 0, 0.15),
                            transparent 40%
                        )`,
                        opacity: isHovered ? 1 : 0
                    }}
                />
            </div>
        </div>
    );
}

export default function CreatorMarquee() {
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
        <div className="w-full bg-[#171717] overflow-hidden py-20">
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
                    {creators.map((creator, idx) => (
                        <CreatorCard key={`${creator.name}-${idx}`} creator={creator} />
                    ))}
                </div>
            </div>
        </div>
    );
} 