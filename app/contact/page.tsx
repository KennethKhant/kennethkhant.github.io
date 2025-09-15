import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <Link
        href="/"
        className="text-sm text-zinc-400 hover:text-zinc-200"
      >
        ← Back to Home
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        {/* Left side */}
        <div>
          <h1 className="text-3xl font-bold">GET IN TOUCH</h1>
          <p className="mt-4 text-zinc-300">
            If you would like to find out more about how I can help your
            project—or if you’d like to request a private commission—please fill
            out this brief form and I will be in touch shortly. Thank you!
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
        <form className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder-zinc-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder-zinc-400"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder-zinc-400"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder-zinc-400"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
