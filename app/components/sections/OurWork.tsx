"use client"
import React, { useState } from "react";
import Image from "next/image";
import Title from "../Title";
import { useSwipeable } from "react-swipeable";
import placeholder from "@/public/static/work/placeholder.png";

// Import work content from Work.tsx
const workContent = [
  {
    title: "Podcasts",
    category: "Content Creation",
    content: "We create podcasts so captivating, they'll have listeners forgetting they're out of snacks.",
    videos: [
      "https://www.youtube.com/embed/DE6r3CPzEsY",
      "https://www.youtube.com/embed/t8woniGx3x0",
      "https://www.youtube.com/embed/un3--vdM4bE",
      "https://www.youtube.com/embed/sH5NelKJhG4",
    ]
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
    ]
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
    ]
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
    ]
  }
];

export default function OurWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workContent.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + workContent.length) % workContent.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    trackMouse: true,
  });

  const currentWork = workContent[currentIndex];

  return (
    <div className="w-full bg-primary px-4 sm:px-6 md:px-8 lg:px-20 py-6 sm:py-10">
      <Title alignment="center" title2="" code="#007bff" title1="Our Work" />
      
      <div {...handlers} className="relative w-full">
        <div className="flex flex-col lg:flex-row max-lg:px-4 font-clash w-full gap-4 sm:gap-6 md:gap-10">
          <div className="flex flex-col w-full gap-2 sm:gap-3 text-left">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">{currentWork.title}</h1>
            <p className="font-thin text-sm sm:text-base md:text-lg lg:text-xl">{currentWork.category}</p>
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">{currentWork.content}</p>
            
            {currentWork.videos ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {currentWork.videos.map((video, index) => (
                  <div key={index} className="aspect-video">
                    <iframe
                      src={video}
                      title={`${currentWork.title} ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {currentWork.images?.map((image, index) => (
                  <Image
                    key={index}
                    alt={`${currentWork.title} ${index + 1}`}
                    src={image}
                    height={400}
                    width={580}
                    className="rounded-lg w-full h-full object-cover"
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrev}
          className="absolute h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 left-2 sm:left-4 flex justify-center items-center top-1/2 -translate-y-1/2 bg-white text-black rounded-full text-sm sm:text-base"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          className="absolute h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 right-2 sm:right-4 flex justify-center items-center top-1/2 -translate-y-1/2 bg-white text-black rounded-full text-sm sm:text-base"
        >
          &#10095;
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
          {workContent.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
