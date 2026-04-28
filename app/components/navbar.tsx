import Link from "next/link";

const navLinks = [
  { href: "/services", label: "services" },
  { href: "/prices", label: "prices" },
  { href: "/about", label: "about" },
];

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 text-blend">
      <Link href="/" className="text-4xl font-semibold tracking-tight">
        La luce
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
