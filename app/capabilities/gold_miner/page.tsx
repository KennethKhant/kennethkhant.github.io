import Image from "next/image";
import Link from "next/link";
import DetailSection from "../../components/DetailSection";

export default function SoleCollectorPage() {
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
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Sole Collector</h1>
        
        <p className="text-zinc-300 max-w-6xl space-y-1">
          <strong>Sole Collector</strong> is an interactive desktop game developed in 
          <strong> C++</strong> with <strong>SFML</strong> as part of my Advanced C++ coursework. 
          Inspired by the classic <em>Gold Miner</em> mechanic, the game challenges players to 
          reach a target score within a time limit by collecting high-value objects while avoiding obstacles.
        </p>

        <p className="text-zinc-300 max-w-3xl space-y-1">
          This project demonstrates my ability to:
        </p>

        <ul className="list-disc pl-6 text-zinc-300 max-w-3xl space-y-2">
          <li>Apply <strong>object-oriented design</strong> principles with reusable components.</li>
          <li>Develop a <strong>state-driven architecture</strong> (Menu → Play → Game Over).</li>
          <li>Implement <strong>real-time asset management, collision detection, and UI rendering</strong>.</li>
        </ul>
      </header>


      {/* Two-column content */}
      <section className="mt-12 grid gap-8 md:grid-cols-2 items-start">
        <article className="space-y-4 text-zinc-300 leading-relaxed">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-zinc-300 max-w-3xl mt-3">
            <strong>Sole Collector</strong> reimagines the classic <em>Gold Miner</em> concept with a 
            sneaker-inspired interface created specifically for my Advanced C++ professor, Prof. Dave, who is an 
            avid shoe enthusiast. This design choice connected the technical challenge of building the 
            game with a theme that was both personal and engaging for the intended audience. 
          </p>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h3 className="text-lg font-medium">Made With</h3>
          <ul className="mt-2 list-disc list-inside text-sm text-zinc-300 space-y-1">
            <li>Clion </li>
            <li>C++ Program</li>
            <li>Sfml 2.6.1</li>
            <li>GUI Component, Custom Graphic</li>
          </ul>
        </aside>
      </section>

    {/* ✅ Block 1 — image LEFT, text RIGHT */}
    <div className="mt-12">
        <DetailSection
          title="Main Menu Interface"
          imgSrc="/solecollector/main.jpg"
          imgAlt="Main Menu Interface"
          imgClassName="object-[50%_50%] -mt-0.6"
          mediaAspectClass="aspect-[3/2.1]" 
          copy={
                 <>
                    <p>
                      The main menu lets players jump in with <strong>Start</strong>. 
                      Behind the scenes, it smoothly transitions between states while 
                      preloading textures so the gameplay feels seamless.
                    </p>
                  </>
                }
          />
    </div>
      
    {/* ✅ Block 2 — image RIGHT, text LEFT */}
      <div className="mt-8">
      <DetailSection
      reverse
      title="Game Play"
      imgSrc="/solecollector/game.jpg"
      imgAlt="GamePlay"
      imgClassName="object-[50%_50%]"
      mediaAspectClass="aspect-[4/3]"  
      copy={
            <>
              <p className="mb-2">
                Developed core mechanics focused on timing, scoring, and resource management:
              </p>

              <p className="font-semibold">Controls:</p>
              <ul className="list-disc pl-6 mb-3">
                <li><kbd>Space</kbd> / <kbd>Enter</kbd> — drop hook</li>
                <li><kbd>Esc</kbd> — exit the game</li>
              </ul>

              <p className="font-semibold">Mechanics:</p>
              <ul className="list-disc pl-6">
                <li>Objects have different values and can be set differently.</li>
                <li>Target scores scale with level progression.</li>
              </ul>
            </>
      }
      />
    </div>

{/* ✅ Block 3 — image LEFT, text RIGHT */}
    <div className="mt-12">
        <DetailSection
          title="Game Over"
          imgSrc="/solecollector/gameover.jpg"
          imgAlt="GameOver"
          imgClassName="object-[50%_50%] -mt-0.6"
          mediaAspectClass="aspect-[3/2]" 
          copy={
                 <>
                    <p>
                      At the end of each round, a results screen displays the final score, and quick restart or exit options.
                      Restart and menu navigation were designed for low friction replayability to encourage engagement.
                    </p>
                  </>
                }
          />
    </div>

      {/* Optional video */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Interface</h2>
        <div className="aspect-video overflow-hidden rounded-xl border border-white/10">
          {/* Replace with your real video URL */}
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/0hr6EG-51m4"
            title="Interface"
            allowFullScreen
          />
        </div>
      </section>

      {/* Optional video */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Game Play</h2>
        <div className="aspect-video overflow-hidden rounded-xl border border-white/10">
          {/* Replace with your real video URL */}
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/ZwD3-uwR4Dk"
            title="Game Play"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
