import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FramePhoto } from "@/components/visuals/FramePhoto";
import { reasons } from "@/data/reasons";
import { useParallax } from "@/lib/useParallax";

export function WhyGenome() {
  const photo = useParallax(18);

  return (
    <section id="about" className="section scroll-mt-24 bg-surface-muted">
      <Container size="wide">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
          <Reveal variant="clip" className="relative min-h-[22rem] overflow-hidden sm:min-h-[28rem] lg:min-h-[36rem]">
            <div ref={photo} className="absolute -inset-y-6 inset-x-0">
              <FramePhoto
                src="/media/lab-bench.jpg"
                alt="The PCR bench at Genome Centre, with laboratory computers and instruments."
                position="center"
                className="shot-zoom"
              />
            </div>
            <p className="pointer-events-none absolute top-4 left-4 font-display text-[5.5rem] leading-none text-white/25 sm:text-[7rem]">
              03
            </p>
            <div className="photo-scrim absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="type-eyebrow !text-primary-foreground/70">Lahore</p>
              <p className="mt-2 font-display text-3xl leading-tight text-primary-foreground">Established August 2011</p>
            </div>
          </Reveal>

          <div className="lg:pt-10 lg:pl-6">
            <Reveal>
              <p className="type-eyebrow">Why Genome</p>
              <h2 className="type-title mt-4 max-w-[min(16ch,100%)]">
                A molecular laboratory for careful PCR work.
              </h2>
              <p className="type-body mt-5 max-w-xl text-muted">
                Genome Centre for Molecular Diagnostics & Research opened in
                Lahore to provide quality PCR tests and molecular diagnostic
                services. The work still centres on the platforms the laboratory
                houses.
              </p>
            </Reveal>

            <ol className="mt-8">
              {reasons.map((reason, index) => (
                <li key={reason.index}>
                  <Reveal delay={index * 60}>
                    <article className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 border-t border-border py-5">
                      <span className="font-display text-2xl text-primary/35">{reason.index}</span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight">{reason.title}</h3>
                        <p className="type-small mt-1 max-w-lg text-muted">{reason.text}</p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal delay={200}>
              <Button href="/about" variant="outline" className="mt-8 w-full sm:w-auto">
                Learn About Genome
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
