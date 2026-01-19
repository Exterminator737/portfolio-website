import Section from "./Section";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  if (!certifications?.length) return null;
  return (
    <Section id="certifications" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Certifications
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {certifications.map((c) => (
            <li key={`${c.title}-${c.date ?? "n/a"}`}>
              <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70">
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  {c.title}
                </p>
                {(c.issuer || c.date) && (
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {[c.issuer, c.date].filter(Boolean).join(" • ")}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
