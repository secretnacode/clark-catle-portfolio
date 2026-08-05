const HIGHLIGHTS = [
  {
    title: "Backend Architecture",
    desc: "Structured service layers, middleware pipelines, and maintainable system design.",
  },
  {
    title: "API Development",
    desc: "RESTful endpoints with consistent conventions, validation, and error handling.",
  },
  {
    title: "Database Design",
    desc: "Normalized schemas, relationships, and indexes tuned for query performance.",
  },
  {
    title: "Security Implementation",
    desc: "Authentication, authorization, token-based access, and input protection.",
  },
  {
    title: "Deployment",
    desc: "Server configuration with Nginx, PM2 process management, and production hardening.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative border-b border-border py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono-label text-primary mb-4 block">
            04 / Experience
          </span>
          <h2
            id="experience-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            Professional Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="border-l-2 border-primary pl-6">
              <span className="font-mono text-xs text-muted-foreground">
                CAPSTONE PROJECT
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-2 mb-4">
                Backend Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Developed backend systems for a delivery management platform by
                designing RESTful APIs, implementing authentication and
                authorization, managing database relationships, and improving
                system reliability.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className="bg-card p-6">
                  <h4 className="text-foreground font-semibold text-sm mb-2">
                    {h.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {h.desc}
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
