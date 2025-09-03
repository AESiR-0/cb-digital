"use client";
import React, { useState, useEffect } from "react";
import SectionHeader from "../../SectionHeader";

const content = [
  {
    title: "happy clients",
    number: 150,
    content:
      "Had to show the number here, can't fit 100 testimonials in our website. (really think we should get a new developer)",
  },
  {
    title: "podcasts produced",
    number: 200,
    content:
      "Had to show the number here, can't fit 100 testimonials in our website. (really think we should get a new developer)",
  },
  {
    title: "reels produced",
    number: 2000,
    content:
      "We are not kidding, literally counted. (had an intern do it, instead of making coffee) ",
  },
  {
    title: "thumbnails made",
    number: 1000,
    content:
      "Well, this annoys us the most but we still do that to get the clicks! (we're quite good at it)",
  },
];

export default function AgencySnapshot() {
  const [counts, setCounts] = useState(content.map(() => 0));

  useEffect(() => {
    const duration = 2000; // Duration of the animation in milliseconds
    const interval = 50; // Interval for updating the count
    const steps = duration / interval;

    const counters = content.map((item, index) => {
      const increment = item.number / steps;
      let currentCount = 0;

      const counterInterval = setInterval(() => {
        currentCount += increment;
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.min(Math.round(currentCount), item.number);
          return newCounts;
        });

        if (currentCount >= item.number) {
          clearInterval(counterInterval);
        }
      }, interval);

      return counterInterval;
    });

    return () => {
      counters.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="w-full bg-[#00000] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="OUR EXPERIENCE" title="Agency Snapshot" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {content.map((data, index) => (
            <div key={index} className="text-center group">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white/90 uppercase tracking-wider">
                  {data.title}
                </h3>
                <div className="text-4xl lg:text-5xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                  {counts[index]}+
                </div>
                <p className="text-sm lg:text-base text-white/70 leading-relaxed">
                  {data.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
