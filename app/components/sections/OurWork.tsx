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
    <div className="w-full bg-primary px-4 sm:px-10 lg:px-20 py-10">
      <Title alignment="center" title="Our Work" />
      <div className="flex flex-col lg:flex-row max-lg:px-10 font-clash w-full gap-10">
        <div className="flex flex-col w-full lg:w-1/2 gap-3 text-left">
          <h1 className="text-2xl lg:text-3xl font-medium">Title</h1>
          <p className="font-thin text-lg lg:text-xl">Category</p>
          <Image
            alt="title"
            src={placeholder}
            height={400}
            width={580}
            className="rounded-lg w-full"
          />
        </div>
        <div className="flex flex-col lg:mt-28 w-full lg:w-1/2 gap-3 text-left">
          <h1 className="text-2xl lg:text-3xl text-right font-medium">Title</h1>
          <p className="font-thin text-lg lg:text-xl">Category</p>
          <Image
            alt="title"
            src={placeholder}
            height={400}
            width={580}
            className="rounded-lg w-full"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-lg:px-10 font-clash w-full gap-10 mt-10">
        <div className="flex flex-col w-full lg:w-1/2 gap-3 text-left">
          <h1 className="text-2xl lg:text-3xl font-medium">Title</h1>
          <p className="font-thin text-lg lg:text-xl">Category</p>
          <Image
            alt="title"
            src={placeholder}
            height={400}
            width={580}
            className="rounded-lg w-full"
          />
        </div>
        <div className="flex flex-col lg:mt-28 w-full lg:w-1/2 gap-3 text-left">
          <h1 className="text-2xl lg:text-3xl text-right font-medium">Title</h1>
          <p className="font-thin text-lg lg:text-xl">Category</p>
          <Image
            alt="title"
            src={placeholder}
            height={400}
            width={580}
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
