import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type projectType = {
  slug: string;
  name: string;
  description: string;
  role: string;
  tags: string[];
}[];

const PROJECTS: projectType = [
  {
    slug: "argo",
    name: "Opalus / Argo",
    description:
      "A delivery booking and management system designed to replace manual delivery workflows with a centralized digital platform.",
    role: "Backend Developer",
    tags: ["Laravel", "PHP", "PostgreSQL", "REST API", "Nginx", "PM2"],
  },
  {
    slug: "agro-farm",
    name: "Agro Farm Management System",
    description:
      "A farm management platform designed to organize agricultural operations through structured digital workflows and centralized data management.",
    role: "Full-Stack Developer",
    tags: ["React / Next.js", "TypeScript", "Backend API", "Database System"],
  },
  {
    slug: "tidytask",
    name: "TidyTask",
    description:
      "A productivity-focused task management application that helps users organize and prioritize tasks based on urgency.",
    role: "Full-Stack Developer",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative border-b border-border py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono-label text-primary mb-4 block">
              03 / Projects
            </span>
            <h2
              id="projects-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
            >
              Featured Work
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A selection of full-stack and backend projects. Each solves a
              real-world problem through structured architecture and clean
              implementation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <article
              key={p.name}
              className="group relative flex flex-col border border-border bg-card hover:border-foreground/20 transition-colors"
            >
              <div className="relative aspect-video w-full bg-secondary overflow-hidden border-b border-border">
                <div className="absolute inset-0 grid-motif opacity-50" />
                <span className="absolute top-4 left-4 font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs text-zinc-700 uppercase tracking-widest">
                    Project Preview
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex flex-col flex-1 p-7">
                <span className="font-mono-label text-primary mb-2">
                  {p.role}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono py-1 px-2 border border-border text-muted-foreground uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${p.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 h-11 border border-border text-foreground font-semibold text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors min-h-11"
                >
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
