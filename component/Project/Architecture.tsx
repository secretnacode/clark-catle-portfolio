import { architectureType } from "@/type";
import { ArrowDown } from "lucide-react";

export default function Architecture({
  architecture,
}: {
  architecture: architectureType;
}) {
  return (
    <div>
      <div className="space-y-3 mb-8">
        {architecture.flow.map((node, i) => (
          <div key={node.label}>
            <div className="border border-border bg-card p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-foreground font-semibold">
                    {node.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {node.note}
                  </p>
                </div>
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
            {i < architecture.flow.length - 1 && (
              <div className="flex justify-center py-1">
                <ArrowDown className="w-4 h-4 text-zinc-700" />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-muted-foreground leading-relaxed border-l-2 border-primary pl-5">
        {architecture.explanation}
      </p>
    </div>
  );
}
