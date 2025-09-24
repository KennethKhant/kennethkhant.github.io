"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Slide = { src: string; alt?: string };

type Props = {
  images: Slide[];
  aspect?: string;
  className?: string;
  fit?: "contain" | "cover";
  controlsOffsetPx?: number;
};

export default function SwipeFrame({
  images,
  aspect = "aspect-video",
  className = "",
  fit = "contain",
  controlsOffsetPx = 24,
}: Props) {
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState({ active: false, startX: 0, dx: 0 });
  const frameRef = useRef<HTMLDivElement>(null);

  const clamp = (n: number) => Math.max(0, Math.min(n, images.length - 1));
  const THRESHOLD = 60;

  const start = (x: number) => setDrag({ active: true, startX: x, dx: 0 });
  const move = (x: number) =>
    setDrag((d) => (d.active ? { ...d, dx: x - d.startX } : d));
  const end = () => {
    if (!drag.active) return;
    if (drag.dx <= -THRESHOLD) setIndex((i) => clamp(i + 1));
    else if (drag.dx >= THRESHOLD) setIndex((i) => clamp(i - 1));
    setDrag({ active: false, startX: 0, dx: 0 });
  };

  const width = frameRef.current?.clientWidth ?? 1;
  const translate = -index * 100 + (drag.active ? (drag.dx / width) * 100 : 0);

  return (
    <div className={["relative w-full", className].join(" ")}>
      {/* Frame */}
      <div
        ref={frameRef}
        tabIndex={0}
        className={[
          "relative w-full overflow-hidden rounded-xl border border-white/10 bg-black select-none",
          aspect,
        ].join(" ")}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          start(e.clientX);
        }}
        onPointerMove={(e) => move(e.clientX)}
        onPointerUp={(e) => {
          e.currentTarget.releasePointerCapture?.(e.pointerId);
          end();
        }}
        onPointerCancel={end}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") setIndex((i) => clamp(i + 1));
          if (e.key === "ArrowLeft") setIndex((i) => clamp(i - 1));
        }}
        aria-roledescription="carousel"
      >
        {/* track */}
        <div
          className="absolute inset-0 flex"
          style={{
            transform: `translateX(${translate}%)`,
            transition: drag.active ? "none" : "transform 240ms ease",
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="relative shrink-0 grow-0 basis-full">
              <Image
                src={img.src}
                alt={img.alt ?? `Slide ${i + 1}`}
                fill
                className={fit === "cover" ? "object-cover" : "object-contain"}
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Prev button */}
      <button
        onClick={() => setIndex((i) => clamp(i - 1))}
        disabled={index === 0}
        aria-label="Previous image"
        className={`group z-10 absolute top-1/2 -translate-y-1/2 -translate-x-full 
                    flex h-12 w-12 items-center justify-center 
                    rounded-full bg-black/70 
                    hover:bg-grey hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]
                    transition focus:outline-none
                    ${index === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
        style={{ left: 0, marginLeft: `-${controlsOffsetPx}px` }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          className="transition group-hover:stroke-black"
        >
          <path
            d="M15 18L9 12l6-6"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={() => setIndex((i) => clamp(i + 1))}
        disabled={index === images.length - 1}
        aria-label="Next image"
        className={`group z-10 absolute top-1/2 -translate-y-1/2 translate-x-full 
                    flex h-12 w-12 items-center justify-center 
                    rounded-full bg-black/70 
                    hover:bg-grey hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]
                    transition focus:outline-none
                    ${
                      index === images.length - 1
                        ? "opacity-40 cursor-not-allowed"
                        : ""
                    }`}
        style={{ right: 0, marginRight: `-${controlsOffsetPx}px` }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          className="transition group-hover:stroke-black"
        >
          <path
            d="M9 6l6 6-6 6"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
