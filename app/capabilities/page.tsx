// app/capabilities/page.tsx
import Link from "next/link";
import Image from "next/image";
import { capabilities } from "./data";

export const metadata = {
  title: "Capabilities",
  description: "Selected projects & systems.",
};

export default function CapabilitiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {/* Page header */}
      <div className="mb-6 flex items-end justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold">All Capabilities</h1>
        <Link href="/" className="text-m text-zinc-400 hover:text-zinc-200">
          ← Back to Home
        </Link>
      </div>

      {/* Cards grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((p) => (
          <Link
            key={p.slug}
            href={`/capabilities/${p.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 
                       bg-white/[0.02] transition-all duration-300 
                       hover:bg-white/[0.06] hover:shadow-[0_8px_40px_rgba(0,0,0,0.35)] 
                       hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:brightness-110"
                priority={false}
              />
              {/* subtle gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
            </div>

            {/* Text */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium group-hover:text-white">{p.title}</h3>
              </div>
              <p className="mt-2 text-sm text-zinc-400 group-hover:text-zinc-200 line-clamp-2">
                {p.copy}
              </p>

              {p.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] tracking-wide text-zinc-300 group-hover:bg-white/[0.08]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            {/* subtle ring on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-white/0 transition duration-300 group-hover:ring-1 group-hover:ring-white/20" />
          </Link>
        ))}
      </div>
    </main>
  );
}
