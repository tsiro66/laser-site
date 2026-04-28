"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<HTMLSpanElement[]>([]);

  const lines = [
    "We believe beauty",
    "is not transformation —",
    "it is revelation.",
  ];

  useGSAP(
    () => {
      lineRefs.current.forEach((line, i) => {
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
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="px-10 py-40 min-h-screen flex flex-col justify-center">
      <p className="text-lg tracking-widest uppercase opacity-50 mb-24">
        Philosophy
      </p>

      <div className="flex flex-col gap-4">
        {lines.map((line, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) lineRefs.current[i] = el;
            }}
            className="block text-[5.5rem] leading-[1.05] uppercase tracking-tight font-medium"
          >
            {line}
          </span>
        ))}
      </div>
    </section>
  );
}
