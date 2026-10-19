import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({ eyebrow, title, lede, actions, visual }) {
  return (
    <section className="border-b border-border">
      <Container
        size="wide"
        className="grid items-end gap-10 pt-28 pb-12 sm:pt-32 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-16 lg:pt-36 lg:pb-16"
      >
        <div className="min-w-0">
          <Reveal rootMargin="0px">
            <p className="type-eyebrow">{eyebrow}</p>
            <h1 className="type-title mt-4 max-w-[min(18ch,100%)]">{title}</h1>
            {lede ? <p className="type-body mt-5 max-w-xl text-pretty text-muted">{lede}</p> : null}
            {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
          </Reveal>
        </div>
        {visual ? (
          <Reveal rootMargin="0px" delay={80} className="min-w-0">
            {visual}
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
