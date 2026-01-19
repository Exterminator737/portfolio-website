import Section from "./Section";

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative flex min-h-[86vh] items-center justify-center"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-center gap-10 px-4 sm:px-6 md:flex-row">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Hi, I&apos;m{" "}
            <span className="text-blue-600 dark:text-blue-400">Your Name</span>
          </h1>
          <p className="mt-2 text-lg text-zinc-700 dark:text-zinc-300">
            Junior Software Engineer
          </p>
          <p className="mt-4 max-w-prose text-zinc-600 dark:text-zinc-400">
            I build clean, accessible web applications. I&apos;m focused on
            learning quickly, writing maintainable code, and delivering reliable
            user experiences.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 shadow-sm transition-transform hover:scale-[1.02] hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div>
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-zinc-200 shadow-sm transition-transform hover:scale-[1.03] dark:border-zinc-800 sm:h-52 sm:w-52 md:h-64 md:w-64">
            {/* Replace with your profile image e.g. <Image src="/profile.jpg" alt="Profile" fill className="object-cover" /> */}
            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-zinc-200 to-zinc-300 text-4xl text-zinc-600 dark:from-zinc-800 dark:to-zinc-900 dark:text-zinc-300">
              <span className="sr-only">Profile image placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
