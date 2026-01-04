"use client";

import { FC } from "react";

export const NavList: FC = () => {
  const gotoSection = (id: string) => {
    const section = document.getElementById(id);

    console.log(section);

    section?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
    <>
      {["About", "Projects", "Skills", "Tools", "Achievements"].map((item) => (
        <li key={item}>
          <button
            onClick={() => gotoSection(item.toLowerCase())}
            className="group flex items-center py-3 active"
          >
            {/* group-focus:w-16 group-focus:bg-foreground */}
            <span className="mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground" />
            {/* roup-focus:text-foreground */}
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
              {item}
            </span>
          </button>
        </li>
      ))}
    </>
  );
};
