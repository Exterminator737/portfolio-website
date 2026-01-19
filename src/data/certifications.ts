export type Certification = {
  title: string;
  issuer?: string;
  date?: string;
};

export const certifications: Certification[] = [
  {
    title: "Occupational Certificate: Software Engineer",
    issuer: "SAQA Qualification ID 119458 — NQF Level 6 (240 credits)",
    date: "Key Areas: Software design & development, database design, programming, software testing, debugging, project fundamentals (IT)",
  },
];
