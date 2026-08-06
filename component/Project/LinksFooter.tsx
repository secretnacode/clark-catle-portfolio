import { LinkCardType, linkType } from "@/type";
import { ArrowUpRight, Github, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

export default function LinksFooter({
  link,
  index,
}: {
  link: linkType;
  index: number;
}) {
  return (
    <section className="relative border-b border-border py-20 lg:py-24">
      <div className="absolute inset-0 grid-motif mask-[radial-gradient(ellipse_50%_60%_at_50%_50%,#000,transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <span className="font-mono-label text-primary mb-4 block">
          {index} / Links
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-10">
          Explore the project
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {link.github && (
            <LinkCard
              icon={Github}
              label="Repository"
              value="GitHub"
              href={link.github}
            />
          )}
          {link.live && (
            <LinkCard
              icon={ExternalLink}
              label="Demo"
              value="Live Application"
              href={link.live}
            />
          )}
          {link.docs && (
            <LinkCard
              icon={FileText}
              label="Documentation"
              value="Project Docs"
              href={link.docs}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function LinkCard({ icon: Icon, label, value, href }: LinkCardType) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card p-7 hover:bg-secondary/50 transition-colors"
    >
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-5 h-5 text-primary" />
        <span className="font-mono text-xs text-muted-foreground uppercase">
          {label}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-foreground text-sm group-hover:text-primary transition-colors">
          {value}
        </p>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </Link>
  );
}
