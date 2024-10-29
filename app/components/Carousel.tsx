// components/Carousel.js
"use client";
import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import placeholder from "@/public/static/work/placeholder.png";

const images = [
  {
    title: "Testimonial 1",
    content:
      "KK is all around very easy to work with. He proved his avid leadership by taking full charge of the project when I was under the weather, his script has a lot of spelling mistakes but all in all 7/10",
    client: "John Doe",
    image: placeholder,
  },
  {
    title: "Testimonial 2",
    content:
      "Pratik is all around very easy to work with. He proved his avid leadership by taking full charge of the project when I was under the weather, his script has a lot of spelling mistakes but all in all 7/10",
    client: "John Doe",
    image: placeholder,
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Swipeable settings
  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="relative h-[50vh] font-clash text-left w-full overflow-hidden">
      {/* Carousel Images */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={src.title}
            className="flex-shrink-0 w-full flex px-20 justify-between items-center"
          >
            <div className="w-1/2 text-left text-2xl flex-col gap-10">
              <h1 className="text-2xl px-5">{src.content}</h1>
              <h2 className="text-xl px-5 mt-2">- {src.client}</h2>
            </div>
            <div className="w-1/2 flex justify-center">
              <Image
                src={src.image}
                alt={src.title}
                height={600}
                width={550}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute h-7 w-7 left-4 flex justify-center items-center top-1/2 -translate-y-1/2 bg-white text-black rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute h-7 w-7 right-4 flex justify-center items-center top-1/2 -translate-y-1/2 bg-white text-black rounded-full"
      >
        &#10095;
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-5  left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
