"use client";
import React, { useState } from 'react';
import Image from 'next/image';

type Brand = {
    name: string;
    category: string;
    videoUrl: string;
    activeColor: string;
};

const brands: Brand[] = [
    { 
        name: 'PORTER', 
        category: 'LOGISTICS', 
        videoUrl: '/videos/brand_showcase/porter.mp4',
        activeColor: 'from-blue-600/20 to-blue-800/20'
    },
    { 
        name: 'LITTLE JOYS', 
        category: 'FINTECH', 
        videoUrl: '/videos/brand_showcase/little_joys.mp4',
        activeColor: 'from-purple-500/20 to-pink-500/20'
    },
    { 
        name: 'POCKET FM', 
        category: 'AUDIO ENTERTAINMENT', 
        videoUrl: '/videos/brand_showcase/pcoket_fm.mp4',
        activeColor: 'from-orange-500/20 to-red-500/20'
    },
    { 
        name: 'GROWW', 
        category: 'INVESTMENT', 
        videoUrl: '/videos/brand_showcase/groww.mp4',
        activeColor: 'from-green-500/20 to-emerald-500/20'
    },
    { 
        name: 'COP 28 UAE', 
        category: 'GOVERNMENT', 
        videoUrl: '/videos/brand_showcase/cop_28_UAE.mp4',
        activeColor: 'from-teal-500/20 to-cyan-500/20'
    },
    { 
        name: 'NISSAN', 
        category: 'AUTOMOTIVE', 
        videoUrl: '/videos/brand_showcase/nissan.mp4',
        activeColor: 'from-red-600/20 to-red-800/20'
    },
    { 
        name: 'SUGARFIT', 
        category: 'FITNESS & WELLNESS', 
        videoUrl: '/videos/brand_showcase/sugarfit.mp4',
        activeColor: 'from-pink-500/20 to-rose-500/20'
    },
];

export default function BrandShowcase() {
    const [activeBrand, setActiveBrand] = useState<Brand>(brands[0]);

    return (
        <div className="w-full min-h-screen bg-[#171717] flex items-center justify-center py-20 px-4 md:px-8 lg:px-20">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-16">
                {/* Left side - Brand list */}
                <div className="w-full lg:w-1/3 space-y-6">
                    {brands.map((brand) => (
                        <div
                            key={brand.name}
                            onClick={() => setActiveBrand(brand)}
                            className={`
                                flex items-center justify-between cursor-pointer
                                py-4 px-2 border-b border-white/10
                                transition-all duration-300 ease-out
                                group relative
                                ${activeBrand.name === brand.name 
                                    ? 'text-white' 
                                    : 'text-white/50 hover:text-white/70'}
                            `}
                        >
                            {/* Background gradient for active state */}
                            <div className={`
                                absolute inset-0 opacity-0 transition-opacity duration-300
                                bg-gradient-to-r ${brand.activeColor}
                                ${activeBrand.name === brand.name ? 'opacity-100' : ''}
                            `} />
                            
                            <div className="flex items-center gap-3 relative z-10">
                                <div className={`
                                    w-2 h-2 rounded-full 
                                    transition-all duration-300
                                    ${activeBrand.name === brand.name 
                                        ? 'bg-white scale-100' 
                                        : 'bg-white/30 scale-75 group-hover:scale-90'}
                                `} />
                                <span className="text-lg font-medium">{brand.name}</span>
                            </div>
                            <span className="text-sm font-light tracking-wider relative z-10">{brand.category}</span>
                        </div>
                    ))}
                </div>

                {/* Right side - Video frame */}
                <div className="w-full lg:w-2/3 relative">
                    <div className="relative w-full aspect-[4/3]">
                        {/* Decorative frame */}
                        <div className="absolute inset-[-40px] border-[20px] border-[#8B4513] rounded-lg 
                                      bg-gradient-to-br from-[#8B4513] to-[#654321]
                                      shadow-2xl" />
                        
                        {/* Video container */}
                        <div className="relative w-full h-full rounded-lg overflow-hidden">
                            <video
                                key={activeBrand.videoUrl}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={activeBrand.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 