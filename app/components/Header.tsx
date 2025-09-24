"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    // ↑ raise header z so its dropdown can sit above overlay
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0c0f]/75 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">KAUNG KHANT</Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link className="hover:opacity-80" href="/capabilities">Projects</Link>
          <Link className="hover:opacity-80" href="/resume">Resume</Link>
          <Link className="hover:opacity-80" href="/contact">Contact</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-white/10 active:bg-white/20"
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* ↓ make dropdown sit above overlay */}
      <div
        className={[
          "md:hidden overflow-hidden border-b border-white/10 bg-[#0b0c0f]/95 backdrop-blur",
          "transition-[max-height,opacity,transform] duration-300",
          "relative z-50", // <-- adds stacking above overlay
          open ? "max-h-64 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 py-2 text-sm">
          <Link href="/capabilities" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-white/10">Projects</Link>
          <Link href="/resume"       onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-white/10">Resume</Link>
          <Link href="/contact"      onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-white/10">Contact</Link>
        </div>
      </div>

      {/* Overlay goes UNDER the dropdown */}
      {open && (
        <button
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
          className="fixed inset-0 top-14 bg-black/40 md:hidden z-40"
        />
      )}
    </header>
  );
}
