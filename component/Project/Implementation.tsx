import { implementationType } from "@/type";

export default function Implementation({
  implementation,
}: {
  implementation: implementationType;
}) {
  const groups = [
    { label: "Backend", code: "BE", items: implementation.backend },
    { label: "Database", code: "DB", items: implementation.database },
    { label: "Frontend", code: "FE", items: implementation.frontend },
  ].filter((g) => g.items && g.items.length > 0);

  return (
    <div className="space-y-px bg-border">
      {groups.map((g) => (
        <div key={g.label} className="bg-card p-7">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-primary">{g.code}</span>
            <h3 className="text-foreground font-semibold">{g.label}</h3>
          </div>
          <ul className="space-y-3">
            {g.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
              >
                <span className="font-mono text-primary mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
