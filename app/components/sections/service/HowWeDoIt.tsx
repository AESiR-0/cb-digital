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
    <div className="flex font-clash h-screen  flex-col items-center justify-center my-10  bg-primary text-white">
      <h2 className="text-7xl font-bold pb-8">HOW WE DO IT</h2>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2  max-w-1/3  w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="py-10  pl-8 pr-20 h-[400px] w-[550px] bg-[url('/static/card/HowWeDoIt.png')] bg-no-repeat text-white"
          >
            <h3 className="text-4xl font-semibold mb-5">{feature.title}</h3>
            <p className="text-2xl text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeDoIt;
