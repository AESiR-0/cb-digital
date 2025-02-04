import React from "react";

function hexToRGBA(hex: string, alpha: number = 0.4): string {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


export default function Hero() {
  return (
    <div className="flex flex-col h-[40vh] md:h-[60vh] md:flex-row justify-end items-center w-screen px-5 md:px-20 mt-10 ">
      {/* Title Section */}
      <div className="w-full md:w-1/2  text-center md:text-left">
        <h1 className="text-5xl md:flex md:flex-col max-md:-mt-20 sm:text-6xl md:text-[7rem] font-clash font-bold uppercase">

          <span
            className="text-gradient blue inline-block pl-5 pb-1"
            style={{
              background: `linear-gradient(90deg,#8f98ff 1%, ${hexToRGBA('#8f98ff')} 1% -2.96%, rgba(105, 114, 222, 0) 97.04%)`,
              backgroundPosition: "0% 0%",
              backgroundSize: "100%",
              lineHeight: "0.9",
            }}
          >
            Our
          </span>


          <span
            className="text-gradient blue inline-block pl-5 pb-1"
            style={{
              background: `linear-gradient(90deg,#8f98ff 1%, ${hexToRGBA('#8f98ff')} 1% -2.96%, rgba(105, 114, 222, 0) 97.04%)`,
              backgroundPosition: "0% 0%",
              backgroundSize: "100%",
              lineHeight: "0.9",
            }}
          > <span>Work</span></span>
        </h1>
        <span className="md:hidden block h-[1px] mt-5 bg-gray-400 opacity-85 w-full px-20"></span>
      </div>

      {/* Description Section */}
      <div className="w-full md:w-1/2 px-5 md:px-10 md:text-3xl text-lg sm:text-3xl font-clash text-center md:text-left mt-6 md:mt-0">
        At CB Digital, we craft content that clicks—literally. From concept to final cut, we create videos, reels, and more that amplify your message, engage your audience, and leave a lasting impact.
      </div>
    </div>
  );
}
