"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import RyanFernando from "@/public/static/creators/Ryan Fernando.png";
import HarshGoela from "@/public/static/creators/Harsh Goela.png";
import Amani from "@/public/static/creators/amani.jpg";
import DivasGupta from "@/public/static/creators/Divas Gupta.png";
import NeerajArora from "@/public/static/creators/Neeraj Arora.png";
import VishalMalkhan from "@/public/static/creators/Vishal Malkhan.png";
import SnehDesai from "@/public/static/creators/Sneh Desai.png";
import DrYogendraSingh from "@/public/static/creators/Dr Yogendra Singh Rathore.png";
import VishalChourasia from "@/public/static/creators/Vishal Chourasia.png";
import AyushShukla from "@/public/static/creators/Ayush Shukla.png";
import MahdiShafei from "@/public/static/creators/Mahdi Shafei.png";
import IshanSharma from "@/public/static/creators/Ishan Sharma.png";
import AyushWadhwa from "@/public/static/creators/Ayush Wadhwa.png";
import RajivTalreja from "@/public/static/creators/Rajiv Talreja.png";
import ThinkSchool from "@/public/static/creators/Think School.jpg";
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
    handle: "ABD360",
    subscribers: "574K subscribers",
  },
  {
    image: AnkurWarikoo.src,
    name: "Ankur Warikoo",
    handle: "@warikoo",
    subscribers: "6.37M subscribers",
  },
  {
    image: AshneerGrover.src,
    name: "Ashneer Grover",
    handle: "@ashneer.grover",
    subscribers: "1.4M followers",
  },
  {
    image: AakashChopra.src,
    name: "Aakash Chopra",
    handle: "@CricketAakash",
    subscribers: "5.04M subscribers",
  },
  {
    image: AmishTripathi.src,
    name: "Amish Tripathi",
    handle: "@authoramish",
    subscribers: "113K subscribers",
  },
  {
    image: SharanHedge.src,
    name: "Sharan Hegde",
    handle: "@financewithsharan",
    subscribers: "3.53M subscribers",
  },
  {
    image: ThinkSchool.src,
    name: "Think School",
    handle: "@ThinkSchool",
    subscribers: "4.62M subscribers",
  },
  {
    image: DrCuterus.src,
    name: "Dr. Tanaya",
    handle: "@dr_cuterus",
    subscribers: "1.8M followers",
  },
  {
    image: RyanFernando.src,
    name: "Ryan Fernando",
    handle: "@celebritynutritionistryan",
    subscribers: "948K subscribers",
  },
  {
    image: HarshGoela.src,
    name: "Harsh Goela",
    handle: "@goela",
    subscribers: "682K subscribers",
  },
  {
    image: DivasGupta.src,
    name: "Divas Gupta",
    handle: "@divasgupta",
    subscribers: "1.1M followers",
  },
  {
    image: NeerajArora.src,
    name: "Neeraj Arora",
    handle: "@NeerajArora",
    subscribers: "876K subscribers",
  },
  {
    image: VishalMalkhan.src,
    name: "Vishal Malkhan",
    handle: "@Malkansview1",
    subscribers: "1.07M subscribers",
  },
  {
    image: SnehDesai.src,
    name: "Sneh Desai",
    handle: "@snehdesai",
    subscribers: "717K subscribers",
  },
  {
    image: DrYogendraSingh.src,
    name: "Dr. Yogendra Singh",
    handle: "@dr.yogendrasinghrathorecoach",
    subscribers: "2.82M subscribers",
  },
  {
    image: VishalChourasia.src,
    name: "Vishal Chourasia",
    handle: "@HyperQuest",
    subscribers: "1.81M subscribers",
  },
  {
    image: AyushShukla.src,
    name: "Ayush Shukla",
    handle: "@ayushshukl.a",
    subscribers: "200K followers",
  },
  {
    image: MahdiShafei.src,
    name: "Mahdi Shafei",
    handle: "@mahdiishafiei",
    subscribers: "559K followers",
  },
  {
    image: IshanSharma.src,
    name: "Ishan Sharma",
    handle: "@IshanSharma7390",
    subscribers: "1.87M subscribers",
  },
  {
    image: AyushWadhwa.src,
    name: "Ayush Wadhwa",
    handle: "@ayushwadhwa",
    subscribers: "372K followers",
  },
  {
    image: RajivTalreja.src,
    name: "Rajiv Talreja",
    handle: "@rajivtalreja",
    subscribers: "847K followers",
  },
  {
    image: Amani.src,
    name: "Odd.Mkt",
    handle: "@odd.mktg",
    subscribers: "378k Followers",
  },
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
        className="relative w-[200px] h-[250px] rounded-[2rem] overflow-hidden transition-all duration-500 ease-out cursor-pointer"
        style={{
          transform: isHovered
            ? `perspective(1000px) 
                           scale(1.05) 
                           rotateX(${mousePosition.y * -10}deg) 
                           rotateY(${mousePosition.x * 10}deg)`
            : "perspective(1000px) scale(1) rotateX(0) rotateY(0)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black 
                             transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.9 : 0.7,
          }}
        />

        <div className="absolute inset-0">
          <Image
            src={creator.image}
            alt={creator.name}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          style={{
            transform: isHovered
              ? `translateZ(20px) translateY(-10px)`
              : "translateZ(0) translateY(0)",
            transition: "transform 0.5s ease-out",
          }}
        >
          <h3 className="text-xl font-bold mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {creator.name}
          </h3>
          <p className="text-xs text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {creator.handle}
          </p>
          <p className="text-xs text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {creator.subscribers}
          </p>
        </div>

        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(
                            800px circle at ${mousePosition.x * 50 + 50}% ${
              mousePosition.y * 50 + 50
            }%,
                            rgba(255, 0, 0, 0.15),
                            transparent 40%
                        )`,
            opacity: isHovered ? 1 : 0,
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
        duration: 300,
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
    <div className="w-full bg-[#00000] overflow-hidden py-20">
      <div className="relative w-full">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#000000] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#000000] to-transparent z-10" />

        {/* Slider container */}
        <div
          ref={sliderRef}
          className="flex gap-8 py-8"
          style={{
            willChange: "transform",
            touchAction: "none",
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
