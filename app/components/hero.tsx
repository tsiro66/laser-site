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
  const bgRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Phase 1 (0 → 0.5): scale image from 0.5 to 1
      tl.fromTo(
        imageRef.current,
        { scale: 0.5 },
        { scale: 1, ease: "none", duration: 0.5 },
        0,
      );

      // Phase 2 (0.5 → 1): panels split apart, bg fades, text fades
      tl.to(
        leftPanelRef.current,
        { xPercent: -100, ease: "power2.in", duration: 0.5 },
        0.5,
      );
      tl.to(
        rightPanelRef.current,
        { xPercent: 100, ease: "power2.in", duration: 0.5 },
        0.5,
      );
      tl.to(
        bgRef.current,
        { opacity: 0, ease: "none", duration: 0.4 },
        0.55,
      );
      tl.to(
        textRef.current,
        { opacity: 0, ease: "none", duration: 0.3 },
        0.5,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} data-hero className="relative h-[400vh] z-20">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background — fades out in phase 2 to reveal services behind */}
        <div ref={bgRef} className="absolute inset-0 bg-background" />

        {/* Image, scaled in phase 1 then split in phase 2 */}
        <div ref={imageRef} className="absolute inset-0 scale-50 origin-center">
          <div
            ref={leftPanelRef}
            className="absolute inset-0"
            style={{ clipPath: "inset(0 calc(50% - 1px) 0 0)" }}
          >
            <Image
              src="/hero-img.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div
            ref={rightPanelRef}
            className="absolute inset-0"
            style={{ clipPath: "inset(0 0 0 calc(50% - 1px))" }}
          >
            <Image
              src="/hero-img.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text overlay with mix-blend-difference */}
        <div
          ref={textRef}
          className="relative z-10 flex flex-col h-full mix-blend-difference text-white"
        >
          <div className="flex flex-col flex-1 px-5 pt-20 py-8 md:px-10 md:pt-24 md:py-12 justify-between">
            <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] leading-[0.9] uppercase tracking-tight font-medium max-w-2xl">
              A new era of beauty
            </h1>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <Link
                href="https://www.treatwell.gr/katasthma/la-luce-estetica-skin-clinic/"
                target="_blank"
                className="text-lg md:text-xl tracking-wide opacity-70 hover:opacity-100 transition-opacity pb-2 md:pb-4"
              >
                book now &rarr;
              </Link>

              <h2 className="text-[2rem] sm:text-[3rem] md:text-[5rem] leading-[0.9] uppercase tracking-tight font-medium sm:text-right max-w-3xl">
                Feel confident in the skin you are in
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
