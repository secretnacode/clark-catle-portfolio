import { ArrowUpRight } from "lucide-react";

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
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono-label text-primary mb-4 block">
              05 / Certifications
            </span>
            <h2
              id="certs-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
            >
              Selected Certifications
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A focused selection of professional credentials.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 h-11 px-5 border border-border text-foreground text-sm font-semibold hover:border-foreground/40 transition-colors min-h-11"
          >
            View All Certifications
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTS.map((c) => (
            <div
              key={c.title}
              className="border border-border bg-card p-7 hover:border-foreground/20 transition-colors"
            >
              <span className="font-mono text-xs text-primary mb-4 block">
                {c.date}
              </span>
              <h3 className="text-foreground font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
