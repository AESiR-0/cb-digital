"use client"
import React from "react";
import SectionHeader from "../SectionHeader";
import Image from "next/image";

const placeholderLogo = "/static/work/placeholder.png";

const workContent = [
  {
    title: "Podcasts",
    category: "Content Creation",
    content: "We create podcasts so captivating, they'll have listeners forgetting they're out of snacks.",
    videos: [
      "https://res.cloudinary.com/dnqkxuume/video/upload/v1750373059/Pocket_fm_lip_sync_h03uur.webm",
      "https://res.cloudinary.com/dnqkxuume/video/upload/v1750373050/Trailer-_GrowthX_ybg0ac.webm",
      "https://www.youtube.com/embed/un3--vdM4bE",
      "https://www.youtube.com/embed/sH5NelKJhG4",
    ],
    images: [placeholderLogo],
  },
  {
    title: "Shorts & Reels",
    category: "Social Media",
    content: "We make shorts and reels so good, even your ex might double-tap. Quick, punchy, and scroll-stopping—because who has time for boring?",
    images: [
      "/static/work/placeholder.png",
      "/static/work/placeholder_3.png",
      "/static/work/placeholder_2.png",
    ]
  },
  {
    title: "Talking Head Videos",
    category: "Video Production",
    content: "We turn your talking head videos into 'talk of the town' videos. Because why just talk when you can dazzle?",
    videos: [
      "https://www.youtube.com/embed/Xpwb2I66bss",
      "https://www.youtube.com/embed/h5lpQBsDDZI",
      "https://www.youtube.com/embed/wsZJyGYXmIs",
      "https://www.youtube.com/embed/6cq68BcdUdU",
    ],
    images: [placeholderLogo],
  },
  {
    title: "Vlogs",
    category: "Content Creation",
    content: "We create vlogs that make your life look cooler than it already is. Perfect cuts, eye-catching shots, and just the right amount of 'wow' to keep your audience glued to the screen.",
    videos: [
      "https://www.instagram.com/reel/C3K1oDfrUsq/embed",
      "https://www.instagram.com/reel/C1mzBg1IHRa/embed",
      "https://www.instagram.com/reel/DAscYgLKT6g/embed",
      "https://www.instagram.com/reel/CydGmYey9Ml/embed",
    ],
    images: [placeholderLogo],
  },
  {
    title: "PM Ads",
    category: "Advertising",
    content: "We take your ads and give them the glow-up they deserve. Think less 'skip' and more 'shut up and take my money'.",
    videos: [
      "https://www.youtube.com/embed/U6eeTFhkhh4",
      "https://www.youtube.com/embed/KFt7L0WQmPo",
      "https://www.youtube.com/embed/cA7IHF3Ar2s",
      "https://www.youtube.com/embed/WuVB-4OOceY",
    ],
    images: [placeholderLogo],
  }
];

// Flatten all videos with their parent info
const allVideos = workContent.flatMap(item =>
  (item.videos || []).map((video, idx) => ({
    video,
    title: item.title,
    description: item.content,
    logo: item.images && item.images.length > 0 ? item.images[0] : placeholderLogo,
  }))
).slice(0, 6); // Limit to 6 items

export default function OurWork() {
  return (
    <div className="w-ful l bg-primary px-4 sm:px-6 md:px-8 lg:px-20 py-6 sm:py-10">
      <SectionHeader subtitle="Our Portfolio" title="Our Work" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {allVideos.map((item, idx) => (
            <div key={idx} className="shadow-[0_40_0px_rgba(255,0,0,0.2)] rounded-xl overflow-hidden flex flex-col">
              <div className="relative w-full aspect-video bg-[#010101]">
                <video
                  src={item.video}
                  title={`Work Video ${idx + 1}`}
                  
                  className="w-full h-full"
                />
                {/* Play overlay (optional, for style) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#010101"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3">
                <Image
                  src={item.logo}
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-full bg-white border border-gray-200 shadow"
                />
                <div className="flex-1">
                  <div className="font-bold text-white text-base leading-tight mb-1">{item.title}</div>
                  <div className="text-xs leading-snug font-medium">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
