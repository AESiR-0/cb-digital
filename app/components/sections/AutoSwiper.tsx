"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface AutoSwiperProps {
  images: string[]; // Array of image URLs to display in the carousel
}

const AutoSwiper: React.FC<AutoSwiperProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 1;
  // Function to go to the next slide (move by 3 images)
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + imagesPerSlide) % images.length
    );
  };

  // Use effect to automatically change the slide every 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {/* Slide container */}
      <div className="flex gap-10 h-[30vh] transition-all w-full duration-1000 ease-in-out">
        {images.map((image, idx) => (
          <Image
            src={image}
            alt={`Slide ${idx + 1}`}
            width={600} // Adjust based on your image size requirements
            height={300} // Adjust based on your image size requirements
          />
        ))}
      </div>

      {/* Optional navigation buttons */}
      {/* <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50"
        onClick={nextSlide}
      >
        &#10095;
      </button> */}
    </div>
  );
};

export default AutoSwiper;
