import React from "react";
import Carousel from "../Carousel";
import SectionHeader from "../SectionHeader";

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
    <div className="bg-primary rounded-b min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <SectionHeader subtitle="Testimonials" title="What Our Clients Say" />
      <div className="w-full max-w-screen-lg mx-auto py-6 sm:py-8 lg:py-10">
        <Carousel section="testimonials" content={content} />
      </div>
    </div>
  );
}
