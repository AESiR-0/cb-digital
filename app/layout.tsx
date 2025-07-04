import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Template from "./template";
import { Navbar } from "./components/Navbar";

const clashDisplay = localFont({
  src: "./fonts/Clash_Display/ClashDisplay-Variable.ttf",
  variable: "--font-clash",
});

const tan = localFont({
  src: "./fonts/Tan/tanheadline-Regular.ttf",
  variable: "--font-tan",
});

export const metadata: Metadata = {
  title: "Team K ",
  description: "We don't Overthink, We Overdeliver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${tan.variable} overflow-x-hidden  scroll-smooth h-full relative bg-primary  max-md:overflow-x-hidden  antialiased`}
      >
        <Navbar />
        <div className=" h-full main font-clash relative z-20 bg-primary   text-white  w-full border-b-transparent rounded-b-3xl">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
