"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";


gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.5 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} data-hero className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        {/* Image */}
        <div
          ref={imageRef}
          className="absolute inset-0 scale-50 origin-center"
        >
          <Image
            src="/hero-img.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Text overlay with mix-blend-difference */}
        <div className="relative z-10 flex flex-col h-full mix-blend-difference text-white">
          <div className="flex flex-col flex-1 px-10 pt-24 py-12 justify-between">
          <h1 className="text-[7rem] leading-[0.9] uppercase tracking-tight font-medium max-w-3xl">
            Be your own Muse
          </h1>

          <div className="flex items-end justify-between">
            <Link
              href="/book"
              className="text-xl tracking-wide opacity-70 hover:opacity-100 transition-opacity pb-4"
            >
              book now &rarr;
            </Link>

            <h2 className="text-[5rem] leading-[0.9] uppercase tracking-tight font-medium text-right max-w-3xl">
              Feel confident in the skin you are in
            </h2>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
