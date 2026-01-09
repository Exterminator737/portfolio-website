import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Badge({ children }: Props) {
  return (
    <span className="rounded-full border border-zinc-300 bg-white/60 px-2.5 py-1 text-xs font-medium text-zinc-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100">
      {children}
    </span>
  );
}
