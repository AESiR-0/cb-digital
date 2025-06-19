"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from "gsap";

// Importing all creator images
import KshitijSehrawat from "@/public/static/creators/Kshitij Sehrawat.png";
import RyanFernando from "@/public/static/creators/Ryan Fernando.png";
import ShivanshGarg from "@/public/static/creators/Shivansh Garg.png";
import HarshGoela from "@/public/static/creators/Harsh Goela.png";
import HimanshuAgrawal from "@/public/static/creators/Himanshu Agrawal.png";
import DivasGupta from "@/public/static/creators/Divas Gupta.png";
import NeerajArora from "@/public/static/creators/Neeraj Arora.png";
import BijayGautam from "@/public/static/creators/Bijay Gautam.png";
import SiddharthRajsekar from "@/public/static/creators/Siddharth Rajsekar.png";
import MeghanaDixit from "@/public/static/creators/Meghana Dixit.png";
import ShashwatAmrev from "@/public/static/creators/Shashwat Amrev.png";
import ShivangiDesai from "@/public/static/creators/Shivangi Desai.png";
import VishalMalkhan from "@/public/static/creators/Vishal Malkhan.png";
import SnehDesai from "@/public/static/creators/Sneh Desai.png";
import DrYogendraSingh from "@/public/static/creators/Dr Yogendra Singh Rathore.png";
import VishalChourasia from "@/public/static/creators/Vishal Chourasia.png";
import AyushShukla from "@/public/static/creators/Ayush Shukla.png";
import MahdiShafei from "@/public/static/creators/Mahdi Shafei.png";
import IshanSharma from "@/public/static/creators/Ishan Sharma.png";
import AyushWadhwa from "@/public/static/creators/Ayush Wadhwa.png";
import MeghanaMalkhan from "@/public/static/creators/Meghana Malkhan.png";
import AmeetParekh from "@/public/static/creators/Ameet Parekh.png";
import RajivTalreja from "@/public/static/creators/Rajiv Talreja.png";
import ThinkSchool from "@/public/static/creators/Think School.png";
import DrCuterus from "@/public/static/creators/Dr Cuterus.png";
import ABDeVilliers from "@/public/static/creators/AB DeVilliers.png";
import AakashChopra from "@/public/static/creators/Aakash Chopra.png";
import AnkurWarikoo from "@/public/static/creators/Ankur Warikoo.png";
import AshneerGrover from "@/public/static/creators/Ashneer Grover.png";
import SharanHedge from "@/public/static/creators/Sharan Hedge.png";
import AmishTripathi from "@/public/static/creators/Amish Tripathi.png";

type Creator = {
    image: string;
    name: string;
    handle?: string;
    subscribers?: string;
};

