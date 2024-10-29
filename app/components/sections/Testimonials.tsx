import React from "react";
import Carousel from "../Carousel";
import Title from "../Title";

export default function Testimonials() {
  return (
    <div className="bg-primary rounded-b   py-10 ">
      <Title alignment="center" title="Testimonials" />
      <div className="w-screen py-10">
        <Carousel />
      </div>
    </div>
  );
}
