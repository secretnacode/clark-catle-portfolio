import Link from "next/link";
import { FC } from "react";

export const ProofSection: FC = () => {
  return (
    <div>
      <h1>Badges and Certificates</h1>

      <div className="flex flex-col justify-center items-center">
        <p className="w-1/2">
          my badges and certificates, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laboriosam pariatur cupiditate quia saepe ullam hic
          illo corrupti, placeat dolorum inventore id totam, recusandae quidem
          minus reprehenderit aut aliquid similique ad.
        </p>

        <Link href={""}> View All</Link>
      </div>
    </div>
  );
};
