// Structured project placeholders for easy updates later
export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string; // optional image path for project thumbnail
  github?: string; // optional until available
  live?: string; // optional until available
};

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Full-Stack Demo App (Placeholder)",
    description:
      "A sample full-stack application demonstrating CRUD, authentication, and a responsive UI.",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    id: "proj-2",
    title: "REST API Service (Placeholder)",
    description:
      "A RESTful API with routing, validation, and unit tests. Includes Postman collection.",
    tech: ["Node.js", "Express", "Jest", "MongoDB"],
  },
  {
    id: "proj-3",
    title: "Frontend UI Components (Placeholder)",
    description:
      "A collection of accessible, reusable React components with documentation.",
    tech: ["React", "TypeScript", "TailwindCSS"],
  },
];
