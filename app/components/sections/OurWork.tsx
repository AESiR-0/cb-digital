import React from "react";
import Image from "next/image";
import Title from "../Title";
import placeholder from "@/public/static/work/placeholder.png";

const workContent = [
  {
    title: "",
    category: "",
    image: "",
  },
];

export default function OurWork() {
  return (
    <div className="container">
      <Title alignment="center" title="Our Work" />
      <div className="flex font-clash px-24 w-full h-full">
        <div className="flex flex-col w-1/2 gap-3 text-left">
          <h1 className="text-3xl font-medium">Title</h1>
          <p className="font-thin text-xl">Category</p>
          <Image
            alt="title"
            src={placeholder}
            height={400}
            width={580}
            className="rounded-lg"
          />
        </div>
        <div className="flex mt-28 items-end flex-col w-1/2 gap-3 text-left">
          <h1 className="text-3xl text-right font-medium">Title</h1>
          <p className="font-thin text-xl">Category</p>
          <Image
            alt="title"
            src={placeholder}
            height={400}
            width={580}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex font-clash px-24  w-full h-full">
        <div className="flex flex-col w-1/2 gap-3 text-left">
          <h1 className="text-3xl font-medium">Title</h1>
          <p className="font-thin text-xl">Category</p>
          <Image
            alt="title"
            src={placeholder}
            height={400}
            width={580}
            className="rounded-lg"
          />
        </div>
        <div className="flex mt-28 items-end flex-col w-1/2 gap-3 text-left">
          <h1 className="text-3xl text-right font-medium">Title</h1>
          <p className="font-thin text-xl">Category</p>
          <Image
            alt="title"
            src={placeholder}
            height={400}
            width={580}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
