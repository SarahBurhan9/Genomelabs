import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { FramePhoto } from "@/components/visuals/FramePhoto";
import { services } from "@/data/services";
import { cx } from "@/lib/cx";

export function ServiceGrid({ className }) {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <div className={cx("grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16", className)}>
      <div className="lg:sticky lg:top-28">
        <p className="type-eyebrow">02 — Diagnostics</p>
        <Reveal variant="clip" className="relative mt-5 min-h-[20rem] overflow-hidden sm:min-h-[26rem] lg:min-h-[32rem]">
          <div key={current.image} className="tech-stage absolute inset-0">
            <FramePhoto src={current.image} alt={current.imageAlt} position={current.imagePosition} className="shot-zoom" />
          </div>
          <div className="photo-scrim absolute inset-x-0 bottom-0 px-5 py-5">
            <p className="type-eyebrow !text-primary-foreground/70">{current.note}</p>
            <p className="mt-2 font-display text-2xl leading-tight text-primary-foreground">{current.title}</p>
          </div>
        </Reveal>
      </div>

      <ol>
        {services.map((service, index) => {
          const on = index === active;
          return (
            <li key={service.title}>
              <button
                type="button"
                className={cx("diag-row group w-full border-t border-border py-6 text-left sm:py-7", on && "is-on")}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <span className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-4xl leading-none text-primary/25 sm:text-5xl">{service.index}</span>
                  <span className="diag-mark mt-2 block h-px shrink-0" />
                </span>
                <span className="diag-shift mt-3 block font-display text-[1.65rem] leading-tight text-primary sm:text-3xl">
                  {service.title}
                </span>
                <span className={cx("mt-3 block max-w-xl text-sm leading-relaxed text-muted sm:text-base", on ? "block" : "hidden sm:block")}>
                  {service.summary}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
