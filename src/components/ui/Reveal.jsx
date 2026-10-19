import { createElement, useEffect, useRef, useState } from "react";
import { cx } from "@/lib/cx";

export function Reveal({
  as: Tag = "div",
  delay = 0,
  variant = "fade",
  rootMargin = "0px 0px 8% 0px",
  className,
  children,
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.08, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return createElement(
    Tag,
    {
      ref,
      style: { transitionDelay: `${delay}ms` },
      className: cx(variant === "clip" ? "reveal-clip" : "reveal", visible && "is-visible", className),
      ...props,
    },
    children,
  );
}
