import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "#151515",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        clash: "var(--font-clash)",
        wig: "var(--font-wig)",
      },
    },
  },
  plugins: [],
};
export default config;
