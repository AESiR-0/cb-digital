import React from "react";
import Carousel from "../Carousel";
import Title from "../Title";

const content = [
  {
    title: "Testimonial 1",
    content:
      "KK is all around very easy to work with. He proved his avid leadership by taking full charge of the project when I was under the weather, his script has a lot of spelling mistakes but all in all 7/10",
    client: "John Doe",
    image: "/static/work/placeholder.png",
  },
  {
    title: "Testimonial 2",
    content:
      "Pratik is all around very easy to work with. He proved his avid leadership by taking full charge of the project when I was under the weather, his script has a lot of spelling mistakes but all in all 7/10",
    client: "John Doe",
    image: "/static/work/placeholder.png",
  },
];
export default function Testimonials() {
  return (
    <div className="bg-primary rounded-b   py-10 ">
      <Title alignment="center" title="Testimonials" />
      <div className="w-screen py-10">
        <Carousel section="testimonials" content={content} />
      </div>
    </div>
  );
}
