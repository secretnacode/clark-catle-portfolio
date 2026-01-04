import { AboutSection } from "@/component/about-section";
import { NavSection } from "@/component/nav-section";
import { PersonalProjects } from "@/component/personal-project";
import { ProofSection } from "@/component/proof-section ";
import { SkillsAndToolsSection } from "@/component/skills-tools-section";

export default function Home() {
  return (
    <div className="max-w-7-xl mx-auto px-6 py-12 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <NavSection />
        </header>

        <main className="lg:w-1/2 lg:py-24 space-y-24 lg:space-y-32">
          <AboutSection />

          <PersonalProjects />

          <SkillsAndToolsSection />

          <ProofSection />
        </main>
      </div>
    </div>
  );
}
