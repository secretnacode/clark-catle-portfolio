import { personalProjectsVariableProjectType } from "@/type";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
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
    },
    {
      title: "TaskTidy Web App",
      description:
        "TaskTidy is a streamlined web application designed for both busy professionals and those struggling with procrastination, solving the challenge of task paralysis by intelligently identifying and prioritizing what needs to be done first.",
      tags: ["Next.js", "Tailwind", "PostgreSQL", "Neon"],
      image: "/Screenshot 2026-01-03 192650.png",
    },
  ];

  return (
    // <div className="mx-24">
    //   <h1 className="section-title">Personal Project</h1>

    //   <div>
    //     <ProjectCard
    //       imageSrc={"/Screenshot 2026-01-03 192600.png"}
    //       imageAlt={"AgroFarm landing page"}
    //       title={"Reporting System"}
    //       description={
    //         "AgroFarm Reporting System is a web application that enables farmers in Calauan, Laguna to report crop damage online, allowing local agriculturists to respond faster despite distance and accessibility challenges."
    //       }
    //       buttonRedirection={"View Project 1"}
    //     />

    //     <ProjectCard
    //       imageSrc={"/Screenshot 2026-01-03 192650.png"}
    //       imageAlt={"TaskTidy landing page"}
    //       title={"Todo List Web App"}
    //       description={
    //         "TaskTidy is a streamlined web application designed for both busy professionals and those struggling with procrastination, solving the challenge of task paralysis by intelligently identifying and prioritizing what needs to be done first."
    //       }
    //       buttonRedirection={"View Project 2"}
    //       isReverse={true}
    //     />
    //   </div>
    // </div>

    <section id="projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

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
                <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block"></span>

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
          </div>
        ))}
      </div>
    </section>
  );
};

// const ProjectCard: FC<projectCardPropType> = ({
//   imageSrc,
//   imageAlt,
//   title,
//   description,
//   buttonRedirection,
//   isReverse = false,
// }) => {
//   const reverse = isReverse
//     ? {
//         dir: "rtl",
//       }
//     : {};

//   console.log(buttonRedirection);
//   return (
//     <div className={`grid grid-cols-5 gap-8 my-54`} {...reverse}>
//       <div className="h-fit flex justify-center items-center col-span-3 min-h-0 overflow-hidden rounded-xl">
//         <div className="relative w-full h-full z-0">
//           <Image
//             alt={imageAlt}
//             src={imageSrc}
//             width={999999} // max width
//             height={500}
//             className="object-contain"
//           />
//         </div>
//       </div>

//       <div
//         className={`flex justify-center flex-col ${
//           isReverse ? "text-right" : ""
//         } col-span-2`}
//       >
//         <h1 className="text-xl font-bold mb-8">{title}</h1>

//         <div>
//           <p className="text-text-muted mb-4">{description}</p>

//           <button className="px-4 py-1.5 rounded-lg button-primary flex justift-center items-center gap-4 hover:scale-105 transition-all duration-200">
//             See More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
