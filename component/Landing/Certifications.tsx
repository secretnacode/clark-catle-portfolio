import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CERTS = [
  {
    title: "Backend Development Certification",
    provider: "Provider",
    date: "2024",
  },
  { title: "Full-Stack Web Development", provider: "Provider", date: "2024" },
  { title: "Database Design & SQL", provider: "Provider", date: "2023" },
];

export default function Certifications() {
  return (
    <section
      aria-labelledby="certs-heading"
      className="relative border-b border-border py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono-label text-primary mb-4 block">
              05 / Certifications
            </span>
            <h2
              id="certs-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
            >
              Selected Certifications
            </h2>
          </div>
          <Link
            href="https://drive.google.com/drive/folders/1ev8ahhVeLynqMOMvTgiAN6mRSxHFNQ2U?usp=sharing"
            className="inline-flex items-center gap-2 h-11 px-5 border border-border text-foreground text-sm font-semibold hover:border-foreground/40 transition-colors min-h-11"
            target="_blank"
          >
            View All Certifications
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