const creators: Creator[] = [
    {
        image: ABDeVilliers.src,
        name: "AB De Villiers",
        handle: "@ABDeVilliers17",
        subscribers: "2.1M subscribers"
    },
    {
        image: AnkurWarikoo.src,
        name: "Ankur Warikoo",
        handle: "@ankurwarikoo",
        subscribers: "4.2M subscribers"
    },
    {
        image: AshneerGrover.src,
        name: "Ashneer Grover",
        handle: "@Ashneer_Grover",
        subscribers: "920K subscribers"
    },
    {
        image: AakashChopra.src,
        name: "Aakash Chopra",
        handle: "@cricketaakash",
        subscribers: "3.8M subscribers"
    },
    {
        image: AmishTripathi.src,
        name: "Amish Tripathi",
        handle: "@authoramish",
        subscribers: "850K subscribers"
    },
    {
        image: SharanHedge.src,
        name: "Sharan Hegde",
        handle: "@sharanhegde",
        subscribers: "1.2M subscribers"
    },
    {
        image: ThinkSchool.src,
        name: "Think School",
        handle: "@ThinkSchool",
        subscribers: "2.5M subscribers"
    },
    {
        image: DrCuterus.src,
        name: "Dr. Tanaya",
        handle: "@drcuterus",
        subscribers: "1.8M subscribers"
    },
    {
        image: KshitijSehrawat.src,
        name: "Kshitij Sehrawat",
        handle: "@kshitijsehrawat",
        subscribers: "750K subscribers"
    },
    {
        image: RyanFernando.src,
        name: "Ryan Fernando",
        handle: "@ryanfernando",
        subscribers: "680K subscribers"
    },
    {
        image: ShivanshGarg.src,
        name: "Shivansh Garg",
        handle: "@shivanshgarg",
        subscribers: "520K subscribers"
    },
    {
        image: HarshGoela.src,
        name: "Harsh Goela",
        handle: "@harshgoela",
        subscribers: "890K subscribers"
    },
    {
        image: HimanshuAgrawal.src,
        name: "Himanshu Agrawal",
        handle: "@himanshuagrawal",
        subscribers: "450K subscribers"
    },
    {
        image: DivasGupta.src,
        name: "Divas Gupta",
        handle: "@divasgupta",
        subscribers: "380K subscribers"
    },
    {
        image: NeerajArora.src,
        name: "Neeraj Arora",
        handle: "@neerajarora",
        subscribers: "620K subscribers"
    },
    {
        image: BijayGautam.src,
        name: "Bijay Gautam",
        handle: "@bijaygautam",
        subscribers: "290K subscribers"
    },
    {
        image: SiddharthRajsekar.src,
        name: "Siddharth Rajsekar",
        handle: "@siddharthrajsekar",
        subscribers: "410K subscribers"
    },
    {
        image: MeghanaDixit.src,
        name: "Meghana Dixit",
        handle: "@meghanadixit",
        subscribers: "340K subscribers"
    },
    {
        image: ShashwatAmrev.src,
        name: "Shashwat Amrev",
        handle: "@shashwatamrev",
        subscribers: "280K subscribers"
    },
    {
        image: ShivangiDesai.src,
        name: "Shivangi Desai",
        handle: "@shivangidesai",
        subscribers: "320K subscribers"
    },
    {
        image: VishalMalkhan.src,
        name: "Vishal Malkhan",
        handle: "@vishalmalkhan",
        subscribers: "260K subscribers"
    },
    {
        image: SnehDesai.src,
        name: "Sneh Desai",
        handle: "@snehdesai",
        subscribers: "190K subscribers"
    },
    {
        image: DrYogendraSingh.src,
        name: "Dr. Yogendra Singh",
        handle: "@dryogendrasingh",
        subscribers: "420K subscribers"
    },
    {
        image: VishalChourasia.src,
        name: "Vishal Chourasia",
        handle: "@vishalchourasia",
        subscribers: "380K subscribers"
    },
    {
        image: AyushShukla.src,
        name: "Ayush Shukla",
        handle: "@ayushshukla",
        subscribers: "240K subscribers"
    },
    {
        image: MahdiShafei.src,
        name: "Mahdi Shafei",
        handle: "@mahdishafei",
        subscribers: "180K subscribers"
    },
    {
        image: IshanSharma.src,
        name: "Ishan Sharma",
        handle: "@ishansharma",
        subscribers: "310K subscribers"
    },
    {
        image: AyushWadhwa.src,
        name: "Ayush Wadhwa",
        handle: "@ayushwadhwa",
        subscribers: "220K subscribers"
    },
    {
        image: MeghanaMalkhan.src,
        name: "Meghana Malkhan",
        handle: "@meghanamalkhan",
        subscribers: "270K subscribers"
    },
    {
        image: AmeetParekh.src,
        name: "Ameet Parekh",
        handle: "@ameetparekh",
        subscribers: "160K subscribers"
    },
    {
        image: RajivTalreja.src,
        name: "Rajiv Talreja",
        handle: "@rajivtalreja",
        subscribers: "330K subscribers"
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
                duration: 300,
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