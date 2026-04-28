import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/smooth-scroll";

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
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
