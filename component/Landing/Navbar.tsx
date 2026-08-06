"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link
          href="#top"
          className="font-mono text-sm tracking-tight text-foreground hover:text-primary transition-colors"
        >
          <span className="text-primary">/</span>clark.catle
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={`/${l.href}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/"
            className="inline-flex items-center gap-2 h-10 px-5 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors min-h-10"
            download="Clark_David_Catle_Resume.pdf"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </Link>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="px-6 py-4 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-muted-foreground hover:text-foreground py-2"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 h-10 px-5 bg-primary text-primary-foreground text-sm font-semibold"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
