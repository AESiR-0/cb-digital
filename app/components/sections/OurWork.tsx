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
    <div className="w-screen bg-primary  px-20">
      <Title alignment="center" title="Our Work" />
      <div className="flex max-md:px-10 max-md:flex-col  font-clash  w-full h-full">
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
      <div className="flex max-md:px-10 max-md:flex-col  font-clash  w-full h-full">
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
