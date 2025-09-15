// app/capabilities/hovermap-robot/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HovermapRobotPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/capabilities" className="text-m text-zinc-400 hover:text-zinc-200">
          ← Back to Capabilities
        </Link>
        <Link href="/" className="text-m text-zinc-400 hover:text-zinc-200">
          Home
        </Link>
      </div>

      {/* Title & subhead */}
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Hovermap Robot</h1>
        <p className="text-zinc-300 max-w-3xl">
          Compact inspection platform for confined spaces; multi-sensor mapping workflow.
        </p>
      </header>

      {/* Big hero image */}
      <div className="mt-8 relative h-80 w-full overflow-hidden rounded-2xl border border-white/10">
        <Image src="/capabilities/hovermap.jpg" alt="Hovermap Robot" fill className="object-cover" priority />
      </div>

      {/* Two-column content */}
      <section className="mt-12 grid gap-8 md:grid-cols-2 items-start">
        <article className="space-y-4 text-zinc-300 leading-relaxed">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            Describe the problem, constraints, and your role. Add diagrams or photos below. You can
            totally change this layout per page—this is just a starter.
          </p>
          <p>
            Call out challenges, trade-offs, reliability, test results, and what you’d do next.
          </p>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <h3 className="text-lg font-medium">Specs / Stack</h3>
          <ul className="mt-2 list-disc list-inside text-sm text-zinc-300 space-y-1">
            <li>Mapping sensors</li>
            <li>Sealed electronics</li>
            <li>Telemetry & logging</li>
          </ul>

          {/* Links */}
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="#" className="rounded-md border border-white/15 px-3 py-1 text-xs hover:bg-white/10">GitHub</a>
            <a href="#" className="rounded-md border border-white/15 px-3 py-1 text-xs hover:bg-white/10">Docs</a>
          </div>
        </aside>
      </section>

      {/* Optional video */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Demo</h2>
        <div className="aspect-video overflow-hidden rounded-xl border border-white/10">
          {/* Replace with your real video URL */}
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo"
            allowFullScreen
          />
        </div>
      </section>

      {/* Optional gallery */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Gallery</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {["hovermap-1.jpg", "hovermap-2.jpg"].map((f) => (
            <div key={f} className="relative h-52 w-full overflow-hidden rounded-xl border border-white/10">
              <Image src={`/capabilities/${f}`} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
