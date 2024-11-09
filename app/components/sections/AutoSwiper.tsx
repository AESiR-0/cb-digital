"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface AutoSwiperProps {
  images: string[]; // Array of image URLs to display in the carousel
}

const AutoSwiper: React.FC<AutoSwiperProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide (move by 1 image)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // UseEffect to automatically change the slide every 2 seconds (2000ms)
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {/* Slide container */}
      <div
        className="flex transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, idx) => (
          <div key={idx} className="flex-shrink-0 w-full h-full">
            <Image
              src={image}
              alt={`Slide ${idx + 1}`}
              width={600} // Adjust based on your image size requirements
              height={300} // Adjust based on your image size requirements
              objectFit="cover" // Ensures images cover the container
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSwiper;
