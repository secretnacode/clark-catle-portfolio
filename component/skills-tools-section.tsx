import { FC } from "react";

export const SkillsAndToolsSection: FC = () => {
  const skillsAndTools: Record<string, string[]> = {
    Skills: [
      "JavaScript/TypeScript",
      "Version Control(Git)",
      "Data Structures & Algorithm",
      "Databases & SQL/NoSQL",
      "Debugging",
      "Web Dev(Back end, Front end)",
      "Cloud & Deployment",
      "Problem-Solving",
      "Critical Thinking",
      "Communication",
      "Adaptability & Continuous Learning",
      "Emotional Intelligence (EQ)",
      "Time Management",
    ],
    Tools: [
      "VSCode",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Postman",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "GitHub",
      "Vercel",
      "Claude",
    ],
  };

  return (
    <section id="skills" className="scroll-mt-16 lg:scroll-mt-24">
      {Object.entries(skillsAndTools).map((val, i) => (
        <div key={i}>
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
              {val[0]}
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {val[1].map((value) => (
              <div
                key={value}
                className="px-3 py-1 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary transition-all cursor-default"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
