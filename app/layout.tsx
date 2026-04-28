import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/smooth-scroll";
import { Navbar } from "./components/navbar";
import { Preloader } from "./components/preloader";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Luce Estetica",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
