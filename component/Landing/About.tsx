import { Terminal, Database, Server, Code2 } from "lucide-react";

const FOCUS = [
  {
    icon: Server,
    title: "Backend Architecture",
    desc: "Designing RESTful APIs, authentication flows, and system structures that scale.",
  },
  {
    icon: Database,
    title: "Database Systems",
    desc: "Modeling relationships, ensuring data integrity, and optimizing queries.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable, well-documented code that other engineers can build on.",
  },
  {
    icon: Terminal,
    title: "Full-Stack Delivery",
    desc: "Shipping end-to-end features from database schema to user interface.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-b border-border py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="font-mono-label text-primary mb-4 block">
              01 / About
            </span>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6"
            >
              A motivated developer with hands-on experience building full-stack
              applications.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m an Information Technology graduate specializing in
                full-stack development with a backend focus. I build web
                applications using Laravel, Next.js, React, and PostgreSQL.
              </p>
              <p>
                I enjoy designing APIs, modeling databases, and architecting
                software systems that are reliable and maintainable. My approach
                centers on clean code, efficient architecture, and practical
                solutions to real problems.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {FOCUS.map((f) => (
                <div
                  key={f.title}
                  className="bg-card p-7 hover:bg-secondary/50 transition-colors"
                >
                  <f.icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="text-foreground font-semibold mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
