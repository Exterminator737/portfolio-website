import Image from "next/image";
import Section from "./Section";

const SKILL_ICON_MAP: Record<string, string> = {
  "JavaScript": "/icons/JavaScript.svg",
  "TypeScript": "/icons/TypeScript.svg",
  "React": "/icons/React.svg",
  "Next.js": "/icons/Next.js.svg",
  "CSS": "/icons/CSS3.svg",
  "Tailwind CSS": "/icons/Tailwind CSS.svg",
  "Node.js": "/icons/Node.js.svg",
  "Express": "/icons/Express.svg",
  "jQuery": "/icons/jQuery.svg",
  "Vite": "/icons/Vite.js.svg",
  "NPM": "/icons/NPM.svg",
  // Note: C# icon filename contains a '#' which is awkward in URLs. Recommend renaming to csharp.svg if you want it here.
};

const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Python",
  "MongoDB",
  "SQL Server",
  "MySQL",
  "Flask",
  "C# (basic)",
];

export default function About() {
  return (
    <Section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About Me</h2>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">
          I’m a Junior Software Engineer passionate about problem solving and learning. I focus on
          strong software engineering fundamentals: clean code, testing, version control, and
          readable documentation. Im eager to contribute to real-world projects and grow alongside
          a supportive team.
        </p>

        <div className="mt-10">
          <h3 className="text-xl font-semibold">Skills</h3>
          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((name) => {
              const icon = SKILL_ICON_MAP[name] || SKILL_ICON_MAP[name.replace(/\s+/g, "")];
              return (
                <li
                  key={name}
                  className="group rounded-lg border border-zinc-200 bg-white/70 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/70"
                >
                  <div className="flex items-center gap-3">
                    {icon ? (
                      <Image
                        src={icon}
                        alt={`${name} icon`}
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                      />
                    ) : null}
                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">{name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold">Education & Qualification</h3>
          <div className="mt-3 rounded-lg border border-zinc-200 bg-white/70 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">Software Engineering Qualification</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Practical modules in programming and algorithms</li>
              <li>Databases: SQL, normalization, and schema design</li>
              <li>Web fundamentals: HTTP, REST, and frontend basics</li>
              <li>Testing and debugging techniques</li>
              <li>Team collaboration and version control (Git)</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
