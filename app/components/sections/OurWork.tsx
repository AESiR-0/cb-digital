import React from "react";
import Image from "next/image";
import Title from "../Title";

const workContent = [
  {
    title: "Title 1",
    category: "Category 1",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  },
  {
    title: "Title 2",
    category: "Category 2",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  },
  {
    title: "Title 3",
    category: "Category 3",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  },
  {
    title: "Title 4",
    category: "Category 4",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  },
  {
    title: "Title 5",
    category: "Category 5",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  },
  {
    title: "Title 6",
    category: "Category 6",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  },
  {
    title: "Title 7",
    category: "Category 7",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  },
  {
    title: "Title 8",
    category: "Category 8",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  },
  {
    title: "Title 9",
    category: "Category 9",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  },
];

export default function OurWork() {
  return (
    <div className="w-full bg-primary px-4 sm:px-10 lg:px-20 py-10">
      <Title alignment="center" title2="" code="#007bff" title1="Our Work" />
      <div className="masonry sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {workContent.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-lg"
          >
            <Image
              alt={item.title}
              src={item.image}
              height={Math.floor(Math.random() * (500 - 250) + 250)} // Randomized height between 250-500px
              width={400} // Fixed width for better alignment
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="p-2">
              <h1 className="text-xl font-medium">{item.title}</h1>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
