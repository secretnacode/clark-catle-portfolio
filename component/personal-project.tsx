import { personalProjectsVariableProjectType } from "@/type";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const PersonalProjects: FC = () => {
  const projects: personalProjectsVariableProjectType = [
    {
      title: "AgroFarm Reporting System",
      description:
        "AgroFarm Reporting System is a web application that enables farmers in Calauan, Laguna to report crop damage online, allowing local agriculturists to respond faster despite distance and accessibility challenges.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "PostgreSQl",
        "Neon",
        "Clerk",
      ],
      image: "/Screenshot 2026-01-03 192600.png",
      link: "https://github.com/secretnacode/updatedCapstone",
    },
    {
      title: "TaskTidy Web App",
      description:
        "TaskTidy is a streamlined web application designed for both busy professionals and those struggling with procrastination, solving the challenge of task paralysis by intelligently identifying and prioritizing what needs to be done first.",
      tags: ["Next.js", "Tailwind", "PostgreSQL", "Neon"],
      image: "/Screenshot 2026-01-03 192650.png",
      link: "https://github.com/secretnacode/tidyTask",
    },
  ];

  return (
    <section id="projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <Link
            href={project.link}
            key={i}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            <div className="z-10 grid place-items-center sm:col-span-3">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={220}
                className="rounded border-2 p-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>

            <div className="z-10 sm:col-span-5">
              <h3 className="font-medium leading-tight text-foreground group-hover:text-primary transition-colors inline-flex items-baseline">
                <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block" />

                <span>
                  {project.title}{" "}
                  <ExternalLink className="inline-block h-4 w-4 ml-1" />
                </span>
              </h3>

              <p className="mt-2 text-sm leading-normal text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="grid place-items-center">
                    <p className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs font-semibold py-1 px-3 rounded-full">
                      {tag}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
