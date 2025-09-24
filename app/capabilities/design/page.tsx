import Image from "next/image";
import Link from "next/link";
import SwipeFrame from "../../components/SwipeFrame";

export default function HovermapRobotPage() {
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
        <h1 className="text-4xl font-bold tracking-tight">Graphic Design Portfolio</h1>
        <p className="text-zinc-300 max-w-5xl">
          This portfolio highlights selected works that explore the intersection of design, function, and sustainability. Each project demonstrates not only visual creativity but also problem-solving through design thinking.       
        </p>
      </header>

      {/* Full-width explanation */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Product Design & Analysis</h2>
            <ul className="text-zinc-300 max-5xl mt-3 pl-0 space-y-1">
              <li>My product design work focuses on reimagining everyday objects with a sustainable and user-centered approach. From concept sketches to final prototypes, I aim to create designs that are both functional and environmentally conscious. The EcoSwab packaging project, for example, rethinks disposable hygiene products by integrating eco-friendly materials and modern aesthetics while improving usability.</li>
            </ul>
      </section>

      {/* Swipe Frame (5 images) */}
      <section className="mt-8">
        <SwipeFrame
          images={[
            { src: "/design_analysis/productdesign3.jpg", alt: "Design 1" },
            { src: "/design_analysis/productdesign4.jpg", alt: "Design 2" },
            { src: "/design_analysis/productdesign5.jpg", alt: "Design 3" },
            { src: "/design_analysis/productdesign1.jpg", alt: "Design 4" },
            { src: "/design_analysis/productdesign2.jpg", alt: "Design 5" },
          ]}
          aspect="aspect-[3/2]"     // pick the ratio that matches your photos (e.g., aspect-video, aspect-[4/3], etc.)
          fit="contain"             // "contain" shows full images; switch to "cover" for edge-to-edge (may crop)
          className="border-white/10"
        />
      </section>

      {/* Swipe Frame (11 images) */}
      <section className="mt-8">
        <SwipeFrame
          images={[
            { src: "/design_analysis/productdesign/pen1.jpg", alt: "Product Design 1" },
            { src: "/design_analysis/productdesign/pen2.jpg", alt: "Product Design 2" },
            { src: "/design_analysis/productdesign/pen3.jpg", alt: "Product Design 3" },
            { src: "/design_analysis/productdesign/pen4.jpg", alt: "Product Design 4" },
            { src: "/design_analysis/productdesign/pen5.jpg", alt: "Product Design 5" },
            { src: "/design_analysis/productdesign/pen6.jpg", alt: "Product Design 6" },
            { src: "/design_analysis/productdesign/pen7.jpg", alt: "Product Design 7" },
            { src: "/design_analysis/productdesign/pen8.jpg", alt: "Product Design 8" },
            { src: "/design_analysis/productdesign/pen9.jpg", alt: "Product Design 9" },
            { src: "/design_analysis/productdesign/pen10.jpg", alt: "Product Design 10" },
            { src: "/design_analysis/productdesign/pen11.jpg", alt: "Product Design 11" },
          ]}
          aspect="aspect-[3/2]"     // pick the ratio that matches your photos (e.g., aspect-video, aspect-[4/3], etc.)
          fit="contain"             // "contain" shows full images; switch to "cover" for edge-to-edge (may crop)
          className="border-white/10"
        />
      </section>

            {/* Swipe Frame (3 images) */}
      <section className="mt-8">
        <SwipeFrame
          images={[
            { src: "/design_analysis/productdesign/pen12.jpg", alt: "Product Design 12" },
            { src: "/design_analysis/productdesign/pen13.jpg", alt: "Product Design 13" },
            { src: "/design_analysis/productdesign/pen14.jpg", alt: "Product Design 14" },
          ]}
          aspect="aspect-[3/2]"     // pick the ratio that matches your photos (e.g., aspect-video, aspect-[4/3], etc.)
          fit="contain"             // "contain" shows full images; switch to "cover" for edge-to-edge (may crop)
          className="border-white/10"
        />
      </section>

      {/* Full-width explanation */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Flyer Design</h2>
            <ul className="text-zinc-300 max-w-5xl mt-3 pl-0 space-y-2">
              <li>This section showcases a series of flyers created for campus events and student engagement for Pasadena City College International Student Center. Each design balances clarity of information with visual appeal, using bright colors, playful illustrations, and structured layouts to catch attention while staying easy to read</li>
            </ul>
      </section>

      {/* Big hero image 1*/}
      <div className="mt-8">
        <Image
          src="/design_portfolio/flyerdesign1.jpg"
          alt="Flyer design1"
          width={1440}           
          height={960}           
          className="block max-w-full h-auto rounded-none border border-black mx-auto"
          priority
        />
      </div>

      {/* Big hero image 2*/}
      <div className="mt-8">
        <Image
          src="/design_portfolio/flyerdesign2.jpg"
          alt="Flyer design2"
          width={1440}           
          height={960}           
          className="block max-w-full h-auto rounded-none border border-black mx-auto"
          priority
        />
      </div>

      {/* Big hero image 3*/}
      <div className="mt-8">
        <Image
          src="/design_portfolio/flyerdesign3.jpg"
          alt="Flyer design3"
          width={1440}           
          height={960}           
          className="block max-w-full h-auto rounded-none border border-black mx-auto"
          priority
        />
      </div>
    </main>
  );
}
