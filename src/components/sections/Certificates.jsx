import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { certificates } from "@/data/certificates";

export function Certificates() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(null);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section id="certificates" className="section scroll-mt-24 border-t border-border">
      <Container size="wide">
        <Reveal className="max-w-2xl">
          <p className="type-eyebrow">Certificates</p>
          <h2 className="type-title mt-4 max-w-[min(16ch,100%)]">Registration and quality.</h2>
          <p className="type-body mt-5 text-muted">
            These are the certificates published by Genome Labs.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-16 lg:grid-cols-4">
          {certificates.map((item, index) => (
            <Reveal key={item.id} delay={index * 80} className="h-full">
              <button
                type="button"
                className="cert-card flex h-full w-full cursor-pointer flex-col bg-surface p-3 text-left sm:p-4"
                onClick={() => setOpen(item)}
              >
                <span className="block aspect-[1058/1497] bg-surface-muted">
                  <img
                    src={item.src}
                    alt=""
                    className="h-full w-full object-contain"
                    loading="lazy"
                    draggable="false"
                  />
                </span>
                <span className="mt-4 block font-semibold text-primary">{item.title}</span>
                <span className="type-small mt-1 block text-muted">{item.detail}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/80 p-4 sm:p-8"
          onClick={() => setOpen(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
            className="relative"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={open.src}
              alt={open.title}
              className="block max-h-[88vh] w-auto max-w-[92vw]"
            />
            <button
              type="button"
              className="type-small absolute top-3 right-3 bg-primary px-3 py-1.5 text-primary-foreground hover:bg-primary-hover"
              onClick={() => setOpen(null)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
