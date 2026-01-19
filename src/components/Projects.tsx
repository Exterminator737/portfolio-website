"use client";

import Image from "next/image";
import { useState } from "react";
import Section from "./Section";
import { projects, type Project } from "@/data/projects";

const ICON_MAP: Record<string, string> = {
  React: "/icons/React.svg",
  "Next.js": "/icons/Next.js.svg",
  TypeScript: "/icons/TypeScript.svg",
  "Node.js": "/icons/Node.js.svg",
  Express: "/icons/Express.svg",
  MongoDB: "/icons/MongoDB.svg",
  // Tailwind may appear as TailwindCSS or Tailwind CSS
  TailwindCSS: "/icons/Tailwind CSS.svg",
  "Tailwind CSS": "/icons/Tailwind CSS.svg",
  // Additional common test tool
  Jest: "/icons/Jest.svg",
};

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(
    new Set()
  );

  const toggleExpanded = (projectId: string) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const isDescriptionLong = (description: string) => {
    return description.length > 100;
  };
  return (
    <Section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Projects
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">
          Each card reveals more details on hover. Buttons are disabled until
          you link to GitHub and a live preview.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.id}>
              <article className="group flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/70">
                <div className="mb-4 overflow-hidden rounded-md border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                  <Image
                    src={p.image ?? "/placeholders/project.svg"}
                    alt={`${p.title} image`}
                    width={640}
                    height={360}
                    className="h-40 w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {p.title}
                </h3>
                <div className="mt-4">
                  <p
                    className={`text-sm text-zinc-600 transition-all dark:text-zinc-400 ${
                      expandedProjects.has(p.id)
                        ? "line-clamp-none"
                        : "line-clamp-2"
                    }`}
                  >
                    {p.description}
                  </p>
                  {isDescriptionLong(p.description) && (
                    <button
                      onClick={() => toggleExpanded(p.id)}
                      className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      {expandedProjects.has(p.id) ? "Read less" : "Read more"}
                    </button>
                  )}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {p.tech.map((t) => {
                    const icon =
                      ICON_MAP[t] ?? ICON_MAP[t.replace(/\s+/g, "")] ?? null;
                    return icon ? (
                      <Image
                        key={t}
                        src={icon}
                        alt={`${t} icon`}
                        title={t}
                        width={20}
                        height={20}
                        className="h-5 w-5 object-contain"
                      />
                    ) : null;
                  })}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="cursor-not-allowed rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-800 opacity-70 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100"
                    title="Link coming soon"
                  >
                    GitHub
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="cursor-not-allowed rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-800 opacity-70 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100"
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
