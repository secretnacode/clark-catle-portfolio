import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "[your.email@example.com]",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/[username]",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/[username]",
    href: "https://linkedin.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative border-b border-border py-24 lg:py-32"
    >
      <div className="absolute inset-0 grid-motif mask-[radial-gradient(ellipse_50%_60%_at_50%_50%,#000,transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="font-mono-label text-primary mb-4 block">
            06 / Contact
          </span>
          <h2
            id="contact-heading"
            className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-6"
          >
            Let&apos;s work together.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
            I&apos;m open to junior backend, full-stack, and software
            engineering roles. If you&apos;re hiring or have an opportunity to
            discuss, I&apos;d be glad to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-10">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={
                l.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="group bg-card p-7 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <l.icon className="w-5 h-5 text-primary" />
                <span className="font-mono text-xs text-muted-foreground uppercase">
                  {l.label}
                </span>
              </div>
              <p className="text-foreground text-sm group-hover:text-primary transition-colors break-all">
                {l.value}
              </p>
            </a>
          ))}
        </div>

        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center gap-2 h-12 px-7 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors group min-h-11"
        >
          Get in touch
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
