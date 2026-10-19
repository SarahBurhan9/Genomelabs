import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FramePhoto } from "@/components/visuals/FramePhoto";
import { technologies } from "@/data/technologies";
import { cx } from "@/lib/cx";

export function Technology({ showIntro = true }) {
  const [activeId, setActiveId] = useState(technologies[0].id);
  const active = technologies.find((item) => item.id === activeId) ?? technologies[0];
  const activeIndex = technologies.findIndex((item) => item.id === active.id);

  return (
    <section
      id={showIntro ? "technology" : undefined}
      className="section scroll-mt-24 bg-primary text-primary-foreground"
    >
      <Container size="wide">
        {showIntro ? (
          <Reveal className="max-w-3xl">
            <p className="type-eyebrow !text-accent-soft">04 — Technology</p>
            <h2 className="type-title mt-4 max-w-[min(18ch,100%)] !text-primary-foreground">
              The platforms the laboratory houses.
            </h2>
          </Reveal>
        ) : null}

        <div className={cx("grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:gap-12", showIntro && "mt-10 lg:mt-14")}>
          <Reveal variant="clip" className="relative min-h-[22rem] overflow-hidden sm:min-h-[30rem]">
            <div key={active.id} className="tech-stage absolute inset-0">
              <FramePhoto src={active.image} alt={active.imageAlt} position={active.imagePosition} className="shot-zoom" />
            </div>
            <div className="absolute top-5 left-5 border border-white/30 px-3 py-1 type-eyebrow !text-white">
              {String(activeIndex + 1).padStart(2, "0")} / {String(technologies.length).padStart(2, "0")}
            </div>
            <div className="photo-scrim absolute inset-x-0 bottom-0 px-6 py-6 sm:px-8">
              <p className="type-eyebrow !text-primary-foreground/70">{active.tag}</p>
              <p className="mt-2 max-w-md font-display text-3xl leading-tight sm:text-4xl">{active.name}</p>
            </div>
          </Reveal>

          <div className="flex min-w-0 flex-col justify-between">
            <p className="type-body text-primary-foreground/75">{active.description}</p>
            <ol className="mt-8 border-t border-white/15">
              {technologies.map((item) => {
                const selected = item.id === active.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      aria-pressed={selected}
                      onMouseEnter={() => setActiveId(item.id)}
                      onFocus={() => setActiveId(item.id)}
                      onClick={() => setActiveId(item.id)}
                      className={cx(
                        "flex w-full items-start gap-4 border-b border-white/15 py-4 text-left",
                        selected ? "text-white" : "text-primary-foreground/60 hover:text-white",
                      )}
                    >
                      <span className={cx("mt-1 h-8 w-px", selected ? "bg-accent" : "bg-white/25")} />
                      <span>
                        <span className="type-eyebrow !text-accent-soft">{item.tag}</span>
                        <span className="mt-1 block text-lg font-semibold tracking-tight">{item.name}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
