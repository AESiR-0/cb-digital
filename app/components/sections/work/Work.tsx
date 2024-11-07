import React from "react";
import Carousel from "../../Carousel";

export default function Work() {
  return (
    <div className="font-clash py-10 h-full bg-secondary w-screen">
      <h1 className="text-5xl font-semibold  pt-10 uppercase text-center">
        PODCASTS
      </h1>
      <div className="flex justify-center w-full">
        <p className=" w-1/2 text-xl px-10 py-5  text-center">
          We create captivating podcasts that bring your story to life, engaging
          listeners with professional editing and seamless production.
        </p>
      </div>
      <div className="my-10">
        <Carousel />
      </div>
    </div>
  );
}
