"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "services" },
  { href: "/prices", label: "prices" },
  { href: "/about", label: "about" },
];

export function Navbar() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 2);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 transition-colors duration-300 ${
        pastHero
          ? "bg-background/40 backdrop-blur-sm text-foreground/80"
          : "bg-transparent text-white mix-blend-difference"
      }`}
    >
      <Link href="/" className="text-4xl font-semibold tracking-tight">
        La Luce Estetica
      </Link>

      <div className="flex items-center gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xl tracking-wide opacity-70 hover:opacity-100 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="/book"
        className="text-xl tracking-wide opacity-70 hover:opacity-100 transition-opacity"
      >
        book now &rarr;
      </Link>
    </nav>
  );
}
