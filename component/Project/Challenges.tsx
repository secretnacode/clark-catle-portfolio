import { challengesType, fieldType } from "@/type";

export default function Challenges({
  challenges,
}: {
  challenges: challengesType[];
}) {
  return (
    <div className="space-y-px bg-border">
      {challenges.map((c, i) => (
        <div key={i} className="bg-card p-7">
          <span className="font-mono text-xs text-primary block mb-4">
            CHALLENGE {String(i + 1).padStart(2, "0")}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Challenge" text={c.challenge} />
            <Field label="Impact" text={c.impact} />
            <Field label="Solution" text={c.solution} highlight />
            <Field label="Engineering Decision" text={c.decision} highlight />
          </div>
        </div>
      ))}
    </div>
  );
}

function Field({ label, text, highlight }: fieldType) {
  return (
    <div className={highlight ? "border-l-2 border-primary pl-4" : ""}>
      <span className="font-mono text-xs text-primary block mb-2">
        {label.toUpperCase()}
      </span>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}
