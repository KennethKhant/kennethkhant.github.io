// app/components/DetailSection.tsx
import Image from "next/image";
import { ReactNode } from "react";

type DetailSectionProps = {
  title?: string;
  copy?: ReactNode;
  imgSrc?: string;
  imgAlt?: string;
  reverse?: boolean; // when true: image on the right, text on the left
  children?: ReactNode; // allow custom content like videos, lists, etc.
};

export default function DetailSection({
  title,
  copy,
  imgSrc,
  imgAlt = "",
  reverse = false,
  children,
}: DetailSectionProps) {
  return (
    <section
      className={`grid items-center gap-8 md:gap-12 md:grid-cols-2 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image (or custom media) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
        {imgSrc ? (
          <Image src={imgSrc} alt={imgAlt} fill className="object-cover" />
        ) : (
          // If no imgSrc, allow custom media (e.g., video) via children
          <div className="absolute inset-0">{children}</div>
        )}
      </div>

      {/* Text */}
      <div>
        {title && <h3 className="text-xl font-semibold">{title}</h3>}
        {copy && <div className="mt-3 text-zinc-300 leading-relaxed space-y-3">{copy}</div>}
        {/* If you want extra children below copy (e.g., bullets) */}
        {!imgSrc && children ? <div className="mt-3" /> : null}
      </div>
    </section>
  );
}
