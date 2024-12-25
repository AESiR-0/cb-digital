import React from "react";

export default function Title({
  title1,
  title2,
  alignment,
}: {
  title1: string;
  title2: string;
  alignment: string;
}) {
  return (
    <h1
      className={`my-10 text-left font-clash text-[6.5rem] font-bold text-${alignment} uppercase animate-slide-up-fade-in`}
    >
      <span
        className="text-gradient blue inline-block pl-5 pb-1"
        style={{
          background: "linear-gradient(90deg, #8f98ff 1%, rgba(105, 114, 222, 0.4) 1% -2.96%, rgba(105, 114, 222, 0) 97.04%)",
          backgroundPosition: "0% 0%",
          backgroundSize: "100%",
          lineHeight: "0.9",
        }}
      >
        {title1}
      </span>
      <br />
      <span
        className="text-gradient blue inline-block pl-10 pb-1"
        style={{
          background: "linear-gradient(90deg, #8f98ff 1%, rgba(105, 114, 222, 0.4) 1% -2.96%, rgba(105, 114, 222, 0) 97.04%)",
          backgroundPosition: "0% 0%",
          backgroundSize: "100%",
          lineHeight: "0.9",
        }}
      >
        {title2}
      </span>
    </h1>
  );
}
