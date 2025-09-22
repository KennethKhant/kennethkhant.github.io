import Image from "next/image";
import Link from "next/link";
import DetailSection from "../../components/DetailSection";

export default function Speaker() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Top nav */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/capabilities"
          className="text-m text-zinc-400 hover:text-zinc-200"
        >
          ← Back to Capabilities
        </Link>
        <Link href="/" className="text-m text-zinc-400 hover:text-zinc-200">
          Home
        </Link>
      </div>

      {/* Title & subhead */}
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">NoStream</h1>
        <p className="text-zinc-300 max-w-3xl">
         NoStream is an offline-only music player made with C++ and SFML by using different GUI libraries components for local libraries playlists, search, and a clean, keyboard-friendly UI with offline playlist.
        </p>
      </header>
       
      {/* Big hero image */}
      <div className="mt-8 relative w-full aspect-video rounded-xl border border-white/10 bg-black">
              <Image
                src="/musicapp/dropdown.jpg"
                alt="Drop Down"
                fill
                className="object-cover object-[50%_52%]"
                priority
              />
      </div>

      {/* Two-column content */}
      <section className="mt-12 grid gap-8 md:grid-cols-2 items-start">
        <article className="space-y-4 text-zinc-300 leading-relaxed">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-zinc-300 max-w-3xl mt-3">
            <strong>NoStream</strong> is a desktop audio player built in modern C++ with SFML. It scans
            local folders, lists tracks with duration, and provides fast search, playlist management, and
            smooth transport controls. The layout mirrors familiar streaming apps while remaining fully
            offline.
          </p>
        </article>

        <aside className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <h3 className="text-xl font-medium">Programming</h3>
          <ul className="mt-2 list-disc list-inside text-m text-zinc-300 space-y-1">
            <li>
              <span className="font-medium">CLion, VS code</span>
            </li>
            <li>
              <span className="font-medium">C++</span>
            </li>
            <li>
              <span className="font-medium">SFML 2.5.1, CMake</span> 
              Resistors, Diodes
            </li>
            <li>
              <span className="font-medium">GUI Component</span> 
            </li>
          </ul>
        </aside>
      </section>

      {/* Big hero image */}
      <div className="mt-8 relative w-full aspect-video rounded-xl border border-white/10 bg-black">
              <Image
                src="/musicapp/search.jpg"
                alt="Search Bar"
                fill
                className="object-cover object-[50%_52%]"
                priority
              />
      </div>

      {/* Full-width explanation */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Feature</h2>
            <ul className="text-zinc-300 max-w-3xl mt-3 list-disc pl-6 space-y-1">
              <li><strong>File</strong> — Add folders and browse tracks with durations.</li>
              <li><strong>Create Playlists</strong> — Create new playlists</li>
              <li><strong>Exit</strong> — Quick Exit.</li>
              <li><strong>Volume & mute</strong> — Precise control with on-screen icons.</li>
              <li><strong>Search Bar</strong> — Search the specific song.</li>
              <li><strong>Keyboard-friendly</strong> — Optimized for quick navigation and playback.</li>
            </ul>
      </section>
      
      {/* Optional video */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Demo</h2>
        <div className="aspect-video overflow-hidden rounded-none border border-white/10">
          {/* Replace with your real video URL */}
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/A7xAB80g794"
            title="Game Play"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
