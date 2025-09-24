import Image from "next/image";
import Link from "next/link";

/** ---------- Small building block: one alternating section ---------- */
type SectionProps = {
  title: string;
  body: string;
  image: string;        
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

    <header className="space-y-4 mb-10">   {/* added mb-10 for spacing */}
      <h1 className="text-3xl md:text-4xl font-bold">Who I Am</h1>
      <p className="text-zinc-300 max-w-8xl">
        Hi!!! I’m Kaung Khant(Ken),an Electrical Engineering student at UC San Diego who loves building robots, tinkering with hardware, and solving problems with technology.
        Here I share a little about my daily life, interests, and what I’m building outside of class.
      </p>
    </header>


      {/* --------- Alternating sections --------- */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left side image */}
        <div className="w-full md:w-[40%] flex justify-start ">
          <Image
            src="/aboutme/1.jpg"
            alt="Lab bench and tools"
            width={600}   // you can tweak this
            height={450}
            unoptimized
            className="h-[450px] w-auto max-w-full"
          />
        </div>

        {/* Right side text */}
        <div className="w-full md:w-[60%] space-y-4 max-w-prose">
          <h2 className="text-2xl font-bold">What I Do?</h2>
          <p className="text-zinc-200">
            My focus is on electronics, robotics, and embedded systems, but I also enjoy diving into software projects and experimenting with new tech. 
            Whether it’s CAD design, PCB layout, or coding in C/C++, I love bringing ideas to life. 
            When I’m not in the lab or soldering a circuit you’ll probably find me
            hiking arund SD,reading about psychology, listening music or dialing in coffee/tea.
          </p>

        {/* 👇 New block */}
           <h2 className="text-2xl font-bold">My Journey</h2>
            <p className="text-zinc-200">
              Since I was young, I’ve been fascinated by electronics and circuit boards. I still remember
              the first time I opened up a broken RC car my dad bought for me. I didn’t know what a PCB
              was back then, but when I saw that green board with wires and components, I was curious.
              My dad helped me fix it by soldering a loose wire, and that moment sparked my interest in
              how things work.
            </p>
            <p className="text-zinc-200">
              Later in high school, one of my favorite physics professors introduced me to series and
              parallel connections with batteries and LEDs. I started experimenting on my own, and the
              joy I felt <span className="font-semibold">when the LED lit up</span> confirmed my determination to pursue
              electrical engineering as a career.
            </p>
        </div>
        
      </section>

      {/* --------- Alternating sections --------- */}
      <section className="mt-16 flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Left side text */}
      <div className="w-full md:w-[70%] space-y-4 max-w-prose">
          <h2 className="text-2xl font-bold">What Motivate Me?</h2>
          <p className="text-zinc-200">
            For me, engineering is about more than just making things work. It’s about
            building systems that people can actually use, tools that make life easier,
            safer, or more exciting. I’m motivated by the challenge of taking an idea
            that only exists on paper and transforming it into a real, working system
            that can be held, tested, and trusted in the field.
          </p>
          <p className="text-zinc-200">
            I find energy in problem-solving whether that’s debugging a stubborn circuit,
            redesigning a PCB that didn’t fit the first time, or optimizing code until it
            runs just right. Those small wins remind me why I chose this path. The moment
            when something I built powers on for the first time is what keeps me moving
            forward.
          </p>
          <p className="text-zinc-200">
            At the core, what drives me most is impact. I want my projects to do more
            than just prove a concept they should help people, spark curiosity, or
            inspire others to create. Knowing that my work might make someone else’s
            problem a little easier to solve gives me the motivation to keep building,
            learning, and pushing boundaries.
          </p>       
      </div>    
   

        {/* Right side image */}
        <div className="w-full md:w-[40%] flex justify-end">
          <Image
            src="/aboutme/2.JPG"
            alt="Lab bench and tools"
            width={800}   // you can tweak this
            height={500}
            unoptimized
            className="h-[450px] w-auto max-w-full"
          />
        </div>

      </section>

      <div className="mt-8 w-full flex justify-center">
        <Image
          src="/aboutme/4.jpg"
          alt="Aether Robot"
          width={800}   // can be actual width or a max width you want
          height={750}
          unoptimized
          className="h-[750px] w-auto max-w-full"
          priority
        />
      </div>


      {/* --------- Full-width video --------- */}
      {/*<VideoBlock
        title="Short Clip: Test Drive"
        src="/videos/test-drive.mp4"     // put your clip in /public/videos/
        poster="/about/video-poster.jpg" // optional poster image
      />
      */}

    </main>
  );
}
