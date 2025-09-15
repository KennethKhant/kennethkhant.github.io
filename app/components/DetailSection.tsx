import Image from "next/image";
import { ReactNode } from "react";

type DetailSectionProps = {
  title?: string;
  copy?: ReactNode;
  imgSrc?: string;
  imgAlt?: string;
  reverse?: boolean;          // when true: image on the right, text on the left
  children?: ReactNode;       // custom media (e.g., <video/iframe>) if no imgSrc
  imgClassName?: string;      // e.g., "object-bottom" or "object-[50%_80%]"
  mediaAspectClass?: string;  // e.g., "aspect-[3/2]" | "aspect-[4/3]" | defaults to 16:10
};

export default function DetailSection({
  title,
  copy,
  imgSrc,
  imgAlt = "",
  reverse = false,
  children,
  imgClassName = "",
  mediaAspectClass = "aspect-[16/10]",
}: DetailSectionProps) {
  return (
    <section
      className={`grid items-center gap-8 md:gap-12 md:grid-cols-2 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image (or custom media) */}
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] ${mediaAspectClass}`}
      >
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            className={`object-cover ${imgClassName}`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="absolute inset-0">{children}</div>
        )}
      </div>

      {/* Text */}
      <div>
        {title && <h3 className="text-xl font-semibold">{title}</h3>}
        {copy && (
          <div className="mt-3 text-zinc-300 leading-relaxed space-y-3">
            {copy}
          </div>
        )}
      </div>
    </section>
  );
}
