import Link from "next/link";
import DetailSection from "@/app/components/DetailSection";

export const metadata = {
  title: "Hovermap Robot — Capabilities",
  description:
    "Compact inspection robot designed to navigate confined spaces with multi-sensor mapping.",
};

const TAGS = ["Mapping", "Robotics", "Inspection"];

export default function HovermapDetailPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      {/* Back */}
      <Link href="/capabilities" className="text-sm text-zinc-400 hover:text-zinc-200">
        ← Back to Capabilities
      </Link>

      {/* Header */}
      <header className="mt-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Hovermap Robot
        </h1>
        <p className="mt-2 max-w-3xl text-zinc-300">
          Compact inspection platform built for confined spaces—sensors and mapping
          workflow optimized for culverts, bridges, and crawl spaces.
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs tracking-wide text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* Body sections */}
      <div className="mt-10 space-y-16 md:space-y-24">
        {/* Section 1: Text left, image right */}
        <DetailSection
          reverse={false}
          title="Client Context & Goals"
          copy={
            <>
              <p>
                The objective was to safely capture reliable maps of confined spaces where
                GPS is unavailable and line-of-sight is limited. The platform integrates
                a LiDAR module with IMU fusion to maintain trajectory in tight corridors.
              </p>
              <p>
                Emphasis was placed on robustness, quick field setup, and an operator-first
                workflow. The payload can be swapped without re-tuning and uses sealed
                connectors to resist moisture and dust.
              </p>
            </>
          }
          imgSrc="/capabilities/hovermap.jpg"
          imgAlt="Hovermap robot on inspection task"
        />

        {/* Section 2: Image left, text right (reverse layout) */}
        <DetailSection
          reverse
          title="Electronics & Control"
          copy={
            <>
              <p>
                The system runs an embedded controller for motor drives and telemetry,
                while a companion compute handles LiDAR and mapping. CAN and UART
                busses are used for deterministic communication.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-300">
                <li>Brushless drives with current limiting</li>
                <li>Sealed, keyed harnessing for field serviceability</li>
                <li>On-board logging with fail-safe power paths</li>
              </ul>
            </>
          }
          imgSrc="/capabilities/hovermap-elec.jpg" // optional second image if you have it
          imgAlt="Electronics stack"
        />

        {/* Section 3: Video example (no imgSrc → children renders) */}
        <DetailSection title="Demo Run (video)">
          <video
            className="h-full w-full object-cover"
            src="/capabilities/hovermap-demo.mp4"
            controls
            playsInline
          />
        </DetailSection>
      </div>

      {/* Footer nav (optional) */}
      <div className="mt-16 border-t border-white/10 pt-6 flex items-center justify-between">
        <Link href="/capabilities" className="text-sm text-zinc-400 hover:text-zinc-200">
          ← Back to Capabilities
        </Link>
        <Link
          href="/"
          className="text-sm text-zinc-400 hover:text-zinc-200"
        >
          Back to Home →
        </Link>
      </div>
    </main>
  );
}
