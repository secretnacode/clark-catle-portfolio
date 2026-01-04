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
    <>
      {Object.entries(skillsAndTools).map((val, i) => (
        <section id={val[0].toLocaleLowerCase()} key={i}>
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 lg:bg-transparent px-6 py-5 backdrop-blur lg:relative lg:top-auto lg:mx-auto lg:w-full">
            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
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
        </section>
      ))}
    </>
  );
};
