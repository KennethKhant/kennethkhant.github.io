import Image from "next/image";
import Link from "next/link";

/** ---------- Small building block: one alternating section ---------- */
type SectionProps = {
  title: string;
  body: string;
  image: string;        // /about/filename.jpg (placed under /public/about)
  imageAlt?: string;
  imageOn?: "left" | "right"; // which side image appears on desktop
};

function AltSection({ title, body, image, imageAlt = "", imageOn = "left" }: SectionProps) {
  return (
    <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
      <div
        className={[
          "grid gap-6 md:grid-cols-2 items-center",
          imageOn === "right" ? "md:[&>*:first-child]:order-2" : "",
        ].join(" ")}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-white/10">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Text */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="leading-relaxed text-zinc-300">{body}</p>
        </div>
      </div>
    </section>
  );
}

/** ---------- Optional video block (full width) ---------- */
type VideoProps = {
  title?: string;
  src: string;      // local: /videos/clip.mp4  or an external URL
  poster?: string;  // poster image (optional) e.g. /about/poster.jpg
};

function VideoBlock({ title, src, poster }: VideoProps) {
  return (
    <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
      {title ? <h3 className="mb-4 text-xl font-semibold">{title}</h3> : null}
      <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
        {/* Local or hosted MP4 */}
        <video className="w-full h-auto" controls playsInline poster={poster}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      {/* Top */}
      <div className="mb-6">
        <Link href="/" className="text-m text-zinc-400 hover:text-zinc-200">
          ← Back to Home
        </Link>
      </div>

      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Who I Am</h1>
        <p className="text-zinc-300 max-w-3l">
          Hi — I’m Kaung (Ken). Here I share a little about my daily life, interests, and what I’m
          building outside of class.
        </p>

        
      </header>

      {/* --------- Alternating sections --------- */}
      <AltSection
        imageOn="left"
        image="/about/building-1.jpg"
        imageAlt="Lab bench and tools"
        title="Weekend Builds"
        body="I love turning ideas into hardware: schematics, PCBs, firmware, and validation.
        When I’m not soldering or tuning a PID loop, I’m usually reading about robotics,
        hiking La Jolla trails, or dialing in coffee."
      />

      <AltSection
        imageOn="right"
        image="/about/building-2.jpg"
        imageAlt="Outdoor shot or hobby"
        title="Notes & Experiments"
        body="I keep a small notebook of experiments—motor drivers I’ve tried, battery protection
        approaches, and notes on reliability in the field. This page is a more casual version of that:
        what I’m learning, messing up, and fixing."
      />

      {/* --------- Full-width video --------- */}
      <VideoBlock
        title="Short Clip: Test Drive"
        src="/videos/test-drive.mp4"     // put your clip in /public/videos/
        poster="/about/video-poster.jpg" // optional poster image
      />

      {/* Add more alternating sections as needed */}
      <AltSection
        imageOn="left"
        image="/about/building-3.jpg"
        imageAlt="Workspace"
        title="Why I Build"
        body="For me, the best part is shipping something that works in the real world—reliable,
        field-ready systems that someone else can use without thinking about what’s inside."
      />
    </main>
  );
}
