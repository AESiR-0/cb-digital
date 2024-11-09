// components/WhyChooseUs.js
import React from "react";

const content = [
  {
    title: "Content Curation Pros",
    content:
      "We've got an eye for what works. We know what kind of content clicks with your audience and makes them stay.",
  },
  {
    title: "On Trend",
    content:
      "We stay on top of the latest social media trends so your content is always relevant and stands out in a crowded feed.",
  },
  {
    title: "Fast & Flexible",
    content:
      "Need content in a flash? No problem! We work fast and can adjust to fit your specific style and tone.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="flex  flex-col md:flex-row font-clash items-start justify-start bg-secondary text-white py-12 px-10 md:px-20">
      {/* Left Side - Title */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <h2 className="md:text-7xl max-md:px-2 max-md:font-bold max-md:text-center text-4xl  gap-2 flex md:flex-col flex-row font-bold leading-none">
          <span>WHY</span> <span>CHOOSE</span>
          <span>US</span>
        </h2>
        <span className="md:hidden block h-[1px] mt-2 bg-gray-400 opacity-85 w-full px-10"></span>
      </div>

      {/* Right Side - Content */}
      <div className="w-full h-full flex flex-col justify-center md:w-2/3 space-y-6">
        {content.map((data, index) => (
          <div className="px-2">
            <h3 className="text-4xl max-md:text-3xl font-semibold">
              {data.title}
            </h3>
            <p className="text-gray-300 text-2xl py-3 font-light">
              {data.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
