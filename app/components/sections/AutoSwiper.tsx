"use client";
import React from "react";
import Image from "next/image";

interface MarqueeSwiperProps {
  images: string[]; // Array of image URLs to display in the carousel
  speed?: number; // Speed of the marquee scroll in seconds
}

const MarqueeSwiper: React.FC<MarqueeSwiperProps> = ({
  images,
  speed = 20,
}) => {
  // Duplicate images array to create seamless infinite scroll effect
  const marqueeImages = [...images, ...images];

  return (
    <div className="relative w-full  h-full overflow-hidden">
      <div
        className="flex w-[200%] h-full animate-marquee whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {marqueeImages.map((image, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-1/2 max-md:h-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <Image
              src={image}
              alt={`Marquee Image ${idx + 1}`}
              width={800}
              height={600}
              objectFit="cover"
              className="w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Keyframes for continuous marquee animation */
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MarqueeSwiper;
