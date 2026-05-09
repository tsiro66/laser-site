"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function Booking() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: true,
        },
      });

      tl.fromTo(
        textRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, ease: "none" },
      );

      tl.fromTo(
        linkRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: "none" },
        0.5,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="px-5 py-20 md:px-10 md:py-40 min-h-screen flex flex-col items-center justify-center text-center"
    >
      <h2
        ref={textRef}
        className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] leading-[0.95] uppercase tracking-tight font-medium max-w-5xl"
      >
        Your skin deserves this
      </h2>

      <Link
        ref={linkRef}
        href="https://www.treatwell.gr/katasthma/la-luce-estetica-skin-clinic/"
        target="_blank"
        className="mt-10 md:mt-16 text-xl md:text-2xl tracking-wide opacity-70 hover:opacity-100 transition-opacity"
      >
        book your session &rarr;
      </Link>
    </section>
  );
}
