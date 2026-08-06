import Navbar from "@/component/Landing/Navbar";
import ProjectHero from "@/component/Project/ProjectHero";
import CaseStudySection from "@/component/Project/CaseStudySection";
import { getProjectBySlug } from "@/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import TechStack from "@/component/Project/TechStack";
import Architecture from "@/component/Project/Architecture";
import Features from "@/component/Project/Features";
import Implementation from "@/component/Project/Implementation";
import Challenges from "@/component/Project/Challenges";
import LinksFooter from "@/component/Project/LinksFooter";
import Footer from "@/component/Landing/Footer";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-muted-foreground leading-relaxed"
        >
          <span className="w-1.5 h-1.5 bg-primary mt-2.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string }>;
}) {
  const { slug } = await params;

  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Project not found
          </h1>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <main className="min-h-screen bg-background">
        <Navbar />
        <ProjectHero project={project} />
        {/* 2. Overview */}
        <CaseStudySection index={2} label="Overview" title="Project Overview">
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            {project.overview}
          </p>
          <div className="space-y-4 border-l-2 border-primary pl-5">
            <div>
              <span className="font-mono text-xs text-primary block mb-1">
                WHO
              </span>
              <p className="text-muted-foreground text-sm">{project.who}</p>
            </div>
            <div>
              <span className="font-mono text-xs text-primary block mb-1">
                WHY
              </span>
              <p className="text-muted-foreground text-sm">{project.why}</p>
            </div>
          </div>
        </CaseStudySection>
        {/* 3. Problem Statement */}
        <CaseStudySection index={3} label="Problem" title="Problem Statement">
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg border-l-2 border-border pl-5">
            {project.problem.statement}
          </p>
          <div className="space-y-3">
            <span className="font-mono text-xs text-primary block">
              KEY LIMITATIONS
            </span>
            <Bullets items={project.problem.limitations} />
          </div>
        </CaseStudySection>
        {/* 4. Goals */}
        <CaseStudySection index={4} label="Goals" title="Goals & Objectives">
          <Bullets items={project.goals} />
        </CaseStudySection>
        {/* 5. Role */}
        <CaseStudySection
          index={5}
          label="Role"
          title="My Role & Responsibilities"
        >
          <div className="mb-6 pb-6 border-b border-border">
            <span className="font-mono text-xs text-primary block mb-2">
              ROLE
            </span>
            <p className="text-foreground font-semibold text-lg">
              {project.role}
            </p>
          </div>
          <span className="font-mono text-xs text-primary block mb-4">
            RESPONSIBILITIES
          </span>
          <Bullets items={project.responsibilities} />
        </CaseStudySection>
        {/* 6. Tech Stack */}
        <CaseStudySection index={6} label="Stack" title="Technology Stack">
          <TechStack stack={project.stack} />
        </CaseStudySection>
        {/* 7. Architecture */}
        <CaseStudySection
          index={7}
          label="Architecture"
          title="System Architecture"
          intro="How components communicate, where business logic lives, and how data flows."
        >
          <Architecture architecture={project.architecture} />
        </CaseStudySection>
        {/* 8. Features */}
        <CaseStudySection
          index={8}
          label="Features"
          title="Key Features"
          intro="Each feature and how it was implemented at the engineering level."
        >
          <Features features={project.features} />
        </CaseStudySection>
        {/* 9. Implementation */}
        <CaseStudySection
          index={9}
          label="Implementation"
          title="Technical Implementation"
          intro="How the system was built, explained for another developer."
        >
          <Implementation implementation={project.implementation} />
        </CaseStudySection>
        {/* 10. Challenges */}
        <CaseStudySection
          index={10}
          label="Challenges"
          title="Challenges & Solutions"
          intro="Real engineering problems, the approach taken, and the reasoning behind each decision."
        >
          <Challenges challenges={project.challenges} />
        </CaseStudySection>
        {/* 11. Results */}
        <CaseStudySection index={11} label="Results" title="Results & Impact">
          <Bullets items={project.results} />
        </CaseStudySection>
        {/* 12. Lessons */}
        <CaseStudySection index={12} label="Lessons" title="Lessons Learned">
          <Bullets items={project.lessons} />
        </CaseStudySection>

        {/* commented first because all project doesnt have a proof (a hussle to do) */}
        {/* 13. Screenshots */}
        {/* <CaseStudySection
          index={13}
          label="Visuals"
          title="Screenshots & Demo"
          intro="Visual previews of the application. Additional demos and diagrams can be added here."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="aspect-video border border-border bg-secondary relative overflow-hidden"
              >
                <div className="absolute inset-0 grid-motif opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs text-zinc-700 uppercase tracking-widest">
                    Screenshot {n}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CaseStudySection> */}
        {/* 14. Links */}
        {project.links && <LinksFooter index={13} link={project.links} />}
        <Footer />
      </main>
    </main>
  );
}
