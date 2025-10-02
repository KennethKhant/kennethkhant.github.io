import DetailSection from "../../components/DetailSection";
import Image from "next/image";
import Link from "next/link";

export default function LilPortfolioPage() {
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
        <h1 className="text-4xl font-bold tracking-tight">Little Portfolio</h1>
        <p className="text-zinc-300 max-w-3xl">
          Little Portfolio was my first C++/SFML portfolio with a menu-driven launcher that bundles all of my early SFML
        projects into one polished desktop experience. This project drag me into the deeper understanding of C++ sfml program as well as launched my coding journey.
        </p>
      </header>

      {/* Two images side-by-side*/}
              <section className="mt-16">      
              <div className="grid gap-3 md:grid-cols-2">
                  {/* Left image */}
                  <div className="relative w-full overflow-hidden rounded-none border border-white/10 bg-white/[0.02] aspect-[16/13]">
                  <Image
                      src="/firstportfolio/mainmenu.jpg"   
                      alt="Project photo 1"
                      fill
                      className="object-cover object-[50%_50%]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  </div>
      
                  {/* Right image */}
                  <div className="relative w-full overflow-hidden rounded-none border border-white/10 bg-white/[0.02] aspect-[16/13]">
                  <Image
                      src="/firstportfolio/inside.jpg"   
                      alt="Project photo 2"
                      fill
                      className="object-cover object-[50%_50%]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  </div>
              </div>
      </section>

      {/* Two-column content */}
      <section className="mt-12 grid gap-8 md:grid-cols-2 items-start">
        <article className="space-y-4 text-zinc-300 leading-relaxed">
         <p className="text-zinc-300 max-w-3xl mt-3">
          <strong>Little Portfolio</strong> combines the SFML exercises I completed while learning
          modern C++ into a single application. It starts with simple render/input tests and builds
          up to animation, basic physics, and a small game prototype.
        </p>

        <ul className="text-zinc-300 max-w-3xl mt-3 list-disc pl-6 space-y-1">
          <li><strong>Green Ball</strong> — first SFML test: window loop, draw calls, input events.</li>
          <li><strong>2D Grid</strong> — scalable grid generator (grow/shrink) exploring transforms and layout.</li>
          <li><strong>Phaser</strong> — sprite-sheet animation with directional walking and frame timing.</li>
          <li><strong>Bouncing Ball</strong> — simple physics: delta-time motion, collisions, restitution.</li>
          <li><strong>Poker</strong> — hand classification & scoring (combinatorics, ranking logic).</li>
          <li><strong>Sole Collector (Gold Miner)</strong> — mini arcade prototype built on the above systems.</li>
        </ul>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h3 className="text-lg font-medium">Made With</h3>
          <ul className="mt-2 list-disc list-inside text-sm text-zinc-300 space-y-1">
            <li>Clion, VS code </li>
            <li>C++ Program</li>
            <li>Sfml 2.6.1</li>
            <li>GUI Component, Custom Graphic</li>
          </ul>
        </aside>
      </section>

      {/* Demos: two videos side-by-side */}
  <section className="mt-12">
  <h2 className="text-2xl font-semibold mb-3">Demos</h2>

  <div className="grid gap-4 md:gap-6 sm:grid-cols-1 md:grid-cols-2">
    {/* Video 1 */}
    <figure className="aspect-video overflow-hidden rounded-none border border-white/10">
      <iframe
        className="h-full w-full"
        src="https://www.youtube-nocookie.com/embed/f7-7Wc37f0w"
        title="Gameplay Demo"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </figure>

    {/* Video 2 */}
    <figure className="aspect-video overflow-hidden rounded-none border border-white/10">
      <iframe
        className="h-full w-full"
        src="https://www.youtube-nocookie.com/embed/zKw-OA92M2I"
        title="Menu & UI Demo"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </figure>
  </div>
  </section>

    </main>
  );
}
