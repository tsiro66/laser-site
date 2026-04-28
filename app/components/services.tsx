"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Laser Hair Removal",
    description:
      "Precision light technology for lasting smoothness. Gentle, effective, permanent.",
  },
  {
    number: "02",
    title: "Skin Rejuvenation",
    description:
      "Restore your natural radiance. Targeted treatments that renew texture and tone.",
  },
  {
    number: "03",
    title: "Body Contouring",
    description:
      "Sculpt and refine without surgery. Non-invasive treatments shaped to you.",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        sectionRef.current,
        { xPercent: 100 },
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );

      const items = gsap.utils.toArray<HTMLElement>(".service-item");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative z-10 bg-background px-5 py-20 md:px-10 md:py-40 -mt-[100vh]">
      <p className="text-lg tracking-widest uppercase opacity-50 mb-12 md:mb-24">
        What we offer
      </p>

      <div className="flex flex-col">
        {services.map((service) => (
          <div
            key={service.number}
            className="service-item flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between border-t border-foreground/15 py-8 md:py-16 md:gap-16"
          >
            <span className="text-lg opacity-40 shrink-0">
              {service.number}
            </span>
            <h3 className="text-[2rem] sm:text-[3rem] md:text-[4rem] leading-[1] uppercase tracking-tight font-medium flex-1">
              {service.title}
            </h3>
            <p className="text-base md:text-xl leading-relaxed opacity-60 max-w-sm md:text-right">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
