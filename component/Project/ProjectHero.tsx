import { projectType } from "@/type";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectHero({ project }: { project: projectType }) {
  const allTags = [
    ...project.stack.frontend,
    ...project.stack.backend,
    ...project.stack.database,
    ...project.stack.deployment,
  ];

  return (
    <section className="relative border-b border-border pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-motif mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <span className="font-mono-label text-primary mb-5 block">
          {project.period} / Case Study
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6 leading-[0.95]">
          {project.name}
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
          {project.tagline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-10">
          <div className="bg-card p-6">
            <span className="font-mono text-xs text-primary block mb-2">
              ROLE
            </span>
            <p className="text-foreground font-semibold">{project.role}</p>
          </div>
          <div className="bg-card p-6">
            <span className="font-mono text-xs text-primary block mb-2">
              TYPE
            </span>
            <p className="text-foreground font-semibold">{project.period}</p>
          </div>
          <div className="bg-card p-6">
            <span className="font-mono text-xs text-primary block mb-2">
              STACK
            </span>
            <p className="text-foreground font-semibold">
              {project.stack.backend[0]} / {project.stack.database[0]}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono py-1 px-2 border border-border text-muted-foreground uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-6 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors min-h-11"
          >
            <Github className="w-4 h-4" />
            GitHub Repository
          </a>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-6 border border-border text-foreground text-sm font-semibold hover:border-foreground/40 transition-colors min-h-11"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}
