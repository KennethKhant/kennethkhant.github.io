"use client"; // make it interactive

import Link from "next/link";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/meorqdde", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset(); // clear the form
    } else {
      setStatus("error");
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
        ← Back to Home
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        {/* Left side */}
        <div>
          <h1 className="text-3xl font-bold">GET IN TOUCH</h1>
          <p className="mt-4 text-zinc-300">
            I’m always open to connecting with recruiters, collaborators, and fellow engineers. 
            Whether you’d like to discuss an internship, a project idea, or a potential collaboration, 
            feel free to reach out. Fill out the form and I’ll get back to you promptly. 
            You can also connect with me directly via email or LinkedIn.
          </p>

          {/* Social buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href="mailto:kkkhant@ucsd.edu"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Email"
            >
              <FaEnvelope className="text-white text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaung-khant-830258311"
              target="_blank"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-white text-xl" />
            </a>
          </div>
        </div>

        {/* Right side (form) */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="first"
              placeholder="First Name"
              required
              className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder-zinc-400"
            />
            <input
              type="text"
              name="last"
              placeholder="Last Name"
              required
              className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder-zinc-400"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder-zinc-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder-zinc-400"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-md bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition"
          >
            {status === "loading" ? "Sending..." : "Let’s Connect"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm mt-2">Thanks! I’ll reply shortly.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm mt-2">Oops, something went wrong. Try again?</p>
          )}
        </form>
      </div>
    </main>
  );
}
