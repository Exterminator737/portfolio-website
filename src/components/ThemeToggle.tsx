"use client";
import * as React from "react";

// Simple theme toggle without external deps. Persists to localStorage and toggles the `dark` class on <html>.
export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldDark = stored ? stored === "dark" : prefersDark;
      document.documentElement.classList.toggle("dark", shouldDark);
      setIsDark(shouldDark);
    } catch {
      // no-op
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // no-op
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-pressed={isDark}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 px-3 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-50 shadow-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
    >
      <span className="text-lg" aria-hidden>
        {isDark ? "🌙" : "☀️"}
      </span>
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}

export default ThemeToggle;
