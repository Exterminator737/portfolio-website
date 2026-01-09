export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200/70 bg-white/70 py-8 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            className="hover:underline"
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="hover:underline" href="mailto:youremail@example.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
