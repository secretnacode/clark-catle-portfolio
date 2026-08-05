import { ArrowRight, FileText, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero({ heroImage }: { heroImage: string }) {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex flex-col justify-center border-b border-border overflow-hidden"
    >
      <div className="absolute inset-0 grid-motif mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      {heroImage && (
        <div className="absolute inset-0 opacity-[0.08] mask-[radial-gradient(ellipse_80%_60%_at_70%_30%,#000,transparent)]">
          <Image
            src="https://media.base44.com/images/public/6a72e27418afa6567eed4b2e/78c0825ac_generated_97b61204.png"
            alt=""
            fill
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pt-24">
        <span className="font-mono-label text-primary mb-5 block fade-in">
          {"//"} Available for Junior Backend Roles
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6 leading-[0.95] fade-in">
          CLARK DAVID
          <br />
          <span className="text-zinc-600">M. CATLE</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 fade-in">
          Full-Stack Developer specializing in{" "}
          <span className="text-foreground">backend systems</span>, REST APIs,
          and scalable web applications. I design reliable architecture, build
          maintainable systems, and solve real-world problems through clean code
          and logic.
        </p>

        <div className="flex flex-wrap gap-4 fade-in">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 h-12 px-7 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors group min-h-11"
          >
            View My Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 h-12 px-7 border border-border text-foreground text-sm font-semibold hover:border-foreground/40 transition-colors min-h-11"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 h-12 px-7 text-muted-foreground text-sm font-semibold hover:text-foreground transition-colors min-h-11"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-8 right-10 flex-col items-end gap-2 font-mono text-xs text-zinc-600">
        <p>LOC: 14.0708° N, 121.3248° E</p>
        <p>STACK: Laravel // Next.js // PostgreSQL</p>
        <p className="text-primary">STATUS: Ready to Deploy</p>
      </div>
    </section>
  );
}
