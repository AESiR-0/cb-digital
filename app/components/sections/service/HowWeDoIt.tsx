// components/HowWeDoIt.js
import React from "react";

const HowWeDoIt = () => {
  const features = [
    {
      title: "Highlight Hunting",
      description:
        "We listen through your podcast to pick out the most engaging, viral-worthy moments. These are the clips that hook people, spark conversations, and keep them coming back for more.",
    },
    {
      title: "Snackable Content",
      description:
        "We get it—long podcasts are great, but quick, bite-sized clips are what get shared. We create short, impactful highlights that are perfect for Reels, TikToks, or Instagram Stories.",
    },
    {
      title: "Eye Catching Edits",
      description:
        "Great content is only as good as how it's presented. Our editing team knows how to add just the right amount of flair—whether it's adding captions, dynamic transitions, or visuals that grab attention.",
    },
    {
      title: "Emotional Hooks",
      description:
        "People don't just watch, they feel. We create edits that stir up emotions—whether it's laughter, shock, or inspiration, so that your content gets remembered.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-primary text-white py-20 px-5 md:px-20">
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold pb-8 text-center">HOW WE DO IT</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 max-w-full w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative md:gap-10   bg-[url('/static/card/HowWeDoIt.png')] bg-no-repeat bg-contain items-center p-3  md:px-10 text-white flex flex-col justify-center  rounded-lg shadow-lg h-[300px] md:h-[400px] lg:h-[450px]"
          >
            <h3 className="md:text-4xl text-xl  sm:text-3xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-lg md:text-2xl sm:text-xl text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeDoIt;
