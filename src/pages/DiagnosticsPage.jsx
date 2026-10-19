import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { ResearchList } from "@/components/sections/ResearchList";
import { Technology } from "@/components/sections/Technology";
import { FramePhoto } from "@/components/visuals/FramePhoto";
import { researchItems } from "@/data/research";

const focus = [
  {
    label: "Real-time PCR",
    text: "Infectious and genetic disease testing by detecting pathogen-specific nucleic acid.",
  },
  {
    label: "HCV and HBV",
    text: "The centre names HCV and HBV among the work done with real-time PCR.",
  },
  {
    label: "Extraction",
    text: "SaMag, from Sacace Biotechnologies in Italy, is the fully automated extraction system.",
  },
];

export function DiagnosticsPage() {
  const notes = researchItems.filter((item) => item.category === "Laboratory note");

  return (
    <>
      <PageHero
        eyebrow="Diagnostics"
        title="PCR-based testing, on the platforms the laboratory houses."
        lede="Genome Centre presents its diagnostic work as quality PCR and molecular diagnostics: real-time PCR for infectious and genetic disease testing, including pathogen nucleic acid in HCV and HBV work."
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
        visual={
          <div className="relative min-h-[16rem] overflow-hidden bg-primary sm:min-h-[18rem]">
            <FramePhoto
              src="/media/pcr-bench.jpg"
              alt="Real-time PCR instruments on a bench in the Genome Labs laboratory."
              position="center"
            />
          </div>
        }
      />

      <section className="section">
        <Container size="wide">
          <Reveal className="max-w-2xl">
            <p className="type-eyebrow">Testing focus</p>
            <h2 className="type-title mt-4 max-w-[min(16ch,100%)]">
              What the laboratory says it tests.
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-px bg-border md:grid-cols-3">
            {focus.map((item, index) => (
              <li key={item.label} className="bg-background">
                <Reveal delay={index * 60}>
                  <article className="px-1 py-7 md:px-6">
                    <h3 className="text-lg font-semibold tracking-tight">{item.label}</h3>
                    <p className="type-small mt-2 text-muted">{item.text}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Technology showIntro={false} />

      <section className="section border-t border-border">
        <Container size="wide">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="max-w-2xl">
              <p className="type-eyebrow">Laboratory notes</p>
              <h2 className="type-title mt-4 max-w-[min(16ch,100%)]">
                Analyzers the centre has recorded.
              </h2>
              <p className="type-body mt-5 text-muted">
                Two notes from 30 July 2021 record hematology analyzers from
                Sysmex and Mindray, and the Mindray BS-240 chemistry analyser.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <Button href="/research" variant="outline" className="w-full sm:w-auto">
                View Research
              </Button>
            </Reveal>
          </div>
          <ResearchList className="mt-12" items={notes} />
        </Container>
      </section>
    </>
  );
}
