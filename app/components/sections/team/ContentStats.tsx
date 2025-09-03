"use client";
import React from "react";
import SectionHeader from "../../SectionHeader";

type StatItem = {
  value: string;
  label: string;
  elevation: "base" | "raised";
};

const statsData: StatItem[] = [
  {
    value: "9200+",
    label: "Videos Created",
    elevation: "base",
  },
  {
    value: "1.1B+",
    label: "Monthly Views",
    elevation: "raised",
  },
  {
    value: "300+",
    label: "Relationships Built",
    elevation: "base",
  },
];

export default function ContentStats() {
  return (
    <div className="w-full py-20 px-4 bg-[#00000] flex flex-col justify-center items-center">
      <SectionHeader subtitle="Over The Years" title=" " />
      <div className="w-full max-w-7xl justify-center flex flex-wrap items-center gap-12 md:gap-24">
        {statsData.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
}

function StatCard({ stat }: { stat: StatItem }) {
  return (
    <div
      className={`
        aspect-square h-56 w-48 rounded-[2.5rem] flex flex-col items-center justify-center 
        relative
        bg-transparent
        overflow-hidden
        transition-all duration-300 ease-out
      `}
    >
      {/* Content */}
      <div className="flex flex-col items-center">
        <span className="text-[1.75rem] md:text-[2rem] lg:text-[2.75rem] font-extrabold leading-none mb-2 text-white/90">
          {stat.value}
        </span>
        <span className="text-sm md:text-base font-bold text-center whitespace-pre-line text-white/70">
          {stat.label}
        </span>
      </div>
    </div>
  );
}
