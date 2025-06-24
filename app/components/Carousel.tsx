"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

interface Obj {
  title: string;
  content: string;
  image: string;
  client: string;
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

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  // Function to render client information with proper styling
  const renderClientInfo = (client: string) => {
    const parts = client.split('\n');
    if (parts.length === 2) {
      return (
        <div className="flex flex-col">
          <span className="text-white font-semibold">{parts[0]}</span>
          <span className="text-white/60 text-sm font-normal">{parts[1]}</span>
        </div>
      );
    }
    return <span className="text-white font-semibold">{client}</span>;
  };

  return (
    <div
      {...handlers}
      className="relative font-clash text-left w-full overflow-hidden"
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
              <h1 className="px-2 md:px-5 text-white/90">{src.content}</h1>
              <div className="px-2 md:px-5 mt-2">
                {renderClientInfo(src.client)}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
              <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden">
                <Image
                  src={src.image}
                  alt={src.title}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
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
