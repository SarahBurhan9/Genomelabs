import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="section scroll-mt-24 border-t border-border bg-surface-muted">
      <Container size="wide">
        <Reveal className="max-w-2xl">
          <p className="type-eyebrow">Testimonials</p>
          <h2 className="type-title mt-4 max-w-[min(16ch,100%)]">What our patients say.</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 80} className="h-full">
              <figure className="relative flex h-full flex-col overflow-hidden border border-border bg-surface px-6 pt-8 pb-7 sm:px-8 sm:pt-10 sm:pb-8">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-2 left-5 font-display text-[6.5rem] leading-none text-accent select-none sm:text-[7.5rem]"
                >
                  “
                </span>
                <blockquote className="relative z-10 mt-14 mb-8 font-display text-[1.35rem] leading-snug font-medium text-foreground sm:mt-16 sm:text-[1.65rem]">
                  {item.quote}
                </blockquote>
                <figcaption className="relative z-10 mt-auto flex items-center gap-4 border-t border-border pt-5">
                  <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent" />
                  <span>
                    <span className="block font-semibold text-primary">{item.name}</span>
                    <span className="type-small mt-0.5 block text-muted">Patient, {item.place}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
