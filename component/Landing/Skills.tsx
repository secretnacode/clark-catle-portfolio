const CATEGORIES = [
  {
    label: "Frontend",
    code: "FE",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vue.js",
    ],
  },
  {
    label: "Backend",
    code: "BE",
    items: [
      "Laravel",
      "PHP",
      "Node.js",
      "RESTful APIs",
      "Authentication",
      "Authorization",
      "Middleware",
      "Backend Architecture",
    ],
  },
  {
    label: "Database",
    code: "DB",
    items: [
      "PostgreSQL",
      "MySQL",
      "Database Design",
      "Relationships",
      "Query Optimization",
      "Data Integrity",
    ],
  },
  {
    label: "Tools & Deployment",
    code: "OPS",
    items: ["Git", "GitHub", "Postman", "VS Code", "Nginx", "PM2", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative border-b border-border py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono-label text-primary mb-4 block">
            02 / Skills
          </span>
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            Tech Stack Architecture
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The tools and technologies I use to design, build, and deploy
            production applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className="bg-card p-7">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <span className="text-foreground font-semibold">
                  {cat.label}
                </span>
                <span className="font-mono text-xs text-primary">
                  {cat.code}
                </span>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item) => (
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
      </div>
    </section>
  );
}
