"use client";
import React, { useState } from "react";

export function RoundedButton({
  text,
  size,
  section,
}: {
  text: string;
  size: string;
  section: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`w-full animate-slide-up-fade-in duration-500  h-20  scale-100   transition-all ${hover ? " opacity-90" : "opacity-100"
        } relative`}
    >
      {section !== "CTA" ? (
        <svg
          width="257"
          height="85"
          onMouseEnter={(e) => {
            e.preventDefault();
            setHover(true);
          }}
          onMouseLeave={(e) => {
            e.preventDefault();
            setHover(false);
          }}
          className="transition-all left-1/2 transform -translate-x-1/2 absolute duration-500"
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
              transition: "stroke-dashoffset 0.3s ease-in-out",
            }}
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="227"
          height="60"
          onMouseEnter={(e) => {
            e.preventDefault();
            setHover(true);
          }}
          onMouseLeave={(e) => {
            e.preventDefault();
            setHover(false);
          }}
          viewBox="0 0 227 60"
          className="scale-110"
          fill="none"
        >
          <path
            style={{
              strokeDasharray: "600",
              strokeDashoffset: hover ? "600" : "0",
              transition: "stroke-dashoffset 0.4s ease-in-out",
            }}
            d="M225.358 32.6673C225.376 37.0506 223.387 40.7621 219.123 43.9554C214.795 47.1959 208.175 49.8522 199.143 51.9448C181.094 56.1264 154.001 57.9315 117.998 58.1625C82.0047 58.3934 52.6866 56.9517 32.3903 53.0074C22.2297 51.0328 14.464 48.4548 9.26979 45.2359C4.10736 42.0366 1.68573 38.3481 1.66783 34.1026C1.64977 29.8184 4.09746 25.7032 9.29864 21.8612C14.5061 18.0146 22.2903 14.5931 32.4438 11.7376C52.7325 6.0319 82.0674 2.6984 118.011 2.46777C153.963 2.23709 180.984 5.21077 198.976 10.6553C207.976 13.3786 214.608 16.6886 218.969 20.4351C223.298 24.1537 225.339 28.2495 225.358 32.6673Z"
            stroke="white"
            stroke-width="3.06244"
          />
        </svg>
      )}

      <div
        onMouseEnter={(e) => {
          e.preventDefault();
          setHover(true);
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          setHover(false);
        }}
        className={`absolute  flex duration-500  ${hover ? "scale-95 opacity-90" : "scale-100 opacity-100"
          }  ${section == "CTA" ? "top-5 left-1/2" : " top-7 left-[45%]"} `}
      >
        <button
          className={`font-clash  font-bold text-white text-${size} uppercase`}
        >
          {text}
        </button>
      </div>
    </div>
  );
}
