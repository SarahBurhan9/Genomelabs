import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { FramePhoto } from "@/components/visuals/FramePhoto";
import { aboutPoints } from "@/data/about";
import { capabilities } from "@/data/capabilities";
import { reasons } from "@/data/reasons";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Genome"
        title="A molecular laboratory in Johar Town since 2011."
        lede="Genome Centre for Molecular Diagnostics became functional in Lahore in August 2011. It opened as a private laboratory for infectious and genetic disease testing by real-time PCR."
        actions={
          <>
            <Button href="/services" className="w-full sm:w-auto">
              Explore Services
            </Button>
            <Button href="/contact" variant="outline" className="w-full sm:w-auto">
              Contact
            </Button>
          </>
        }
        visual={<LabPanel />}
      />

      <section className="section">
        <Container size="wide">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <Reveal>
              <p className="type-eyebrow">Company story</p>
              <h2 className="type-title mt-4 max-w-[min(16ch,100%)]">
                Four rooms, arranged for molecular work.
              </h2>
              <p className="type-body mt-5 text-muted">
                The laboratory describes its setting as four separate rooms in
                Johar Town, Lahore, arranged for the conditions a molecular lab
                requires.
              </p>
            </Reveal>
            <ol>
              {aboutPoints.map((point, index) => (
                <li key={point.label}>
                  <Reveal delay={index * 60}>
                    <article className="grid gap-2 border-t border-border py-6 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
                      <p className="type-eyebrow">{point.label}</p>
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold tracking-tight">{point.title}</h3>
                        <p className="type-small mt-2 max-w-lg text-muted">{point.text}</p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="section border-t border-border">
        <Container size="wide">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <p className="type-eyebrow">Purpose</p>
                <h2 className="type-title mt-4 max-w-[min(16ch,100%)]">
                  Quality PCR and molecular diagnostics.
                </h2>
              </Reveal>
              <ul className="mt-8">
                {reasons.map((reason, index) => (
                  <li key={reason.index}>
                    <Reveal delay={index * 50}>
                      <FeatureItem {...reason} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Reveal>
                <p className="type-eyebrow">Capabilities</p>
                <h2 className="type-title mt-4 max-w-[min(14ch,100%)]">
                  What the centre was opened to do.
                </h2>
              </Reveal>
              <ul className="mt-8 grid gap-px bg-border sm:grid-cols-2">
                {capabilities.map((item, index) => (
                  <li key={item.title} className="bg-background">
                    <Reveal delay={index * 50}>
                      <article className="px-1 py-6 sm:px-5">
                        <p className="type-eyebrow">{item.index}</p>
                        <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h3>
                        <p className="type-small mt-2 text-muted">{item.text}</p>
                      </article>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Reveal className="mt-12">
            <Button href="/diagnostics" variant="outline" className="w-full sm:w-auto">
              Diagnostics
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function LabPanel() {
  return (
    <div className="relative min-h-[16rem] overflow-hidden bg-primary text-primary-foreground sm:min-h-[20rem]">
      <FramePhoto
        src="/media/building.jpg"
        alt="The Genome Center building in Lahore."
        position="center"
      />
      <div className="photo-scrim absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="type-eyebrow !text-primary-foreground/65">Johar Town, Lahore</p>
        <p className="mt-3 max-w-xs font-display text-2xl leading-tight font-medium text-balance sm:text-3xl">
          Four rooms, one molecular laboratory.
        </p>
      </div>
    </div>
  );
}
