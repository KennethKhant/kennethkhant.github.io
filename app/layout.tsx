import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kaung Khant — Portfolio",
  description: "Electrical engineering, embedded systems, and robotics builds.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-[#0b0c0f] text-zinc-100 antialiased selection:bg-white/10">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0c0f]/75 backdrop-blur">
          <nav className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              KAUNG KHANT
            </Link>
            <div className="hidden sm:flex items-center gap-6 text-sm">
              <Link className="hover:opacity-80" href="/capabilities">
                Projects
              </Link>
              <a className="hover:opacity-80" href="/resume">
                Resume
              </a>
              <a className="hover:opacity-80" href="/contact">
                Contact
              </a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-zinc-400 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Kaung Khant</p>
            <a href="#top" className="hover:text-zinc-300">
              Back to top
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
