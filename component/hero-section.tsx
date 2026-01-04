import { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-3/4 grid grid-cols-2 gap-12">
        <h1 className="text-8xl font-black text-right flex flex-col">
          <span>Welcome</span>
          <span className="text-nowrap">To Clark&apos;s</span>
          <span>Portfolio</span>
        </h1>

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="text-lg">
            Explore the intersection of innovation and execution. Dive into the
            personal projects of <span className="italic">Clark</span>, discover
            the stories behind the builds, and connect to bring your next big
            idea to life.
          </p>

          <button className="button button-primary">View Projects</button>
        </div>
      </div>
    </div>
  );
};
