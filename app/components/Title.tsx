import React from "react";

export default function Title({
  title,
  alignment,
}: {
  title: string;
  alignment: "left" | "center" | "right";
}) {
  return (
    <h1
      className={`my-10 font-clash font-bold uppercase ${alignment === "center"
        ? "text-center max-md:text-5xl "
        : alignment === "right"
          ? "text-right max-md:text-7xl"
          : "text-left max-md:text-7xl"
        }   max-md:text-center leading-none text-[5.5rem]`}
    >
      {title}
    </h1>
  );
}
