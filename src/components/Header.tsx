"use client";
import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-zinc-100/80 bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            <span className="text-zinc-900 dark:text-zinc-50">Junior Software Engineer</span>
          </a>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
