import "./globals.css";

export const metadata = {
  title: "Junior Software Engineer | Portfolio",
  description: "Portfolio of a Junior Software Engineer. Projects, skills, and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            const s = localStorage.getItem('theme');
            const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const dark = s ? s === 'dark' : prefers;
            document.documentElement.classList.toggle('dark', dark);
          } catch {}
        ` }} />
      </head>
      <body className="bg-zinc-50 text-zinc-800 antialiased dark:bg-zinc-950 dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
