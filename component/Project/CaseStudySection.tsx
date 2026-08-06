import { caseStudyType } from "@/type";

export default function CaseStudySection({
  index,
  label,
  title,
  intro,
  children,
}: caseStudyType) {
  return (
    <section
      aria-labelledby={`sec-${label}`}
      className="relative border-b border-border py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="font-mono-label text-primary mb-3 block">
              {String(index).padStart(2, "0")} / {label}
            </span>
            <h2
              id={`sec-${label}`}
              className="text-2xl md:text-3xl font-bold tracking-tight text-foreground"
            >
              {title}
            </h2>
            {intro && (
              <p className="text-muted-foreground mt-4 leading-relaxed">
                {intro}
              </p>
            )}
          </div>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
