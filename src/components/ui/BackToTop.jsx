import { useEffect, useState } from "react";
import { cx } from "@/lib/cx";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollTop}
      className={cx(
        "fixed right-5 bottom-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-[0_10px_28px_rgb(16_42_67/0.16)] transition-[opacity,transform,background-color,color,border-color] duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:right-8 sm:bottom-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
      )}
    >
      <ArrowUp />
    </button>
  );
}

function ArrowUp() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M12 19V6M6.5 11.5 12 6l5.5 5.5" />
    </svg>
  );
}
