import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-10 py-16 border-t border-foreground/10">
      <div className="flex items-start justify-between">
        <div>
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            La luce
          </Link>
          <p className="mt-4 text-base opacity-50 max-w-xs leading-relaxed">
            Where science meets beauty. Premium laser aesthetics for those who
            know what they deserve.
          </p>
        </div>

        <div className="flex gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-widest opacity-40">
              Navigate
            </span>
            <Link
              href="/services"
              className="text-lg opacity-70 hover:opacity-100 transition-opacity"
            >
              services
            </Link>
            <Link
              href="/prices"
              className="text-lg opacity-70 hover:opacity-100 transition-opacity"
            >
              prices
            </Link>
            <Link
              href="/about"
              className="text-lg opacity-70 hover:opacity-100 transition-opacity"
            >
              about
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-widest opacity-40">
              Contact
            </span>
            <a
              href="mailto:hello@laluce.com"
              className="text-lg opacity-70 hover:opacity-100 transition-opacity"
            >
              hello@laluce.com
            </a>
            <a
              href="tel:+1234567890"
              className="text-lg opacity-70 hover:opacity-100 transition-opacity"
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 flex items-center justify-between text-sm opacity-30">
        <span>&copy; {new Date().getFullYear()} La Luce Estetica</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}
