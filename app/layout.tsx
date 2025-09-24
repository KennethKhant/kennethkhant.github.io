import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/Header"; // if this alias doesn't work, use: ../../components/Header

export const metadata: Metadata = {
  title: "Kaung Khant — Portfolio",
  description: "Electrical engineering, embedded systems, and robotics builds.",
};

export const viewport: Viewport = {
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
      <body
        id="top"
        className="min-h-screen bg-[#0b0c0f] text-zinc-100 antialiased selection:bg-white/10"
      >
        <Header />

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
