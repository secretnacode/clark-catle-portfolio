import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const ProofSection: FC = () => {
  return (
    <section id="achievements">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Achievements
        </h2>
      </div>

      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
        <div className="z-10 sm:col-span-8">
          <div className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
            <Award className="h-8 w-8 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground">
                Badges & Certificates
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-normal">
                Committed to continuous learning through industry-standard
                certifications and technical achievements.
              </p>

              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                View Gallery <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
