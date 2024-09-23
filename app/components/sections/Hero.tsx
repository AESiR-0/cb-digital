import React from "react";
import Card from "../Cards";

export default function Hero({
  title,
  subheading,
  body,
}: {
  title: string;
  subheading: string;
  body: string;
}) {
  return (
    <div className="w-screen h-[80vh]  gap-96 flex items-center overflow-hidden ">
      <div className=" w-[750px]  h-fit leading-none px-20 text-white font-clash text-[6.5rem] font-bold  uppercase">
        <h1> {title}</h1>
        <h5 className="text-[32px] normal-case my-3 font-clash font-semibold leading-none">
          {subheading}
        </h5>
        <p className="text-lg font-normal font-clash leading-tight normal-case pr-24">
          {body}
        </p>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}
