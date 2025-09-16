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
        <h1 className="text-4xl font-bold tracking-tight">Lil Minion</h1>
        <p className="text-zinc-300 max-w-2xl">
          &quot;Lil Minion&quot; is a simple audio amplifier built around the LM386 chip,
          designed to boost small input signals and drive an 8Ω speaker with clear output. 
          The name &quot;Lil Minion&quot; comes from the playful inspiration of the Minion character,
          reflecting both its compact size and the fun, approachable nature of the build.
        </p>
      </header>

      {/* Split hero: schematic + circuit */}
      <div className="mt-8 grid grid-cols-5 gap-4">
        <div className="relative col-span-3 h-[20rem] overflow-hidden rounded-none border border-white/10">
          <Image
            src="/amplifier/amplifier-schematic.jpg"
            alt="Amplifier schematic"
            fill
            className="object-cover object-[58%_37%]"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </div>
        <div className="relative col-span-2 h-[20rem] overflow-hidden rounded-none border border-white/10">
          <Image
            src="/amplifier/circuitassemble.jpg"
            alt="Assembled amplifier"
            width={590}
            height={480}
            quality={90}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Two-column content */}
      <section className="mt-12 grid gap-8 md:grid-cols-2 items-start">
        <article className="space-y-4 text-zinc-300 leading-relaxed">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            This amplifier project uses the LM386 chip to boost small audio
            signals so they can be played through a speaker. The circuit adds a
            few capacitors and resistors to smooth the sound, reduce noise, and
            keep everything stable. With a simple 9V battery supply, it can turn
            weak signals into clear audio, making it a great way to learn how
            sound systems work in electronics and robotics.
          </p>
        </article>

        <aside className="rounded-none border border-white/10 bg-white/[0.02] p-4">
          <h3 className="text-xl font-medium">Hardware</h3>
          <ul className="mt-2 list-disc list-inside text-m text-zinc-300 space-y-1">
            <li>
              <span className="font-medium">Amplifier Chip:</span> LM386
            </li>
            <li>
              <span className="font-medium">Speaker:</span> 8Ω driver
            </li>
            <li>
              <span className="font-medium">Component:</span> Capacitors,
              Resistors, Diodes
            </li>
            <li>
              <span className="font-medium">Optional:</span> Switch,
              Potentiometer
            </li>
            <li>
              <span className="font-medium">Battery:</span> 9V
            </li>
          </ul>
        </aside>
      </section>

      {/* Split #3 — test + waveform */}
      <div className="mt-8 grid gap-4 sm:grid-cols-5">
        <div className="relative sm:col-span-2 h-[20rem] overflow-hidden rounded-none border border-white/10">
          <Image
            src="/amplifier/test1.jpg"
            alt="Amplifier test setup"
            width={590}
            height={480}
            quality={90}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative sm:col-span-3 h-[20rem] overflow-hidden rounded-none border border-white/10">
          <Image
            src="/amplifier/waveform.jpg"
            alt="Oscilloscope waveform"
            fill
            className="object-cover object-[50%_50%]"
            sizes="(max-width: 640px) 100vw, 60vw"
          />
        </div>
      </div>

      {/* Full-width explanation */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Signal Analysis</h2>
        <p className="text-zinc-300 max-w-5xl leading-relaxed">
          The amplifier was tested using a waveform generator and monitored on a digital oscilloscope. 
          The output showed a clear increase in amplitude compared to the input, confirming that the LM386 can deliver effective low-voltage amplification. 
          The circuit maintained the signal shape with little distortion, while the coupling and bypass capacitors helped reduce high-frequency noise and kept the DC bias stable.
        </p>
      </section>

      {/* ✅ Block 1 — image LEFT, text RIGHT */}
      <div className="mt-16">
        <DetailSection
          title="Circuit Assembly"
          imgSrc="/amplifier/test2.jpg"
          imgAlt="test2_assembly"
          imgClassName="object-[50%_50%]"
          mediaAspectClass="aspect-[4/3]" 
          copy={
            <>
              <p>
                The amplifier circuit was first prototyped on a breadboard to validate the LM386 design before transferring it to a permanent PCB. 
                Key connections included the input coupling capacitor, biasing network, and output filter components that stabilize the signal. 
                With proper wiring and filter components, the circuit delivered stable gain and clean audio from a 9V battery to the speaker.
              </p>
            </>
          }
        />
      </div>

      {/* ✅ Block 2 — image RIGHT, text LEFT */}
      <div className="mt-8">
        <DetailSection
          reverse
          title="Chassis Design"
          imgSrc="/amplifier/body.jpg"
          imgAlt="Chassis Design"
          imgClassName="object-[50%_50%]"
          mediaAspectClass="aspect-[11/10]"  
          copy={
            <>
              <p>
                The body was designed in OnShape CAD to securely house the amplifier circuit, battery, and supporting components. 
                The layout includes a dedicated slot for the switch, an openable lid for debugging and battery replacement, and access to the potentiometer for volume adjustment. 
                Internal supports enhance structural rigidity and minimize vibrations, while the enclosure geometry improves acoustic projection and overall sound efficiency.
              </p>
            </>
          }
        />
      </div>

      {/* Demo split: video left, another right */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {/* LEFT: video */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm overflow-hidden rounded-none border border-white/10">
            <iframe
              className="w-full aspect-[9/16]"
              src="https://youtube.com/embed/LGARpa7rOvY?feature=share"
              title="Newborn Test"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT: video */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm overflow-hidden rounded-none border border-white/10">
            <iframe
              className="w-full aspect-[9/16]"
              src="https://youtube.com/embed/4kfEo8C5BEQ?feature=share"
              title="Amplifier Final Version"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
