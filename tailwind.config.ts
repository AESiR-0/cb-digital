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
        secondary: "#1F1F21",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        clash: "var(--font-clash)",
        tan: "var(--font-tan)",
      },
      keyframes: {
        'slide-up-fade-in': {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '50%': { transform: 'translateY(20)', opacity: '0.5' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up-fade-in': 'slide-up-fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
