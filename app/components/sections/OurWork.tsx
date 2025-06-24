"use client"
import React, { useState, useRef } from "react";
import SectionHeader from "../SectionHeader";
import ReactPlayer from "react-player";

const allVideos = [
  {
    id: "growthx-trailer",
    title: "GrowthX",
    videoUrl: "https://res.cloudinary.com/dnqkxuume/video/upload/v1750373050/Trailer-_GrowthX_ybg0ac.webm",
    category: "Podcasts",
    categoryDescription: "We create podcasts so captivating, they'll have listeners forgetting they're out of snacks.",
    duration: "1:45",
    views: "8.2K"
  },
  {
    id: "aashna-podcast",
    title: "The Hub Bengaluru",
    videoUrl: "https://res.cloudinary.com/dnqkxuume/video/upload/v1750790694/Aashna_Podcast_-_Trailer_mwpv4s.webm",
    category: "Podcasts",
    categoryDescription: "We create podcasts so captivating, they'll have listeners forgetting they're out of snacks.",
    duration: "3:12",
    views: "12.5K"
  },
  {
    id: "prachyam",
    title: "Prachyam",
    videoUrl: "https://res.cloudinary.com/dnqkxuume/video/upload/v1750791574/Prachyam_bic2sz.webm",
    category: "Podcasts",
    categoryDescription: "We create podcasts so captivating, they'll have listeners forgetting they're out of snacks.",
    duration: "2:18",
    views: "9.8K"
  },
  {
    id: "growth-school",
    title: "Growth School",
    videoUrl: "https://res.cloudinary.com/dnqkxuume/video/upload/v1750791445/Growth_School_qhov8n.webm",
    category: "Shorts & Reels",
    categoryDescription: "We make shorts and reels so good, even your ex might double-tap. Quick, punchy, and scroll-stopping—because who has time for boring?",
    duration: "0:45",
    views: "25.3K"
  },
  {
    id: "amish-intro",
    title: "Amish Tripathi",
    videoUrl: "https://res.cloudinary.com/dnqkxuume/video/upload/v1750791427/Amish_Intro_-_Website_ckrezl.webm",
    category: "Shorts & Reels",
    categoryDescription: "We make shorts and reels so good, even your ex might double-tap. Quick, punchy, and scroll-stopping—because who has time for boring?",
    duration: "1:15",
    views: "18.7K"
  }
].slice(0, 6); // Limit to 6 items

export default function OurWork() {
  const [playingVideos, setPlayingVideos] = useState<{ [key: string]: boolean }>({});
  const playerRefs = useRef<{ [key: string]: ReactPlayer | null }>({});

  const handlePlay = (videoId: string) => {
    console.log('Playing video:', videoId);
    // Pause all other videos first
    Object.keys(playingVideos).forEach(id => {
      if (id !== videoId) {
        setPlayingVideos(prev => ({ ...prev, [id]: false }));
      }
    });
    setPlayingVideos(prev => ({ ...prev, [videoId]: true }));
  };

  const handlePause = (videoId: string) => {
    console.log('Pausing video:', videoId);
    setPlayingVideos(prev => ({ ...prev, [videoId]: false }));
  };

  const handleVideoEnded = (videoId: string) => {
    console.log('Video ended:', videoId);
    setPlayingVideos(prev => ({ ...prev, [videoId]: false }));
  };

  const handleError = (videoId: string, error: any) => {
    console.error('Video error:', videoId, error);
  };

  const handleReady = (videoId: string) => {
    console.log('Video ready:', videoId);
  };

  return (
    <div className="w-full bg-primary px-4 sm:px-6 md:px-8 lg:px-20 py-6 sm:py-10">
      <SectionHeader subtitle="Our Portfolio" title="Our Work" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {allVideos.map((item, idx) => (
            <div key={item.id} className="shadow-[0_40_0px_rgba(255,0,0,0.2)] rounded-xl overflow-hidden flex flex-col group hover:shadow-[0_40_0px_rgba(255,0,0,0.4)] transition-all duration-300">
              <div className="relative w-full aspect-video bg-[#171717] overflow-hidden">
                <ReactPlayer
                  ref={(el: ReactPlayer | null) => { playerRefs.current[item.id] = el; }}
                  url={item.videoUrl}
                  playing={playingVideos[item.id]}
                  width="100%"
                  height="100%"
                  style={{ objectFit: 'cover' }}
                  onPlay={() => handlePlay(item.id)}
                  onPause={() => handlePause(item.id)}
                  onEnded={() => handleVideoEnded(item.id)}
                  onError={(error) => handleError(item.id, error)}
                  onReady={() => handleReady(item.id)}
                  loop
                  controls={true}
                  muted={false}
                />

                {/* Video Overlay */}



                {/* Category Badge */}
                <div className="absolute top-2 left-2 bg-red-500/90 px-2 py-1 rounded text-xs text-white font-medium z-10">
                  <div className=" text-white text-sm leading-tight ">{item.title}</div>
                </div>
              </div>

            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
