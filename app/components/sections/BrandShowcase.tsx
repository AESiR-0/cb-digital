"use client";
import React, { useState, useEffect, useRef } from 'react';
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
        videoUrl: 'https://res.cloudinary.com/dnqkxuume/video/upload/v1750372443/jomfuuqzprmyqm51ilzp.mp4',
        activeColor: 'from-blue-600/20 to-blue-800/20'
    },
    { 
        name: 'LITTLE JOYS', 
        category: 'KIDS WELLNESS', 
        videoUrl: 'https://res.cloudinary.com/dnqkxuume/video/upload/v1750372440/vfh2r6iyjwppj3vhbyt2.mp4',
        activeColor: 'from-purple-500/20 to-pink-500/20'
    },
    { 
        name: 'POCKET FM', 
        category: 'AUDIO ENTERTAINMENT', 
        videoUrl: 'https://res.cloudinary.com/dnqkxuume/video/upload/v1750372444/rtmxwthyeof7mqb3erkd.mp4',
        activeColor: 'from-orange-500/20 to-red-500/20'
    },
    { 
        name: 'GROWW', 
        category: 'INVESTMENT', 
        videoUrl: 'https://res.cloudinary.com/dnqkxuume/video/upload/v1750372435/b0h0qtkxe0akqiox43bg.mp4',
        activeColor: 'from-green-500/20 to-emerald-500/20'
    },
    { 
        name: 'COP 28 UAE', 
        category: 'SUSTAINABILITY', 
        videoUrl: 'https://res.cloudinary.com/dnqkxuume/video/upload/v1750372444/cfrcx0ryaoehcvqnih1w.mp4',
        activeColor: 'from-teal-500/20 to-cyan-500/20'
    },
    { 
        name: 'NISSAN', 
        category: 'AUTOMOTIVE', 
        videoUrl: 'https://res.cloudinary.com/dnqkxuume/video/upload/v1750372440/bamkf61wimdyxdtv911a.mp4',
        activeColor: 'from-red-600/20 to-red-800/20'
    },
    { 
        name: 'SUGARFIT', 
        category: 'FITNESS & WELLNESS', 
        videoUrl: 'https://res.cloudinary.com/dnqkxuume/video/upload/v1750372446/hidyf0yw2rw1jadbzgx9.mp4',
        activeColor: 'from-pink-500/20 to-rose-500/20'
    },
];

export default function BrandShowcase() {
    const [activeBrand, setActiveBrand] = useState<Brand>(brands[0]);
    const [cachedVideos, setCachedVideos] = useState<Map<string, HTMLVideoElement>>(new Map());
    const [isLoading, setIsLoading] = useState(true);
    const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

    // Cache all videos on component mount
    useEffect(() => {
        const cacheVideos = async () => {
            const videoCache = new Map<string, HTMLVideoElement>();
            
            for (const brand of brands) {
                const video = document.createElement('video');
                video.src = brand.videoUrl;
                video.preload = 'auto';
                video.muted = true;
                video.loop = true;
                video.playsInline = true;
                
                // Store video element in cache
                videoCache.set(brand.videoUrl, video);
                videoRefs.current.set(brand.videoUrl, video);
                
                // Start loading the video
                try {
                    await video.load();
                    console.log(`Cached video: ${brand.name}`);
                } catch (error) {
                    console.error(`Failed to cache video for ${brand.name}:`, error);
                }
            }
            
            setCachedVideos(videoCache);
            setIsLoading(false);
        };

        cacheVideos();
    }, []);

    // Preload next video when active brand changes
    useEffect(() => {
        const currentIndex = brands.findIndex(brand => brand.name === activeBrand.name);
        const nextIndex = (currentIndex + 1) % brands.length;
        const nextBrand = brands[nextIndex];
        
        // Preload next video
        const nextVideo = videoRefs.current.get(nextBrand.videoUrl);
        if (nextVideo && nextVideo.readyState < 2) {
            nextVideo.load();
        }
    }, [activeBrand]);

    return (
        <div className="w-full max-md:hidden min-h-screen bg-[#171717] flex items-center justify-center py-20 px-4 md:px-8 lg:px-20">
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
                        {/* Video container */}
                        <div className="relative w-full h-full rounded-lg overflow-hidden z-0">
                            {isLoading ? (
                                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                                    <div className="text-white">Loading videos...</div>
                                </div>
                            ) : (
                                <video
                                    key={activeBrand.videoUrl}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="auto"
                                >
                                    <source src={activeBrand.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Hidden video elements for caching */}
            <div className="hidden">
                {brands.map((brand) => (
                    <video
                        key={brand.name}
                        ref={(el) => {
                            if (el) videoRefs.current.set(brand.videoUrl, el);
                        }}
                        src={brand.videoUrl}
                        preload="auto"
                        muted
                        loop
                        playsInline
                    />
                ))}
            </div>
        </div>
    );
} 