import React from "react";
import AutoSwiper from "../AutoSwiper";

const content = [
  {
    title: "podcasts",
    color:'secondary',
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
    color:'primary',
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
    color:'secondary',
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
    <div className="font-clash py-10 h-full  w-full">
      {content.map((data, index) => (
        <div className={`bg-${data.color}`} key={index}>
          <h1 className="text-5xl font-semibold  pt-10 uppercase text-center">
            {data.title}
          </h1>
          <div className="flex justify-center w-full">
            <p className=" w-1/2 text-xl px-10 py-5  text-center">
              {data.content}
            </p>
          </div>
          <div className="my-10">
            <AutoSwiper images={data.images} />
          </div>
        </div>
      ))}
    </div>
  );
}
