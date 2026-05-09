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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 2);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 ${menuOpen ? "z-[110]" : "z-50"} flex items-center justify-between px-5 py-4 md:px-10 md:py-6 transition-colors duration-300 ${
          menuOpen
            ? "bg-transparent text-background"
            : pastHero
              ? "bg-background/40 backdrop-blur-sm text-foreground/80"
              : "bg-transparent text-white mix-blend-difference"
        }`}
      >
        <Link
          href="/"
          className="text-2xl md:text-4xl font-semibold tracking-tight"
        >
          La Luce Estetica
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-12">
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

        {/* Desktop book now */}
        <Link
          href="https://www.treatwell.gr/katasthma/la-luce-estetica-skin-clinic/"
          target="_blank"
          className="hidden md:block text-xl tracking-wide opacity-70 hover:opacity-100 transition-opacity"
        >
          book now &rarr;
        </Link>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative flex md:hidden flex-col justify-center items-center w-12 h-10 gap-[7px]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-10 h-[2px] bg-current transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
            }`}
          />
          <span
            className={`block w-10 h-[2px] bg-current transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Fullscreen mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-foreground text-background transition-opacity duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://www.treatwell.gr/katasthma/la-luce-estetica-skin-clinic/"
            className="mt-6 text-2xl tracking-wide opacity-70 hover:opacity-100 transition-opacity"
          >
            book now &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
