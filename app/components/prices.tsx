"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pricing = [
  { treatment: "Full Body Laser", session: "€250", package: "€1,200 / 6" },
  { treatment: "Underarms", session: "€60", package: "€280 / 6" },
  { treatment: "Bikini Line", session: "€80", package: "€380 / 6" },
  { treatment: "Legs", session: "€150", package: "€720 / 6" },
  { treatment: "Skin Rejuvenation", session: "€180", package: "€860 / 6" },
  { treatment: "Body Contouring", session: "€300", package: "€1,400 / 6" },
];

export function Prices() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray<HTMLElement>(".price-row");
      rows.forEach((row, i) => {
        gsap.fromTo(
          row,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              end: "top 70%",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="px-5 py-20 md:px-10 md:py-40">
      <p className="text-lg tracking-widest uppercase opacity-50 mb-12 md:mb-24">
        Prices
      </p>

      <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 md:gap-x-20 gap-y-0">
        {/* Header */}
        <div className="text-xs md:text-sm uppercase tracking-widest opacity-40 pb-4 md:pb-8">
          Treatment
        </div>
        <div className="text-xs md:text-sm uppercase tracking-widest opacity-40 pb-4 md:pb-8 text-right">
          Session
        </div>
        <div className="text-xs md:text-sm uppercase tracking-widest opacity-40 pb-4 md:pb-8 text-right">
          Package
        </div>

        {pricing.map((item) => (
          <div key={item.treatment} className="contents price-row">
            <div className="text-lg sm:text-2xl md:text-3xl font-medium py-4 md:py-7 border-t border-foreground/15">
              {item.treatment}
            </div>
            <div className="text-base sm:text-xl md:text-2xl py-4 md:py-7 border-t border-foreground/15 text-right opacity-70">
              {item.session}
            </div>
            <div className="text-base sm:text-xl md:text-2xl py-4 md:py-7 border-t border-foreground/15 text-right opacity-50">
              {item.package}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
