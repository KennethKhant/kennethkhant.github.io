import Image from "next/image";
import Link from "next/link";
import DetailSection from "../../components/DetailSection";

export default function CoinFlip() {
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
        <h1 className="text-4xl font-bold tracking-tight">CoinFlip</h1>
        <p className="text-zinc-300 max-w-2xl">
          An electronic coin-flipping circuit built on a custom PCB. Using a push-button, LEDs, and basic logic components, the board randomly lights up either 'Heads' or 'Tails' to simulate the toss of a coin. It demonstrates soldering practice, component placement, and fundamental circuit operation.
        </p>
      </header>

        {/* Big hero image */}
      
      <div className="mt-8 relative w-full aspect-[1/.5] overflow-hidden  border border-white/10">
        <Image
          src="/CoinFlip/coinflip.jpg"
          alt="Coin Flip"
          fill
          className="object-cover object-[50%_52%]"
          priority
        />
      </div>
      

      {/* Full-width explanation */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Analysis</h2>
        <p className="text-zinc-300 max-w-5xl leading-relaxed">
            This project introduced me to the basics of reading and understanding electronic signals. Using simple measurement tools and circuit experiments, I learned how waveforms behave, how timing affects outputs, and how small components work together to process information.
        </p>
        </section>

      {/* ✅ Block 1 — image LEFT, text RIGHT */}
      <div className="mt-16">
        <DetailSection
          title="Circuit Assembly"
          imgSrc="/CoinFlip/coinflipfinal.jpg"
          imgAlt="test2_assembly"
          imgClassName="object-[50%_60%]"
          mediaAspectClass="aspect-[4/3]" 
          copy={
            <>
              <p>
                Hands-on practice in building circuits from schematic to board. Involved soldering resistors, capacitors, LEDs, and ICs onto a PCB, ensuring correct orientation, solid joints, and functionality testing. Strengthened practical hardware skills while reinforcing theoretical circuit knowledge.
              </p>
            </>
          }
        />
      </div>

    </main>
  );
}
