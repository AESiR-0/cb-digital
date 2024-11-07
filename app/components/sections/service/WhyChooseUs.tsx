// components/WhyChooseUs.js
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col md:flex-row font-clash items-start justify-start bg-secondary text-white py-12 px-6">
      {/* Left Side - Title */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold leading-none">WHY<br />CHOOSE<br />US</h2>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-2/3 space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Content Curation Pros</h3>
          <p className="text-gray-300">
            We’ve got an eye for what works. We know what kind of content clicks with your audience and makes them stay.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">On Trend</h3>
          <p className="text-gray-300">
            We stay on top of the latest social media trends so your content is always relevant and stands out in a crowded feed.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Fast & Flexible</h3>
          <p className="text-gray-300">
            Need content in a flash? No problem! We work fast and can adjust to fit your specific style and tone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
