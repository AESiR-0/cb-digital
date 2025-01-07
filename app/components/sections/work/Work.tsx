import React from "react";
import Highlighter from "../../Highlighter";

const content = [
  {
    title: "podcasts",
    color: "bg-secondary",
    content:
      "We create podcasts so captivating, they'll have listeners forgetting they're out of snacks.",
    yt: [
      "https://www.youtube.com/embed/DE6r3CPzEsY",
      "https://www.youtube.com/embed/t8woniGx3x0",
      "https://www.youtube.com/embed/un3--vdM4bE",
      "https://www.youtube.com/embed/sH5NelKJhG4",
    ],
  },
  {
    title: "shorts & reels",
    color: "bg-primary",
    content:
      "We make shorts and reels so good, even your ex might double-tap. Quick, punchy, and scroll-stopping—because who has time for boring?",
    images: [
      "/static/work/placeholder.png",
      "/static/work/placeholder_3.png",
      "/static/work/placeholder_2.png",
    ],
  },
  {
    title: "talking head videos",
    color: "bg-secondary",
    content:
      "We turn your talking head videos into “talk of the town” videos. Because why just talk when you can dazzle?",
    yt: [
      "https://www.youtube.com/embed/Xpwb2I66bss",
      "https://www.youtube.com/embed/h5lpQBsDDZI",
      "https://www.youtube.com/embed/wsZJyGYXmIs",
      "https://www.youtube.com/embed/6cq68BcdUdU",
    ],
  },
  {
    title: "vlogs",
    color: "bg-primary",
    content:
      "We create vlogs that make your life look cooler than it already is. Perfect cuts, eye-catching shots, and just the right amount of 'wow' to keep your audience glued to the screen.",
    ig: [
      "https://www.instagram.com/reel/C3K1oDfrUsq/embed",
      "https://www.instagram.com/reel/C1mzBg1IHRa/embed",
      "https://www.instagram.com/reel/DAscYgLKT6g/embed",
      "https://www.instagram.com/reel/CydGmYey9Ml/embed",
    ],
  },
  {
    title: "repurposed reels",
    color: "bg-secondary",
    content:
      "We transform your podcasts into engaging reels, maximizing reach and impact by repurposing content into bite-sized, shareable moments that captivate audiences.",
    images: [
      "/static/work/placeholder.png",
      "/static/work/placeholder_3.png",
      "/static/work/placeholder_2.png",
    ],
    ig: [
      "https://www.instagram.com/embed/DEb-XeguSmP",
      "https://www.instagram.com/embed/DCEtVc_qgNG",
      "https://www.instagram.com/embed/DCjZZjxS3sE",
      "https://www.instagram.com/embed/C6oPg-qSxQj",
    ]
  },
  {
    title: "PM Ads",
    color: "bg-primary",
    content:
      "We take your ads and give them the glow-up they deserve. Think less 'skip' and more 'shut up and take my money'.",
    yt: [
      "https://www.youtube.com/embed/U6eeTFhkhh4",
      "https://www.youtube.com/embed/KFt7L0WQmPo",
      "https://www.youtube.com/embed/cA7IHF3Ar2s",
      "https://www.youtube.com/embed/WuVB-4OOceY",
    ],
  },
];

export default function Work() {
  return (
    <div className="font-clash pt-10 w-full">
      {content.map((data, index) => (
        <div className={`${data.color} py-12`} key={index}>
          <h1 className="text-5xl font-semibold uppercase text-center">
            <Highlighter title1={data.title} code="#8f98ff" alignment="center" />
          </h1>
          <div className="flex justify-center w-full">
            <p className="w-full md:w-3/4 lg:w-1/2 text-xl px-10 py-3 text-center">
              {data.content}
            </p>
          </div>
          <div className="md:my-10 m-0 w-full px-10">
            {data.yt ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {data.yt.map((videoUrl, videoIndex) => (
                  <div
                    key={videoIndex}
                    className="aspect-video flex items-center justify-center overflow-hidden rounded-lg shadow-lg"
                  >
                    <iframe
                      src={videoUrl}
                      title={`YouTube video ${videoIndex + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                ))}
              </div>
            ) : data.ig ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {data.ig.map((instaUrl, instaIndex) => (
                  <div
                    key={instaIndex}
                    className="aspect-video flex items-center justify-center overflow-hidden rounded-lg shadow-lg"
                  >
                    <iframe
                      src={instaUrl}
                      title={`Instagram video ${instaIndex + 1}`}
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="h-80 flex items-center justify-center overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`Work image ${imageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
