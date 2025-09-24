"use client";
import { useEffect, useRef, useState, PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  /** ms after it enters the viewport */
  delay?: number;
  /** how far it slides up (Tailwind class, e.g. 'translate-y-6') */
  offsetClass?: string;
  /** once visible, keep it shown (default true) */
  once?: boolean;
}>;

export default function Reveal({
  children,
  delay = 0,
  offsetClass = "translate-y-6",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setTimeout(() => setShow(true), delay);
          if (once) obs.disconnect();
        } else if (!once) {
          setShow(false);
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, once]);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        show ? "opacity-100 translate-y-0" : `opacity-0 ${offsetClass}`,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
