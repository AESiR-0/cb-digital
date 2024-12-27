import React from "react";
import MarqueeSwiper from "../AutoSwiper";

const content = [
  {
    title: "podcasts",
    color: "bg-secondary",
    content:
      "We create captivating podcasts that bring your story to life, engaging listeners with professional editing and seamless production.",
    images: [
      "/static/work/placeholder.png",
      "/static/work/placeholder_3.png",
      "/static/work/placeholder_2.png",
      "/static/work/placeholder.png",
      "/static/work/placeholder_3.png",
      "/static/work/placeholder_2.png",
    ],
  },
  {
    title: "editing",
    color: "bg-primary",
    content:
      "We deliver expert editing services that enhance your videos, ensuring clarity and impact while maintaining your unique voice and vision.",
    images: [
      "/static/work/placeholder.png",
      "/static/work/placeholder_3.png",
      "/static/work/placeholder_2.png",
      "/static/work/placeholder.png",
      "/static/work/placeholder_3.png",
      "/static/work/placeholder_2.png",
    ],
  },
  {
    title: "repurposed reels",
    color: "bg-secondary",
    content:
      "We transform your podcasts into engaging reels, maximizing reach and impact by repurposing content into bite-sized, shareable moments that captivate audiences.",
    images: [
      "/static/work/placeholder.png",
      "/static/work/placeholder_3.png",
      "/static/work/placeholder_2.png",
      "/static/work/placeholder.png",
      "/static/work/placeholder_3.png",
      "/static/work/placeholder_2.png",
    ],
  },
];

export default function Work() {
  return (
    <div className="font-clash pt-10 w-full">
      {content.map((data, index) => (
        <div className={`${data.color} py-12`} key={index}>
          <h1 className="text-5xl font-semibold uppercase text-center mb-5">
            {data.title}
          </h1>
          <div className="flex justify-center w-full">
            <p className="w-full md:w-3/4 lg:w-1/2 text-xl px-10 py-5 text-center">
              {data.content}
            </p>
          </div>
          <div className="md:my-10 m-0 w-screen px-5">
            <MarqueeSwiper images={data.images} />
          </div>
        </div>
      ))}
    </div>
  );
}
