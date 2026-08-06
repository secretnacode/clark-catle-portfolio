import { featuresType } from "@/type";

export default function Features({ features }: { features: featuresType[] }) {
  return (
    <div className="grid grid-cols-1 gap-px bg-border">
      {features.map((f, i) => (
        <div key={f.name} className="bg-card p-7">
          <div className="flex items-start gap-4">
            <span className="font-mono text-sm text-primary pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <h3 className="text-foreground font-semibold mb-2">{f.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {f.description}
              </p>
              <div className="border-l-2 border-border pl-4">
                <span className="font-mono text-xs text-primary block mb-1">
                  IMPLEMENTATION
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.implementation}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
