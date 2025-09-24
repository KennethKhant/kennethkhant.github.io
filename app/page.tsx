import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 mt-8 pl-10 min-h-[280px] md:min-h-[360px]">

        {/* Background image */}
        <Image
          src="/background.jpg"   
          alt="Background"
          fill
          className="object-cover object-[50%_30%]"
          priority
        />

        {/* Overlay so text is readable */}
        <div className="absolute inset-0 bg-black/80" />
        {/*
          ===== Black gradient background  =====
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-[#0b0c0f] to-[#0b0c0f]" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0
              [background:radial-gradient(transparent,transparent_60%,rgba(255,255,255,.05)_61%),
              linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]
              [background-size:100%_100%,24px_24px,24px_24px]
              [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          />
          */
        }
{/* Content */}
<div className="relative px-8 py-12 md:py-16">
  {/* Top row: avatar + name/school */}
  <div className="flex items-center gap-4">
    <Image
      src="/profile.jpg"
      alt="Kaung Khant"
      width={110}
      height={110}
      className="rounded-full ring-1 ring-white/20"
    />
    <div className="flex flex-col">
      <span className="text-2xl font-semibold text-white">
        Kaung K. Khant (Ken)
      </span>
      <span className="text-lg text-zinc-200">
        University of California San Diego (UCSD)
      </span>
    </div>
  </div>

  {/* Headline */}
  <h1 className="mt-4 text-2xl md:text-2xl font-semibold tracking-tight text-white">
    Electrical Engineering · Circuit &amp; System Design · Embedded · Robotics
  </h1>

  {/* Motto — punchy but lighter hierarchy */}
  <p className="mt-2 text-sm md:text-base text-zinc-200/90 italic">
    “Engineering with curiosity, building with purpose.”
  </p>

  {/* Summary */}
  <p className="mt-4 max-w-3xl text-zinc-300 leading-relaxed">
    Motivated and detail-oriented Electrical Engineering student with hands-on
    experience in circuit design, PCB design, power system analysis, and troubleshooting.
    Proficient in EasyEDA, KiCad, SolidWorks, and programming in C/C++. Experienced in
    applying these skills through team-based projects in robotics and embedded systems.
    Passionate about leveraging strong analytical and problem-solving abilities to
    develop innovative and reliable engineering solutions.
  </p>
</div>

      </section>

      {/* ================= EXPERTISE ================= */}
      <section
        id="systems"
        className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
      >
        <h3 className="text-m uppercase tracking-[0.2em] text-zinc-400 pl-1">
          Expertise
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Change your skills list here */}
          {[
            { k: "Electronics", v: "PCB • Arduino • Raspberry Pi • Circuit Analysis • Transistor • Op-Amp • Diodes • Motor/Driver" },
            { k: "Design", v: "PCB Design • KiCad • EasyEDA • AutoCAD • Onshape • SolidWork • Canva"},
            { k: "Hardware", v: "Soldering Through-Hole(THT) & Surface-Mount Device(SMD) • PID Control • 3D Printing • Laser Cutting" },
            { k: "Software", v: " Arduino • C/C++ • Python • MATLAB • Quantum Espresso • Vesta" },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-xl border border-white/10 p-4"
            >
              <div className="text-xs text-zinc-400">{item.k}</div>
              <div className="mt-1 text-sm">{item.v}</div>
            </div>
          ))}
        </div>
      </section>

  {/* ================= SELECTED WORK ================= */}
    <section className="mt-14">
      <div className="flex items-end justify-between">
        <h2 className="text-xl md:text-2xl font-semibold">Capabilities</h2>
          <Link href="/capabilities" className="text-m text-zinc-400 hover:text-zinc-200">
              See all →
          </Link>
      </div>

  {/* Project List*/}
  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {[
    {
      title: "Hovermap Robot",
      img: "/placeholder/Hovermap_cover.jpg",
      copy: "Compact inspection robot designed to navigate confined spaces like culverts and bridges, using cameras and sensors to map environments safely and efficiently.",
      href: "/capabilities/hovermap-robot",   
    },
    /*{
      title: "Aether-Morpheus System",
      img: "/placeholder/NASA_cover.jpg",
      copy: "Two systems that enhance astronaut safety during post-EVA operations by combining environmental monitoring and health assessment capabilities.",
      href: "/capabilities/aether-morpheus",  
    },*/
    {
      title: "PID Line Follower",
      img: "/placeholder/coverpid.jpg",
      copy: "Line follow robot with PID control to adjust its movements in real time, allowing it to maintain balance, follow paths, or stabilize systems with high accuracy.",
      href: "/capabilities/pid-line-follower", 
    },
    {
      title: "Little Minion",
      img: "/placeholder/speaker.jpg",
      copy: "Lil Minion is a simple audio amplifier built around the LM386 chip, designed to boost small input signals and drive an 8Ω speaker with clear output.",
      href: "/capabilities/speaker", 
    },
  ].map((p) => (
    <Link
      key={p.title}
      href={p.href}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition"
    >
      {/*  Image  */}
      <div className="relative h-64 w-full">
        <Image
          src={p.img}
          alt={p.title}
          fill
          className="object-cover opacity-90 group-hover:opacity-100 transition"
        />
      </div>
      {/* 👇 Hidden text panel (shows only on hover) */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 bg-black/80 text-white p-4 transition-transform duration-300">
        <h3 className="font-medium">{p.title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{p.copy}</p>
        <span className="mt-2 block text-xs text-zinc-400 group-hover:text-zinc-200 transition">
          Learn more →
        </span>
      </div>
    </Link>
  ))}
</div>



      </section>

      

      {/* ================= CONTACT ================= */}
       {/* <section
        id="contact"
        className="mt-10 flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-transparent p-6 text-center"
      >
        <h3 className="text-lg font-semibold">Contact Me</h3>

        <div className="flex gap-3">
          <a
            href="mailto:kkkhant@ucsd.edu"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/kaung-khant-830258311"
            target="_blank"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </section>
         */}

      {/* ================= ABOUT ME LINK ================= */}
      <Link
        href="/about"
        className="mt-10 block rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-transparent p-6 text-center hover:bg-white/10 transition"
      >
        <span className="text-sm font-semibold">More About Me</span>
      </Link>


    </main>
  );
}
