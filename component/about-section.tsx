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
          A self-taught mastery of React, Next.js, and PostgreSQL. While
          I&apos;m comfortable across the full stack, backend development is
          where I thrive, architecting systems, optimizing performance, and
          solving complex problems give me that addictive thrill of breaking
          through challenges.
        </p>

        <p>
          I recently built a reporting system for our capstone that will be
          used, proving that the best projects solve real problems. Currently
          expanding my stack to include Angular and PHP, and seeking OJT
          opportunities in{" "}
          <span className="text-foreground font-medium">
            full-stack development
          </span>
          . Based in San Pablo, Laguna, and open to remote work.
        </p>
      </div>
    </section>
  );
};
