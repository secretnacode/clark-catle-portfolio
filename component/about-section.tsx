import { FC } from "react";

export const AboutSection: FC = () => {
  return (
    <section id="about">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I&apos;m a developer passionate about crafting clean, efficient, and
          user-centric applications. Currently focusing on my{" "}
          <span className="text-foreground font-medium">OJT preparation</span>,
          I strive to bridge the gap between complex logic and seamless user
          interfaces.
        </p>

        <p>
          My approach combines technical rigor with a curious mindset, always
          looking for the most effective way to solve problems using modern
          tools like{" "}
          <span className="text-foreground font-medium">
            React, Next.js, and Node.js
          </span>
          .
        </p>
      </div>
    </section>
  );
};
