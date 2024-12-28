"use client";
import React, { useState, useEffect } from "react";

const contentApproachData = [
  {
    number: 12000,
    text: "Videos Created",
  },
  {
    number: 1.2,
    text: "Views",
  },
  {
    number: 300,
    text: "Relations",
  },

];

export default function ContentApproach() {
  const [counts, setCounts] = useState(contentApproachData.map(() => 0));

  useEffect(() => {
    const duration = 2000; // Duration of the animation in milliseconds
    const interval = 50; // Interval for updating the count
    const steps = duration / interval;

    const counters = contentApproachData.map((item, index) => {
      const increment = item.number / steps;
      let currentCount = 0;

      const counterInterval = setInterval(() => {
        currentCount += increment;
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.min(parseFloat(currentCount.toFixed(1)), item.number);
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
    <div className="py-10 flex flex-col gap-28 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col text-center w-full gap-10 items-start">
        <h2 className="font-clash w-full leading-tight text-4xl lg:text-5xl font-semibold mb-10 lg:mb-0">
          Crafted Content Approach
        </h2>
        <p className="text-lg lg:text-xl w-full mb-10 lg:mb-0 px-5 md:px-10">
          At CB Digital, we swiftly address any mishaps by previous agencies and tackle large-scale projects with expertise and precision.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 lg:gap-24 text-2xl lg:text-3xl w-full">
        {contentApproachData.map((data, index) => (
          <div key={index} className="flex flex-col items-center">
            <h6 className="text-4xl lg:text-5xl font-light mb-1 lg:mb-4">
              <span className="inline-block font-bold tracking-wider text-center">
                {data.text === 'Views' ? `${counts[index]}B` : `${counts[index]}`}
                <span className="text-[#785dc8] pl-1">+</span>
              </span>
            </h6>
            <p className="font-bold text-[#785dc8] text-base lg:text-xl text-center">
              {data.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 