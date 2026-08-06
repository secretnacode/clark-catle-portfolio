import { stackType } from "@/type";

export default function TechStack({ stack }: { stack: stackType }) {
  const groups = [
    { label: "Frontend", code: "FE", items: stack.frontend },
    { label: "Backend", code: "BE", items: stack.backend },
    { label: "Database", code: "DB", items: stack.database },
    { label: "Deployment", code: "OPS", items: stack.deployment },
  ].filter((g) => g.items.length > 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
      {groups.map((g) => (
        <div key={g.label} className="bg-card p-7">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-border">
            <span className="text-foreground font-semibold text-sm">
              {g.label}
            </span>
            <span className="font-mono text-xs text-primary">{g.code}</span>
          </div>
          <ul className="space-y-2.5">
            {g.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1 h-1 bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
