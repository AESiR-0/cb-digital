"use client";
import React, { useState } from "react";

export function RoundedButton({ text }: { text: string }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={(e) => {
        e.preventDefault();
        setHover(true);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setHover(false);
      }}
      className={`scale-100 bg-primary  transition-all ${
        hover ? "scale-95 opacity-90" : "opacity-100"
      } relative`}
    >
      <svg
        width="257"
        height="85"
        className="transition-all duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M254.53 38.6398C254.837 48.6099 246.071 58.7843 225.868 66.8911C205.874 74.9145 175.562 80.4974 134.966 81.7496C94.3794 83.0015 61.1161 79.3822 37.9921 72.6599C26.4198 69.2958 17.5144 65.1907 11.506 60.6304C5.49565 56.0687 2.61944 51.2481 2.47036 46.4148C2.32127 41.5815 4.8949 36.5928 10.6127 31.6693C16.3286 26.7474 24.964 22.1013 36.307 18.0303C58.9727 9.89555 91.9497 4.233 132.536 2.98106C173.132 1.72884 203.73 5.4329 224.182 12.2086C244.846 19.0549 254.222 28.6697 254.53 38.6398Z"
          stroke="white"
          strokeWidth="4.37811"
          style={{
            strokeDasharray: "600",
            strokeDashoffset: hover ? "600" : "0",
            transition: "stroke-dashoffset 0.4s ease-in-out",
          }}
        />
      </svg>
      <div
        className={`absolute ${
          hover ? "scale-95 opacity-90" : "scale-100 opacity-100"
        } top-7 left-16`}
      >
        <button className="font-clash font-bold text-white text-3xl uppercase">
          {text}
        </button>
      </div>
    </div>
  );
}
