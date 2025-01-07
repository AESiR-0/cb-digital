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

export default function Title({
    title1,
    code,
    alignment,
}: {
    title1: string;
    code: string;
    alignment: string;
}) {


    return (
        <h1
            className={`my-2 text-center font-clash  font-bold text-${alignment} uppercase animate-slide-up-fade-in`}
        >
            <span
                className="text-gradient blue inline-block pl-5 pb-1"
                style={{
                    background: `linear-gradient(90deg,${code} 1%, ${hexToRGBA(code || " ")} 1% -2.96%, rgba(105, 114, 222, 0) 97.04%)`,
                    backgroundPosition: "0% 0%",
                    backgroundSize: "100%",
                    lineHeight: "0.9",
                }}
            >
                {title1}
            </span>

        </h1>
    );
}
