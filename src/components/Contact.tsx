"use client";
import React, { useState } from "react";
import Section from "./Section";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    null | "idle" | "sending" | "success" | "error"
  >(null);

  const validate = () => {
    if (!name.trim()) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
    if (message.trim().length < 10) return false;
    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    // Demo: no backend yet. Simulate a short delay.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Contact
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Open to <strong>Junior Software Engineer</strong> roles. Let’s
          connect!
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70"
            noValidate
          >
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-blue-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-blue-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full resize-y rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-blue-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:scale-[1.02] hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status === "error" && (
                  <p className="mt-2 text-sm text-red-600">
                    Please provide a valid name, email, and message (10+
                    characters).
                  </p>
                )}
                {status === "success" && (
                  <p className="mt-2 text-sm text-green-600">
                    Message sent (demo). Thank you!
                  </p>
                )}
              </div>
            </div>
          </form>

          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Connect
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  className="text-blue-600 hover:underline dark:text-blue-400"
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline dark:text-blue-400"
                  href="https://www.linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn →
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline dark:text-blue-400"
                  href="mailto:youremail@example.com"
                >
                  Email →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
