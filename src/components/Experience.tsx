import Section from "./Section";

const capabilities = [
  {
    title: "Full-Stack Apps",
    desc: "Build simple full-stack apps with authentication and CRUD.",
  },
  { title: "REST APIs", desc: "Design and implement RESTful endpoints." },
  {
    title: "Database Design",
    desc: "Model schemas, relations, and write efficient queries.",
  },
  { title: "Frontend UI", desc: "Implement responsive, accessible UIs." },
  {
    title: "Debug & Test",
    desc: "Use devtools, logs, and tests to ensure quality.",
  },
];

export default function Experience() {
  return (
    <Section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          What I Can Do
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">
          I’m early in my career and focus on capabilities. Here’s what I can
          contribute from day one.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {capabilities.map((c) => (
            <li key={c.title} className="h-full">
              <div className="h-full rounded-xl border border-zinc-200 bg-white/70 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/70">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {c.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
