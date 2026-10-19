import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FramePhoto } from "@/components/visuals/FramePhoto";
import { aboutPoints } from "@/data/about";
import { useParallax } from "@/lib/useParallax";

export function AboutGenome() {
  const photo = useParallax(14);

  return (
    <section id="about-genome" className="section scroll-mt-24 overflow-hidden">
      <Container size="wide">
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal>
            <p className="type-eyebrow">05 — About Genome</p>
            <h2 className="type-display mt-4 max-w-[12ch] text-[clamp(2.4rem,5vw,4.4rem)]">
              Four rooms in Johar Town, for real-time PCR.
            </h2>
          </Reveal>
          <Reveal delay={80} className="lg:-mb-16">
            <div className="relative min-h-[16rem] overflow-hidden sm:min-h-[20rem]">
              <div ref={photo} className="absolute -inset-y-4 inset-x-0">
                <FramePhoto
                  src="/media/building.jpg"
                  alt="The Genome Center building in Lahore."
                  position="center"
                  className="shot-zoom"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 border-t border-border pt-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <Reveal>
            <p className="type-body max-w-md text-muted">
              In August 2011, Genome Centre for Molecular Diagnostics became
              functional in Lahore. It was opened as a private molecular
              laboratory for infectious and genetic disease testing by
              real-time PCR.
            </p>
            <Button href="/about" variant="outline" className="mt-8 w-full sm:w-auto">
              Learn About Genome
            </Button>
          </Reveal>
          <ol className="grid gap-8 sm:grid-cols-3">
            {aboutPoints.map((point, index) => (
              <li key={point.label}>
                <Reveal delay={index * 80}>
                  <span className="rule-draw block h-px w-full bg-accent" />
                  <p className="type-eyebrow mt-4">{point.label}</p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{point.title}</h3>
                  <p className="type-small mt-2 text-muted">{point.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
