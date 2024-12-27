"use client";
import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

interface Obj {
  title: string;
  content: string;
  image: string;
  client: any;
}

export default function Carousel({
  content,
  section,
}: {
  content: Array<Obj>;
  section: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + content.length) % content.length
    );
  };

  // Swipeable settings
  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative h-[50vh] md:h-[60vh] lg:h-[50vh] font-clash text-left w-full  overflow-hidden"
    >
      {/* Carousel content */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {content.map((src, index) => (
          <div
            key={src.title}
            className="flex-shrink-0 w-full flex flex-col md:gap-10 md:flex-row px-10 md:px-20 justify-between items-center"
          >
            <div className="w-full md:w-1/2 text-left text-lg md:text-2xl flex flex-col gap-4">
              <h1 className="px-2 md:px-5">{src.content}</h1>
              <h2 className="text-base md:text-xl px-2 md:px-5 mt-2">
                - {src.client}
              </h2>
            </div>
            <div className="w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
              <Image
                src={src.image}
                alt={src.title}
                height={400}
                width={400}
                objectFit="cover"
                className="rounded-lg"
                style={{ maxHeight: '100%', width: 'auto' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute h-7 w-7 left-4 md:left-8 flex justify-center items-center top-1/2 -translate-y-1/2 bg-white text-black rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute h-7 w-7 right-4 md:right-8 flex justify-center items-center top-1/2 -translate-y-1/2 bg-white text-black rounded-full"
      >
        &#10095;
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {content.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
