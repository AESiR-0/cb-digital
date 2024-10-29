import React from "react";

export default function Title({
  title,
  alignment,
}: {
  title: string;
  alignment: string;
}) {
  return (
    <h1
      className={`my-10 text-left font-clash text-[6.5rem] font-bold text-${alignment}  uppercase`}
    >
      {title}
    </h1>
  );
}
