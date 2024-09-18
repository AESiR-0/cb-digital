import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: "./fonts/Clash_Display/ClashDisplay-Variable.ttf",
  variable:'--font-clash'
});

const wiga = localFont({
  src: "./fonts/Wiga/Wiga-Regular.ttf",
  variable:'--font-wig'
});



export const metadata: Metadata = {
  title: "CB Digital ",
  description: "A media agency that creates professional podcasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${wiga.variable} bg-primary overflow-x-hidden  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
