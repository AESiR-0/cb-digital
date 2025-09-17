"use client";
import React, { useState, useRef, useEffect } from "react";
import SectionHeader from "../SectionHeader";
import ReactPlayer from "react-player";
import { useSwipeable } from "react-swipeable";

const allVideos = [
  {
    id: "growthx-trailer",
    title: "Sports",
    videoUrl: "https://pratt-css.com/TeamK/Vertical/Ep 01 - Sports F1.webm",
    category: "Podcasts",
    categoryDescription:
      "We create podcasts so captivating, they'll have listeners forgetting they're out of snacks.",
    duration: "1:45",
    views: "8.2K",
  },
  {
    id: "aashna-podcast",
    title: "Red Bull Racing - Built to Win",
    videoUrl:
      "https://pratt-css.com/TeamK/Vertical/Ep 02 - Red Bull Racing - Built to Win.webm",
    category: "Podcasts",
    categoryDescription:
      "We create podcasts so captivating, they'll have listeners forgetting they're out of snacks.",
    duration: "3:12",
    views: "12.5K",
  },
  {
    id: "prachyam",
    title: "Mercedes - Built from Precision",
    videoUrl: "https://pratt-css.com/TeamK/Vertical/Ep 03 - Mercedes - Built from Precision.webm",
    category: "Podcasts",
    categoryDescription:
      "We create podcasts so captivating, they'll have listeners forgetting they're out of snacks.",
    duration: "2:18",
    views: "9.8K",
  },
  {
    id: "growth-school",
    title: "Growth School",
    videoUrl: "https://pratt-css.com/TeamK/Vertical/Ep 04 - Ferrari - Built from Blood.webm",
    category: "Shorts & Reels",
    categoryDescription:
      "We make shorts and reels so good, even your ex might double-tap. Quick, punchy, and scroll-stopping—because who has time for boring?",
    duration: "0:45",
    views: "25.3K",
  },
  {
    id: "amish-intro",
    title: "Amish Tripathi",
    videoUrl: "https://pratt-css.com/TeamK/Technology/Ep 05 - McLaren - Built from Grit.webm",
    category: "Shorts & Reels",
    categoryDescription:
      "We make shorts and reels so good, even your ex might double-tap. Quick, punchy, and scroll-stopping—because who has time for boring?",
    duration: "1:15",
    views: "18.7K",
  },
  {
    id: "kuku-fm",
    title: "Kuku FM",
    videoUrl: "https://pratt-css.com/TeamK/Vertical/Ep 06 Aston Martin -  Built from Revival.webm",
    category: "Shorts & Reels",
    categoryDescription:
      "We make shorts and reels so good, even your ex might double-tap. Quick, punchy, and scroll-stopping—because who has time for boring?",
  },
].slice(0, 6); // Limit to 6 items

export default function OurWork() {
  const [playingVideos, setPlayingVideos] = useState<{
    [key: string]: boolean;
  }>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRefs = useRef<{ [key: string]: ReactPlayer | null }>({});
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePlay = (videoId: string) => {
    console.log("Playing video:", videoId);
    // Find the index of the video being played
    const videoIndex = allVideos.findIndex(video => video.id === videoId);
    
    // Only play if it's the current active video
    if (videoIndex === currentIndex) {
      // Pause all other videos first
      Object.keys(playingVideos).forEach((id) => {
        if (id !== videoId) {
          setPlayingVideos((prev) => ({ ...prev, [id]: false }));
        }
      });
      setPlayingVideos((prev) => ({ ...prev, [videoId]: true }));
    }
  };

  const handlePause = (videoId: string) => {
    console.log("Pausing video:", videoId);
    setPlayingVideos((prev) => ({ ...prev, [videoId]: false }));
  };

  const handleVideoEnded = (videoId: string) => {
    console.log("Video ended:", videoId);
    setPlayingVideos((prev) => ({ ...prev, [videoId]: false }));
  };

  const handleError = (videoId: string, error: any) => {
    console.error("Video error:", videoId, error);
  };

  const handleReady = (videoId: string) => {
    console.log("Video ready:", videoId);
  };

  // Carousel navigation functions
  const goToNext = () => {
    // Pause all videos when changing slides
    Object.keys(playingVideos).forEach((id) => {
      setPlayingVideos((prev) => ({ ...prev, [id]: false }));
    });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allVideos.length);
  };

  const goToPrev = () => {
    // Pause all videos when changing slides
    Object.keys(playingVideos).forEach((id) => {
      setPlayingVideos((prev) => ({ ...prev, [id]: false }));
    });
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + allVideos.length) % allVideos.length
    );
  };

  const goToSlide = (index: number) => {
    // Pause all videos when changing slides
    Object.keys(playingVideos).forEach((id) => {
      setPlayingVideos((prev) => ({ ...prev, [id]: false }));
    });
    setCurrentIndex(index);
  };

  // Swipeable settings
  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    trackMouse: true,
  });

  return (
    <div className="w-full bg-primary px-2 sm:px-4 md:px-8 lg:px-20 py-4 sm:py-10 overflow-x-hidden">
      <SectionHeader subtitle="Our Portfolio" title="Glimpses" />
      <div className="max-w-7xl mx-auto">
        {/* Carousel Container */}
        <div
          {...handlers}
          className="relative w-full mt-6"
        >
          {/* Carousel Track - Show all videos with active centered */}
          <div className="relative overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex gap-4 items-center transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(calc(50% - ${(currentIndex + 0.5) * 320}px))`,
                paddingLeft: '50vw',
                paddingRight: '50vw'
              }}
            >
              {allVideos.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex-shrink-0 flex justify-center px-2 transition-all duration-500 ${
                    idx === currentIndex 
                      ? 'opacity-100 scale-105' 
                      : 'opacity-40 hover:opacity-60'
                  }`}
                  onClick={() => goToSlide(idx)}
                >
                  <div className="shadow-[0_40_0px_rgba(255,0,0,0.2)] rounded-xl overflow-hidden flex flex-col group hover:shadow-[0_40_0px_rgba(255,0,0,0.4)] transition-all duration-300 w-full max-w-xs mx-auto cursor-pointer">
                    <div className="relative w-full aspect-[9/16] bg-[#00000] overflow-hidden">
                      <ReactPlayer
                        ref={(el: ReactPlayer | null) => {
                          playerRefs.current[item.id] = el;
                        }}
                        url={item.videoUrl}
                        playing={playingVideos[item.id] && idx === currentIndex}
                        width="100%"
                        height="100%"
                        style={{ objectFit: "cover" }}
                        onPlay={() => handlePlay(item.id)}
                        onPause={() => handlePause(item.id)}
                        onEnded={() => handleVideoEnded(item.id)}
                        onError={(error) => handleError(item.id, error)}
                        onReady={() => handleReady(item.id)}
                        loop
                        controls={idx === currentIndex}
                        muted={idx !== currentIndex}
                      />

                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 bg-red-500/90 px-2 py-1 rounded text-xs text-white font-medium z-10">
                        <div className="text-white text-sm leading-tight">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 flex justify-center items-center bg-white/90 text-black rounded-full hover:bg-white transition-colors duration-200 z-20 shadow-lg"
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 flex justify-center items-center bg-white/90 text-black rounded-full hover:bg-white transition-colors duration-200 z-20 shadow-lg"
          >
            &#10095;
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {allVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-red-500 scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
