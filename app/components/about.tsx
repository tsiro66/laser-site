"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<HTMLSpanElement[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  const lines = [
    "We believe beauty",
    "is not transformation —",
    "it is revelation.",
  ];

  useGSAP(
    () => {
      lineRefs.current.forEach((line) => {
        gsap.fromTo(
          line,
          { opacity: 0.1 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: line,
              start: "top 80%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="px-5 py-20 md:px-10 md:py-40 min-h-screen flex flex-col justify-center">
      <p className="text-lg tracking-widest uppercase opacity-50 mb-12 md:mb-24">
        Philosophy
      </p>

      <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-16 lg:gap-24">
        <div className="flex-1 flex flex-col gap-2 md:gap-4">
          {lines.map((line, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) lineRefs.current[i] = el;
              }}
              className="block text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.05] uppercase tracking-tight font-medium"
            >
              {line}
            </span>
          ))}
        </div>
        <div
          ref={imageRef}
          className="relative w-full md:w-[32%] md:max-w-md aspect-[3/4] shrink-0 overflow-hidden"
        >
          <Image
            src="/image1.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 32vw"
            className="object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
