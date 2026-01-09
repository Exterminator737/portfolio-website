import Section from "./Section";
import Badge from "./Badge";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Projects
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">
          These are placeholders you can replace later. Each card reveals more
          details on hover. Buttons are disabled until you link to GitHub and a
          live preview.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.id}>
              <article className="group h-full rounded-xl border border-zinc-200 bg-white/70 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/70">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-600 transition-all group-hover:line-clamp-none dark:text-zinc-400">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="cursor-not-allowed rounded-md border border-zinc-300 bg-white/60 px-3 py-1.5 text-sm text-zinc-800 opacity-70 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100"
                    title="Link coming soon"
                  >
                    GitHub
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="cursor-not-allowed rounded-md border border-zinc-300 bg-white/60 px-3 py-1.5 text-sm text-zinc-800 opacity-70 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100"
                    title="Live preview coming soon"
                  >
                    Live Preview
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
