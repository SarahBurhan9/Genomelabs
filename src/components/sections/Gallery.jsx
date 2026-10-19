import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { galleryItems } from "@/data/gallery";
import { cx } from "@/lib/cx";

const CARD_SPAN = 336.67;

function buildUnit(items, viewportWidth) {
  const source = items.filter((item) => item.src);
  const unit = [];
  if (!source.length || viewportWidth <= 0) return unit;

  const target = viewportWidth * 1.35;
  while (unit.length * CARD_SPAN < target && unit.length < 80) {
    const before = unit.length;
    for (const item of source) {
      if (unit.length >= 80) break;
      unit.push(item);
    }
    if (unit.length === before) break;
  }

  return unit;
}

export function Gallery() {
  const viewportRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [reduced, setReduced] = useState(false);

  useLayoutEffect(() => {
    const node = viewportRef.current;
    if (!node) return undefined;

    const measure = () => setViewportWidth(node.clientWidth);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  const unit = buildUnit(galleryItems, viewportWidth);
  const rendered = reduced ? unit : [...unit, ...unit];
  const unitCount = reduced ? rendered.length : rendered.length / 2;
  const duration = Math.max(unitCount * 5.5, 36);

  return (
    <section id="gallery" className="section scroll-mt-24 bg-[#f5f4ed]">
      <Container size="wide">
        <p className="type-eyebrow">Gallery</p>
        <h2 className="type-title mt-4">Our Gallery</h2>
        <p className="type-body mt-5 max-w-xl text-muted">
          Photographs from the Genome Labs gallery.
        </p>
      </Container>

      <div
        ref={viewportRef}
        className={cx("gallery-viewport mt-12 lg:mt-16", reduced && "gallery-viewport--static")}
      >
        <div
          className={cx("gallery-track", reduced && "gallery-track--static")}
          style={{ "--og-duration": `${duration}s` }}
        >
          {rendered.map((item, index) => (
            <GalleryCard
              key={`${item.id}-${index}`}
              item={item}
              hidden={!reduced && index >= unit.length}
            />
          ))}
        </div>
        <div className="gallery-curve gallery-curve--top-a" aria-hidden="true" />
        <div className="gallery-curve gallery-curve--top-b" aria-hidden="true" />
        <div className="gallery-curve gallery-curve--bot-a" aria-hidden="true" />
        <div className="gallery-curve gallery-curve--bot-b" aria-hidden="true" />
      </div>
    </section>
  );
}

function GalleryCard({ item, hidden }) {
  const [failed, setFailed] = useState(false);

  return (
    <article className="gallery-card" aria-hidden={hidden || undefined}>
      {failed ? (
        <div className="gallery-card-fallback" />
      ) : (
        <img
          src={item.src}
          alt={hidden ? "" : item.title || "Gallery image"}
          loading="lazy"
          draggable="false"
          onError={() => setFailed(true)}
        />
      )}
    </article>
  );
}
