import Image from "next/image";
import Link from "next/link";

export default function NASAPage() {
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
        <h1 className="text-4xl font-bold tracking-tight">Aether-Morpheus Medibot</h1>
        <p className="text-zinc-300 max-w-6xl">
          Dual-system safety and health assistant designed for astronauts for the{" "}
          <strong>NASA MINDS Challenge</strong> returning from EVAs, combining{" "}
          <strong>Aether</strong> for environmental monitoring and{" "}
          <strong>Morpheus</strong> for post-EVA health assessment.
        </p>
      </header>

      {/* Big hero image */}
      <div className="mt-8 relative h-120 w-full overflow-hidden rounded-2xl border border-white/10">
        <Image 
          src="/placeholder/NASA_cover.jpg" 
          alt="Aether Robot" 
          fill className="object-cover object-[50%_40%]" 
          priority />
      </div>

      {/* Two-column content */}
      <section className="mt-12 grid gap-8 md:grid-cols-2 items-start">
        <article className="space-y-8 text-zinc-300 leading-relaxed">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            The Aether–Morpheus Medibot is a dual-system safety and health assistant designed for astronauts returning from extravehicular activities EVAs.
            <p>
            Aether Environmental Safety Module monitors the airlock for dust, VOCs, CO₂, pressure, temperature, and humidity. It ensures the repressurized environment is safe before astronauts remove their suits.
            </p>

            <p>
            Morpheus Post-EVA Health Module provides non-contact thermal scans, motion/fatigue tests, heart rate & oxygen monitoring, GSR skin response, and muscle activity tracking.
            </p>

            <p>
              Together, they create an integrated workflow: Aether confirms environmental safety, and Morpheus evaluates astronaut health, delivering real-time data for flight surgeons and mission support.
            </p>
          </p>
          <p>
          </p>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <h3 className="text-lg font-medium">Specs / Stack</h3>
          <ul className="mt-2 list-disc list-inside text-sm text-zinc-300 space-y-1">
            <li>
              <strong>Aether Sensors:</strong> PMS5003 (PM1.0/2.5/10), BME280 (temp/humidity/pressure),
              SGP30 (VOCs), MH-Z19B (CO₂), OLED display, HC-SR501 PIR, servo arm.
            </li>
            <li>
              <strong>Morpheus Sensors:</strong> MLX90614/90640 (thermal scan), Camera + OpenCV,
              MAX30100 (HR + SpO₂), Grove GSR, EMG sensor.
            </li>
            <li>
              <strong>Electronics:</strong> Arduino microcontrollers, integrated power management.
            </li>
            <li>
              <strong>Software:</strong> OpenCV motion analysis, Arduino sensor drivers, OLED alerts.
            </li>
            <li>
              <strong>Mechanical:</strong> CAD housings, retractable robotic arm, modular mounting in
              airlock & habitat.
            </li>
          </ul>
        </aside>
        
      <h4 className="text-4xl font-bold text-red-500 text-center mt-8">
        The Project is still going on! Coming Soon!!!!!
      </h4>      
      </section>

    </main>
  );
}
